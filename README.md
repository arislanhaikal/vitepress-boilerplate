# Vitepress Starter Kit

Simple Vitepress boilerplate for a documentation site include internationalization (i18n)

## How to setup

1. Clone this repo
2. Navigate to the project directory.
3. Run `yarn install`
4. Run `yarn dev` for local development
5. Run `yarn build` for production
6. Access `http://localhost:5173/` for local development

## File Structure

- docs -> .vitepress
- docs -> .vitepress/config.ts (App settings)
- docs -> .vitepress/sidebar
- docs -> root (Home page)
- docs -> en (English)

## How to add a new page

1. Create a new markdown file in the docs folder.
2. Add the new page to navigation menu in the `docs/.vitepress/sidebar` file.
3. Read full documentation on [Vitepress](https://vitepress.dev/guide/what-is-vitepress)
