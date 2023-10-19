# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

## TODO BY MYSELF

- [ ] update the text above
- [ ] add a storybook application in apps folder
- [ ] add a vite vue3 application in the apps folder
- [ ] add a vite nuxt3 application in the apps folder
- [ ] add a nestjs backend app in the apps folder
- [ ] add a package eslint-config-collection in the packages folder that contains eslint setups for all kind of typescript frameworks
- [ ] add a tsconfig package in the packages folder that contains all kind of tsconfig.json setups for all frameworks to be reused
- [ ] add an utils package that collects all kind of plain typescript functions and utils in the packages folder, independent from whatever framework
- [ ] add an vue3-ui package that collects all kind of shared vue components that can be reused in the apps projects
- [ ] add a shared-types package in the packages folder that contains all kinds of classes and interfaces that can be used in all kinds of typescript projects.
- [ ] add a plopfilejs generator package that can add templates for a specific language framework in the packages folder (kinda like angular/cli)
- [ ] add a plugins package in packages folder that contains functionality code that can be reused in all kinds of frameworks
- [ ] add a package to generate swagger files into typescript files interfaces
- [ ] add an i18n package that contains all kinds of translations that can be reused, in yml, json and/or typescript format
- [ ] add a reactjs application in the apps folder
- [ ] add an angular application in the apps folder
- [ ] 

## Libraries, packages and links

- [Next.js](https://nextjs.org/)
- [Vue.js](https://vuejs.org/)
  - [Vue.js Router](https://router.vuejs.org/)
  - [Pinia](https://pinia.vuejs.org/)
  - [Vueuse](https://vueuse.org/)
  - [Vitest](https://vitest.dev/)
  - [Vue macros](https://github.com/vue-macros/vue-macros)
  - [Unplugin vue components](https://github.com/unplugin/unplugin-vue-components)
  - [Unplugin auto import](https://github.com/unplugin/unplugin-auto-import)
  - []()
- [Angular](https://angular.io/cli)
- [ReactJs](https://react.dev/)
- [NestJS](https://nestjs.com/)
- [PNPM](https://pnpm.io/)
- [Vite](https://vitejs.dev/)
- [Plopfile.JS](https://plopjs.com/)
- [Nuxt.js]()
- [Storybook](https://storybook.js.org/)
- [Tsconfig]()
- [Eslint](https://eslint.org/)
  - [antfu eslint config](https://github.com/antfu/eslint-config)
- [Prettier](https://prettier.io/)
- [Unocss](https://github.com/unocss/unocss)
- [Vscode](https://code.visualstudio.com/)
  - [Vue volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
  - [Vue volar TS](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
- [Cypress](https://www.cypress.io/)
- [Lefthook](https://github.com/evilmartians/lefthook)
- [Turbo.build](https://turbo.build/)
- []()
- []()
- []()
- []()

## tutorials links

