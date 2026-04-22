# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contact form email backend

The contact form posts to the local API at `/api/contact`.

Copy `.env.example` to `.env` and set your SMTP values before starting the backend:

```bash
npm run server
```

The SMTP server lives in [backend/server.js](backend/server.js).

```bash
npm run dev
```

`npm run dev` now starts both the frontend and the SMTP backend together. The backend validates name, email, phone, service, and message server-side, applies rate limiting, and emails the submission to `amstarholding@gmail.com`.
