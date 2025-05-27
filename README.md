# 📅 Customisable Calendar Component (Vue 3)

This project provides a **customisable and reusable Vue.js calendar component** that allows users to pick a **date range** or define a **time unit + value** combination (e.g. "2 weeks", "3 months").

---

## 🚀 Features

- Fully configurable input:
    - `select` for time units (year, quarter, month, week, day, hour, minute)
    - numeric `input` for unit values
    - `date pickers` for ranges: from-to, from-only, to-only
- Input constraints:
    - Disable unwanted select options
    - Min/max values and date limits
- Clean JSON output structure
- Simple integration with your app


## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
