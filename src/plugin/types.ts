/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-themer MoBrix-engine-plugin-themer} type definitions
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-themer
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 */

import { MoBrixEnginePlugin } from "mobrix-engine-types";

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-themer MoBrix-engine-plugin-themer} theme field
 *
 * @returns `themer` plugin
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-themer
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 */
export type ThemerPluginThemeField = {
  bodyColor?: string;
  uiColor?: string;
};

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-themer MoBrix-engine-plugin-themer} theme
 *
 * @returns `themer` plugin
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-themer
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 */
export type ThemerPluginTheme = {
  /** Settings applied when dark-mode is off */
  default?: ThemerPluginThemeField;

  /** Settings applied when dark-mode is on */
  dark?: ThemerPluginThemeField;
};

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-themer MoBrix-engine-plugin-themer} interface
 *
 * @returns `themer` plugin
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-themer
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 */
export type ThemerPlugin = MoBrixEnginePlugin<{
  theme?: ThemerPluginTheme;
}>;
