# Nuxt 3 Delacon

A nuxt module for integrating Delacon call tracking into your Nuxt 3 application.

<a href="https://npm-stat.com/charts.html?package=vue3-carousel"><img src="https://img.shields.io/npm/dm/nuxt3-delacon.svg" alt="npm"/></a>

## Getting Started


### Installation

First step is to install it using `yarn` or `npm`:

```bash
npm install nuxt3-delacon
# or
yarn add nuxt3-delacon
```

### Usage

In your Nuxt 3 project, create a nuxt.config.ts file if you don't already have one, and add the module to the modules array:

```js
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    ['nuxt3-delacon', {
      mid: 'your-mid', // Your Delacon MID
      cid: ['your-cid'] // Your Delacon CID
    }]
  ]
})
```
Replace 'your-mid' and 'your-cid' with your actual Delacon MID and CID values.

### Options

#### `mid` (required)
Your Delacon MID.
- Type: `Integer`

#### `cid` (required)
Your Delacon CID. If an array is provided, it will be joined with "-" delimiter before passing to Delacon.
- Type: `string|int[]`

### License
[MIT License](./LICENSE)

Copyright (c) Gian Carlo Saquilayan
