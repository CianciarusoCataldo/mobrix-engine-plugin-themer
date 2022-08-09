/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-themer MoBrix-engine-plugin-themer} init file
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-themer
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 */

import { ThemerPlugin } from "./types";

/** utils  */

import { applyTheme, setBodyClass } from "./helper";
import { createMoBrixEnginePlugin } from "mobrix-engine-tools";

/**
 * Extend {@link https://github.com/CianciarusoCataldo/mobrix-engine MoBrix-engine} with the a theme manager. Themer plugin checks
 * the MoBrix-engine config file for `theme` field. If the field is set, the given theme will be applied on the entire web-app through global
 * window object
 *
 * @returns `themer` plugin
 *
 * @example <caption>Use `themer` plugin with `MoBrix-engine` </caption>
 * //Inside your MoBrix-engine config file
 *
 * const { themerPlugin } = require("mobrix-engine-plugin-themer");
 *
 * const config = {
 *  appName: "custom-app",
 *  plugins: [themerPlugin],
 *
 * //Define theme field
 *  theme: {
 *    //Settings applied when dark mode is on
 *    dark: {
 *      //body background color set when dark-mode is on
 *      bodyColor: "linear-gradient(to right, #3c4a5f, #4d5f7d)",
 *         },
 *
 *    //Settings applied when dark mode is off
 *    default: {
 *      //body background color set when dark-mode is off
 *      bodyColor: "linear-gradient(to right, #eaebec, #cccdcf)",
 *    },
 *  },
 *};
 *
 * module.exports = { config };
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-themer
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 */
const themerPlugin: ThemerPlugin = createMoBrixEnginePlugin("themer", () => ({
  field: (config) => {
    const theme = applyTheme(config.theme);

    return {
      name: "theme",
      content: theme,
    };
  },

  interactions: [
    {
      plugin: "ui",
      effect: (uiConfig) => {
        const darkMode = uiConfig.darkMode || false;
        setBodyClass(darkMode);
        uiConfig.onDarkModeChange.push((darkMode) => {
          setBodyClass(darkMode);
          window.document.body.style.background = "";
        });

        return uiConfig;
      },
    },
  ],
}));

export default themerPlugin;
