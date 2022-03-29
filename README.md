# next-app-bp

![License](https://img.shields.io/badge/license-MIT-brightgreen?style=flat)
![Version](https://img.shields.io/github/v/release/princejoogie/next-app-bp?color=%2349C31B&include_prereleases&label=version)

A NextJS boilerplate with all essentials included.

| Name        | Version |
| :---------- | :------ |
| ✅ Tailwind | v3.0.18 |
| ✅ Eslint   | v8.12.0 |
| ✅ Prettier | v2.6.1  |
| ✅ Husky    | v7.0.4  |
| ✅ Jest     | v27.5.1 |
| ✅ Cypress  | v9.5.3  |

## Installation

```bash
git clone --depth=1 https://github.com/princejoogie/next-app-bp.git <project-name>
cd <project-name>
rm -rf .git
git init .
```

## Usage

### Local Development

```bash
# Install dependencies
yarn install
# Start development server
yarn dev
# Build for prod
yarn build
```

### With Docker

Docker files can be updated in `/docker/<development|production>/Dockerfile`

> make sure to include `.env.development` and `.env.development` to your `.gitignore` file

#### Development Environment

```bash
# build
make build-development
# start
make start-development
# stop
make stop-development
```

#### Production Environment

```bash
# build
make build-production
# start
make start-production
# stop
make stop-production
```

### Testing

```bash
# to run both unit and e2e tests:
yarn test
# to run only unit tests:
yarn test:unit
# to run only e2e tests:
yarn test:e2e
```

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

Like the project? would appreciate a coffee ☕

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/princejoogie)

### Contributor list

[![Contributors](https://contrib.rocks/image?repo=princejoogie/joog-uno)](https://github.com/princejoogie/next-app-bp/graphs/contributors)

---

Made by [**Prince Carlo Juguilon**](https://princecaarlo.tech/) together with these awesome [**Contributors**](https://github.com/princejoogie/next-app-bp/graphs/contributors).
