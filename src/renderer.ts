/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css'

console.log('👋 This message is being logged by "renderer.js", included via webpack');

import * as LUME from 'lume'

LUME.defineElements()

let nodeEl: any = document.getElementById('node')
nodeEl.rotation = (x: number, y: number, z: number) => [x, y + 1, z]

// const {Scene, Node} = LUME
// const scene = new Scene()

// const node = new Node().set({
//     position: [50, 50, 0], // X, Y, and Z position
//     size: [100, 100, 0], // X, Y, and Z size
// })

// node.style.background = 'cornflowerblue'
// scene.append(node)
// document.body.append(scene)
// node.rotation = (x: number, y: number, z: number) => [x, y + 1, z]

// // The code outputs these elements to the DOM:
// // <body>
// //   <lume-scene>
// //     <lume-node position="50 50 0" size="100 100 0"></lume-node>
// //   </lume-scene>
// // </body>

// // Define LUME's HTML elements with their default names.
// LUME.defineElements();

// // We wrote the rotation function this way so that it would always start
// // at the angle defined in the HTML.
// let lastTime = performance.now();
// let dt = 0;
// moonRotator.rotation = (x, y, z, time) => {
//   dt = time - lastTime;
//   lastTime = time;
//   return [x, y, z + dt * 0.01];
// };

// // ^ We could've written it more simply but it would start at some angle
// // based on time instead of our preferred angle:
// // moonRotator.rotation = (x, y, z, t) => [x, y, t * 0.004];

// earth.rotation = (x, y, z, t) => [x, t * 0.01, z];
// clouds.rotation = (x, y, z, t) => [x, -t * 0.003, z];