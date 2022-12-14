# MoBrix-engine-plugin-themer

![NPM](https://img.shields.io/npm/l/mobrix-engine-plugin-themer?label=License&style=for-the-badge)
![npm](https://img.shields.io/npm/v/mobrix-engine-plugin-themer?color=orange%20&label=Latest%20version&style=for-the-badge&logo=npm)
![npm bundle size](https://img.shields.io/bundlephobia/min/mobrix-engine-plugin-themer?label=Package%20size&style=for-the-badge)
![Maintenance](https://img.shields.io/maintenance/yes/2025?label=Maintained&style=for-the-badge)

---

<br>

Enhance [MoBrix-engine](https://github.com/CianciarusoCataldo/mobrix-engine) with a custom theme compatible with [MoBrix-ui lib](https://github.com/CianciarusoCataldo/mobrix-ui)

<br>

---

## Summary

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [API](#api)
  - [Config](#config)
- [Integration with other plugins](#integration-with-other-plugins)
- [Included libraries](#included-libraries)
- [Authors](#authors)
- [License](#license)

<br>

---

## Getting started

<br>

### Installation

If you want to use this plugin with [MoBrix-engine](https://github.com/CianciarusoCataldo/mobrix-engine), install it:

```sh
npm i mobrix-engine-plugin-themer
```

<br>

### Usage

Check [MoBrix-engine](https://github.com/CianciarusoCataldo/mobrix-engine) guide to init the system

Include this plugin inside your MoBrix-engine config file, optionally with `theme` field set:

```tsx
//Inside your MoBrix-engine config file

const { themerPlugin } = require("mobrix-engine-plugin-themer");

const config = {
  appName: "custom-app",
  plugins: [themerPlugin],

  //Define theme field
  theme: {
    //Settings applied when dark mode is on
    dark: {
      //body background color set when dark-mode is on
      bodyColor: "linear-gradient(to right, #3c4a5f, #4d5f7d)",
    },

    //Settings applied when dark mode is off
    default: {
      //body background color set when dark-mode is off
      bodyColor: "linear-gradient(to right, #eaebec, #cccdcf)",
    },
  },
};

module.exports = { config };
```

As a side effect, a new class-name is applied on the body, dependent on `dark-mode` value (if [mobrix-engine-plugin-ui](https://github.com/CianciarusoCataldo/mobrix-engine-plugin-ui) is enabled):

- `light` : dark-mode is off
- `dark` : dark-mode is on

<br>

---

## API

### Config

This plugin adds adds a custom field inside MoBrix-engine config, `theme`. Inside this field, there are the plugin settings:

- `default` : these settings are applied when `dark-mode` is off,
- `dark` : these settings are applied when `dark-mode` is on,

Both contain 2 optional fields:

- `uiColor` : this color is used as a background for every MoBrix-ui lib, check its [guide](https://cianciarusocataldo.github.io/mobrix-ui/docs/#/?id=customizable-ui) for details (for now, the plugin support only `--mobrix-ui-custom-background-dark` and `--mobrix-ui-custom-background-light` css properties are supported)
- `bodyColor`: body background color

Check the [usage section](#usage) for a real example

---

## Integration with other plugins

- if you use [MoBrix-engine-plugin-ui](https://github.com/CianciarusoCataldo/mobrix-engine-plugin-ui) too, you can keep the body background color in sync with actual dark mode. Try it with [MoBrix-engine](https://github.com/CianciarusoCataldo/mobrix-engine) playground (enable/disable dark mode, and the body bakground will be updated) - https://cianciarusocataldo.github.io/mobrix-engine
  <br>

---

## Included libraries

- [MoBrix-engine-types](https://github.com/CianciarusoCataldo/mobrix-engine-types) - to use MoBrix-engine type definitions inside the plugin
- [MoBrix-utils](https://github.com/CianciarusoCataldo/mobrix-utils) - to use shared utils functions during init process
- This lib is written entirely with [Typescript](https://www.typescriptlang.org/)

<br>

---

## Authors

- [**Cataldo Cianciaruso**](https://github.com/CianciarusoCataldo)

<br>

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
