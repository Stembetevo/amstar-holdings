import { Helmet } from 'react-helmet-async'

const siteName = 'Amstar Holdings'
const defaultDescription =
  'Amstar Holdings provides electrical installations, solar installations, energy audits, and strategic energy consulting in Nairobi, Kenya.'
const defaultImage = '/logo.png'
const fallbackSiteUrl = 'http://localhost:5173'

function Seo({
  title,
  description = defaultDescription,
  path = '/',
  image = defaultImage,
  type = 'website',
  noindex = false,
  schema,
}) {
  const siteUrl = import.meta.env.VITE_SITE_URL || fallbackSiteUrl
  const canonical = new URL(path, siteUrl).href
  const imageUrl = new URL(image, siteUrl).href
  const pageTitle = title ? `${title} | ${siteName}` : siteName

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${canonical}#business`,
    name: siteName,
    url: canonical,
    image: imageUrl,
    telephone: '+254 721954575',
    email: 'amstarholding@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Utawala, Embakasi East',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    areaServed: 'Nairobi, Kenya',
    description,
  }

  const schemaList = [businessSchema, ...(Array.isArray(schema) ? schema : schema ? [schema] : [])]

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schemaList.map((item, index) => (
        <script key={`${canonical}-${index}`} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  )
}

export default Seo