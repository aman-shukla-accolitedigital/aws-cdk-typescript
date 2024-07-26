
import React from 'react';
import ReactDOMClient from 'react-dom/client';
// @ts-expect-error
import singleSpaReact from 'single-spa-react';
import App from './App';
import { cssLifecycleFactory } from 'vite-plugin-single-spa/ex';

const lc = singleSpaReact({
    React,
    ReactDOMClient,
    rootComponent: App,
    errorBoundary(err: any, _info: any, _props: any) {
        return '<div>Error: {err}</div>'
    }
});

// IMPORTANT:  The argument passed here depends on the file name.
const cssLc = cssLifecycleFactory('app');

export const bootstrap = [cssLc.bootstrap, lc.bootstrap];
export const mount = [cssLc.mount, lc.mount];
export const unmount = [cssLc.unmount, lc.unmount];

// must be called "devtools"
export const devtools = {
    overlays: {
      // selectors is required for overlays to work
      selectors: [
        // an array of CSS selector strings, meant to be unique ways to identify the outermost container of your app
        // you can have more than one, for cases like parcels or different containers for differet views
   
      ],
      // options is optional
      options: {
        // these options allow you some control over how the overlay div looks/behaves
        // the listed values below are the defaults
  
        width: "100%",
        height: "100%",
        zIndex: 40,
        position: "absolute",
        top: 0,
        left: 0,
        color: "#000", // the default for this is actually based on the app's name, so it's dynamic. can be a hex or a CSS color name
        background: "#000", // the default for this is actually based on the app's name, so it's dynamic. can be a hex or a CSS color name
        textBlocks: [
          // allows you to add additional text to the overlay. for example, you can add the name of the team/squad that owns this app
          // each string in this array will be in a new div
          // 'blue squad', 'is awesome'
          // turns into:
          // <div>blue squad</div><div>is awesome</div>
        ],
      },
    },
  };