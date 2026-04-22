import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 3001)
const allowedOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

const serviceLabels = {
  'electrical-installations': 'Electrical Installations',
  'solar-installations': 'Solar Installations',
  'energy-audits': 'Electricity / Energy Audits',
  'energy-consulting': 'General Energy Consulting',
}

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80).regex(/^[A-Za-z][A-Za-z\s.'-]*$/, 'Enter a valid name.'),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().min(7).max(30).regex(/^[+]?[-()\d\s.]{7,30}$/, 'Enter a valid phone number.'),
  service: z.enum(Object.keys(serviceLabels)),
  message: z.string().trim().min(20).max(2000),
})

app.disable('x-powered-by')
app.use(helmet())
app.use(express.json({ limit: '20kb' }))
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    standardHeaders: true,
    legacyHeaders: false,
  }),
)

if (allowedOrigins.length > 0) {
  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true)
          return
        }

        callback(new Error('Origin not allowed by CORS'))
      },
    }),
  )
}

app.get('/health', (_request, response) => {
  response.json({ ok: true })
})

app.post('/api/contact', async (request, response) => {
  const parsed = contactSchema.safeParse(request.body)

  if (!parsed.success) {
    response.status(400).json({
      error: 'Please correct the highlighted fields and try again.',
      details: parsed.error.flatten().fieldErrors,
    })
    return
  }

  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number(process.env.SMTP_PORT || 587)
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const mailFrom = process.env.MAIL_FROM || smtpUser
  const mailTo = process.env.MAIL_TO || 'amstarholding@gmail.com'

  if (!smtpHost || !smtpUser || !smtpPass || !mailFrom) {
    response.status(500).json({
      error:
        'Mail service is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and MAIL_FROM in your environment.',
    })
    return
  }

  const { name, email, phone, service, message } = parsed.data
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  try {
    await transporter.sendMail({
      from: `Amstar Holdings Website <${mailFrom}>`,
      to: mailTo,
      replyTo: email,
      subject: `New website enquiry: ${serviceLabels[service]}`,
      text: [
        'You received a new enquiry from the Amstar Holdings website.',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${serviceLabels[service]}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    response.status(200).json({
      message: 'Your message has been sent to Amstar Holdings successfully.',
    })
  } catch {
    response.status(500).json({
      error: 'Unable to send the email right now. Please try again later.',
    })
  }
})

app.use((error, _request, response, _next) => {
  if (error instanceof Error && error.message === 'Origin not allowed by CORS') {
    response.status(403).json({ error: 'This origin is not allowed.' })
    return
  }

  response.status(500).json({ error: 'Unexpected server error.' })
})

app.listen(port, () => {
  console.log(`Mail API running on http://localhost:${port}`)
})