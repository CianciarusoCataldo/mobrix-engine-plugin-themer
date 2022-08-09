/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-themer MoBrix-engine-plugin-themer} init file
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-themer
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 */

import { ThemerPluginTheme } from "./types";

import { fillObject } from "mobrix-utils";

import {
  themerPluginCssProperties,
  themerPluginDefaultTheme,
} from "./constants";

export const setBodyClass = (darkMode: boolean) => {
  window.document.body.classList.remove("dark", "light");

  window.document.body.classList.add(darkMode ? "dark" : "light");
};

export const applyTheme = (inputTheme?: ThemerPluginTheme) => {
  const theme = fillObject({
    toFill: inputTheme,
    defaultObj: themerPluginDefaultTheme,
  });
  let uiStyle = "";
  let bodyStyle = "";
  const defaultColors = theme.default || {};
  const darkColors = theme.dark || {};

  if (defaultColors.uiColor) {
    uiStyle += `${themerPluginCssProperties.default.background}: ${defaultColors.uiColor}; `;
  }

  if (defaultColors.bodyColor) {
    bodyStyle += ` body.light { background: ${defaultColors.bodyColor}; }`;
  }

  if (darkColors.uiColor) {
    uiStyle += `${themerPluginCssProperties.dark.background}: ${darkColors.uiColor}; `;
  }

  if (darkColors.bodyColor) {
    bodyStyle += ` body.dark { background: ${darkColors.bodyColor}; }`;
  }

  let customStyle: string = `
    * {
      ${uiStyle}
    }
    ${bodyStyle}
  * {
    scrollbar-width: thin;
    scrollbar-color: #c0c0c0;
  }
  
  *::-webkit-scrollbar {
    width: 12px;
  }
  
  *::-webkit-scrollbar-track {
    background: linear-gradient(to right, #2d3748, #1d232e);
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: #c0c0c0;
    border-radius: 20px;
    border: 3px solid #c0c0c0;
  }
  `;

  const style = document.createElement("style");
  style.textContent = customStyle;
  document.head.append(style);

  return theme;
};
