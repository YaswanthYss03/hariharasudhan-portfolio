# Picto - Personal Portfolio Free Template

#### Preview

- [Demo](https://themewagon.github.io/picto/)

#### Download

- [Download from ThemeWagon](https://themewagon.com/themes/picto)

## Getting Started

1. Clone Repository

```
git clone https://github.com/themewagon/picto.git
```

2. Install Dependencies

```
npm i
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Contact Form

The contact form uses a simple `mailto:` flow.
When users click submit, their default email app opens with the subject and
message pre-filled.

To set your receiving address, update `recipientEmail` in:

- `src/components/contact/Form.jsx`

## Deploy on Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Use these settings:
	- Framework Preset: `Vite`
	- Build Command: `npm run build`
	- Output Directory: `dist`
4. Make sure `VITE_REPO_NAME` is empty for root deployment.

This project includes `vercel.json` with SPA rewrites so page refresh and deep links work correctly.

## Author

```
Developed by ThemeWagon and development team.
```

## License

- Design and Code is Copyright &copy; <a href="http://themewagon.com/" target="_blank">ThemeWagon</a>
- Licensed cover under [MIT]
- Developed by <a href="http://themewagon.com/" target="_blank">ThemeWagon</a>
