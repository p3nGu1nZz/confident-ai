import './index.css'
import * as LUME from 'lume'
import { createGameLoop } from '@wmcmurray/game-loop-js'

// Create WebGL Scene
LUME.defineElements()
const { Scene, Node } = LUME
const scene = new Scene()

/// FPS Counter
const fpsNode = new Node().set({
  id: "l-fps-counter",
  position: [-390, -268, 0],
  size: [40, 20, 0],
  textContent: "..."
})

/// TODO use recursion please

const node = new Node().set({
  position: [0, 25, 0],
  size: [100, 100, 0],
})

const node2 = new Node().set({
  position: [100, 25, 0],
  size: [100, 100, 0],
})

const node3 = new Node().set({
  position: [200, 25, 0],
  size: [100, 100, 0],
})

const node4 = new Node().set({
  position: [300, 25, 0],
  size: [100, 100, 0],
})

const node5 = new Node().set({
  position: [400, 25, 0],
  size: [100, 100, 0],
})

const node6 = new Node().set({
  position: [500, 25, 0],
  size: [100, 100, 0],
})

const node7 = new Node().set({
  position: [600, 25, 0],
  size: [100, 100, 0],
})

const node8 = new Node().set({
  position: [700, 25, 0],
  size: [100, 100, 0],
})

const node9 = new Node().set({
  position: [0, 125, 0],
  size: [100, 100, 0],
})

const node10 = new Node().set({
  position: [100, 125, 0],
  size: [100, 100, 0],
})

const node11 = new Node().set({
  position: [200, 125, 0],
  size: [100, 100, 0],
})

const node12 = new Node().set({
  position: [300, 125, 0],
  size: [100, 100, 0],
})

const node13 = new Node().set({
  position: [400, 125, 0],
  size: [100, 100, 0],
})

const node14 = new Node().set({
  position: [500, 125, 0],
  size: [100, 100, 0],
})

const node15 = new Node().set({
  position: [600, 125, 0],
  size: [100, 100, 0],
})

const node16 = new Node().set({
  position: [700, 125, 0],
  size: [100, 100, 0],
})

const node17 = new Node().set({
  position: [0, 225, 0],
  size: [100, 100, 0],
})

const node18 = new Node().set({
  position: [100, 225, 0],
  size: [100, 100, 0],
})

const node19 = new Node().set({
  position: [200, 225, 0],
  size: [100, 100, 0],
})

const node20 = new Node().set({
  position: [300, 225, 0],
  size: [100, 100, 0],
})

const node21 = new Node().set({
  position: [400, 225, 0],
  size: [100, 100, 0],
})

const node22 = new Node().set({
  position: [500, 225, 0],
  size: [100, 100, 0],
})

const node23 = new Node().set({
  position: [600, 225, 0],
  size: [100, 100, 0],
})

const node24 = new Node().set({
  position: [700, 225, 0],
  size: [100, 100, 0],
})

const node25 = new Node().set({
  position: [0, 325, 0],
  size: [100, 100, 0],
})

const node26 = new Node().set({
  position: [100, 325, 0],
  size: [100, 100, 0],
})

const node27 = new Node().set({
  position: [200, 325, 0],
  size: [100, 100, 0],
})

const node28 = new Node().set({
  position: [300, 325, 0],
  size: [100, 100, 0],
})

const node29 = new Node().set({
  position: [400, 325, 0],
  size: [100, 100, 0],
})

const node30 = new Node().set({
  position: [500, 325, 0],
  size: [100, 100, 0],
})

const node31 = new Node().set({
  position: [600, 325, 0],
  size: [100, 100, 0],
})

const node32 = new Node().set({
  position: [700, 325, 0],
  size: [100, 100, 0],
})

const node33 = new Node().set({
  position: [0, 425, 0],
  size: [100, 100, 0],
})

const node34 = new Node().set({
  position: [100, 425, 0],
  size: [100, 100, 0],
})

const node35 = new Node().set({
  position: [200, 425, 0],
  size: [100, 100, 0],
})

const node36 = new Node().set({
  position: [300, 425, 0],
  size: [100, 100, 0],
})

const node37 = new Node().set({
  position: [400, 425, 0],
  size: [100, 100, 0],
})

const node38 = new Node().set({
  position: [500, 425, 0],
  size: [100, 100, 0],
})

const node39 = new Node().set({
  position: [600, 425, 0],
  size: [100, 100, 0],
})

const node40 = new Node().set({
  position: [700, 425, 0],
  size: [100, 100, 0],
})

// Styles
node.style.background = 'cornflowerblue'
node2.style.background = 'cornflowerblue'
node3.style.background = 'cornflowerblue'
node4.style.background = 'cornflowerblue'
node5.style.background = 'cornflowerblue'
node6.style.background = 'cornflowerblue'
node7.style.background = 'cornflowerblue'
node8.style.background = 'cornflowerblue'
node9.style.background = 'cornflowerblue'
node10.style.background = 'cornflowerblue'
node11.style.background = 'cornflowerblue'
node12.style.background = 'cornflowerblue'
node13.style.background = 'cornflowerblue'
node14.style.background = 'cornflowerblue'
node15.style.background = 'cornflowerblue'
node16.style.background = 'cornflowerblue'
node17.style.background = 'cornflowerblue'
node18.style.background = 'cornflowerblue'
node19.style.background = 'cornflowerblue'
node20.style.background = 'cornflowerblue'
node21.style.background = 'cornflowerblue'
node22.style.background = 'cornflowerblue'
node23.style.background = 'cornflowerblue'
node24.style.background = 'cornflowerblue'
node25.style.background = 'cornflowerblue'
node26.style.background = 'cornflowerblue'
node27.style.background = 'cornflowerblue'
node28.style.background = 'cornflowerblue'
node29.style.background = 'cornflowerblue'
node30.style.background = 'cornflowerblue'
node31.style.background = 'cornflowerblue'
node32.style.background = 'cornflowerblue'
node33.style.background = 'cornflowerblue'
node34.style.background = 'cornflowerblue'
node35.style.background = 'cornflowerblue'
node36.style.background = 'cornflowerblue'
node37.style.background = 'cornflowerblue'
node38.style.background = 'cornflowerblue'
node39.style.background = 'cornflowerblue'
node40.style.background = 'cornflowerblue'

// Add all objects to scene
scene.append(fpsNode)
scene.append(node)
scene.append(node2)
scene.append(node3)
scene.append(node4)
scene.append(node5)
scene.append(node6)
scene.append(node7)
scene.append(node8)
scene.append(node9)
scene.append(node10)
scene.append(node11)
scene.append(node12)
scene.append(node13)
scene.append(node14)
scene.append(node15)
scene.append(node16)
scene.append(node17)
scene.append(node18)
scene.append(node19)
scene.append(node20)
scene.append(node21)
scene.append(node22)
scene.append(node23)
scene.append(node24)
scene.append(node25)
scene.append(node26)
scene.append(node27)
scene.append(node28)
scene.append(node29)
scene.append(node30)
scene.append(node31)
scene.append(node32)
scene.append(node33)
scene.append(node34)
scene.append(node35)
scene.append(node36)
scene.append(node37)
scene.append(node38)
scene.append(node39)
scene.append(node40)

// Load our Scene in the Viewport
document.body.append(scene)

// TODO refactor this into the game loop so we can do fun stuff with it
node.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node2.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node3.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node4.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node5.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node6.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node7.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node8.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node9.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node10.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node11.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node12.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node13.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node14.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node15.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node16.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node17.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node18.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node19.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node20.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node21.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node22.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node23.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node24.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node25.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node26.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node27.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node28.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node29.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node30.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node31.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node32.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node33.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node34.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node35.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node36.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node37.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node38.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node39.rotation = (x: number, y: number, z: number) => [x, y + 1, z]
node40.rotation = (x: number, y: number, z: number) => [x, y + 1, z]

// FPS Counter
const baseFps: number = 60
const targetFps: number = 144
var totalFps: number = 0
var currentFps: number = 0
var elapsedRealTime: number = 0
var frameTicks: number = 0

// TODO create a fixed update that runs at the baseFps

// Main game loop, updates every frame
const Update = (deltaTime: number) => {
  elapsedRealTime += deltaTime
  frameTicks++

  if (frameTicks >= gameLoop.fps) {
    fpsNode.textContent = ((totalFps / frameTicks) | 0) + ""
    frameTicks = 0
    totalFps = 0
  }

  currentFps = (1000 / (deltaTime * 1000))
  totalFps += currentFps
}

// Setup Game Loop to Update
const gameLoop = createGameLoop(Update, baseFps)
gameLoop.fps = targetFps

// Recursively call request animation frame to vsynch
function rAF(dT: number) {
  gameLoop.loop(dT)
  requestAnimationFrame(rAF)
}

// Start game loop
requestAnimationFrame(rAF)
