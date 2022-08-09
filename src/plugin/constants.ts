/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-themer MoBrix-engine-plugin-themer} constants file
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-themer
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 */

import { ThemerPluginTheme } from "./types";

export const themerPluginCssProperties = {
  default: {
    background: "--mobrix-ui-custom-background-light",
    text: "--mobrix-ui-custom-text-color-light",
  },
  dark: {
    background: "--mobrix-ui-custom-background-dark",
    text: "--mobrix-ui-custom-text-color-dark",
  },
} as const;

export const themerPluginDefaultTheme: ThemerPluginTheme = {
  default: {},
  dark: {},
};
