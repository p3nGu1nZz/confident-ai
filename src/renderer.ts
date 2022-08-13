import './index.css'
import * as LUME from 'lume'
import { createGameLoop } from '@wmcmurray/game-loop-js'
import SceneA from './scenes/sceneA'

// Create WebGL Scene
LUME.defineElements()
const { Scene, Node } = LUME
const scene = new Scene()
const sceneA = new SceneA()

// Get Screen Size
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

/// FPS Counter
const fpsNode = new Node().set({
  id: "l-fps-counter",
  position: [-390, -268, 0],
  size: [40, 20, 0],
  textContent: "..."
})

scene.append(fpsNode)

// Load scene assets
sceneA.setup(scene)

// FPS Counter
const baseFps: number = 60
const targetFps: number = 144
let totalFps: number = 0
let currentFps: number = 0
let elapsedRealTime: number = 0
let frameTicks: number = 0

// Initlized the Default Keyboard States
const KeyBuffer: { [x: string]: boolean } = {
  "w": false, "a": false, "s": false, "d": false,
  "W": false, "A": false, "S": false, "D": false,
  "q": false, "e": false, "Q": false, "E": false,
  "i": false, "I": false, "m": false, "M": false,
  "Shift": false, "Tab": false, " ": false, "Control": false,
  "Enter": false, "Backspace": false, "Escape": false, "Alt": false,
  "1": false, "2": false, "3": false, "4": false, "5": false,
  "6": false, "7": false, "8": false, "9": false, "0": false
}

const MouseBuffer = {
  clientX: 0,
  clientY: 0,
  clientXLast: 0,
  clientYLast: 0
}

const MouseState = {
  deltaX: 0,
  deltaY: 0
}

// TODO create functions to load and unload the listeners.

// Keyboard Input
document.addEventListener("keydown", e => {
  if (KeyBuffer[e.key] != undefined && KeyBuffer[e.key] == false) {
    e.preventDefault()
    KeyBuffer[e.key] = true
  }
})
document.addEventListener("keyup", e => {
  if (KeyBuffer[e.key] != undefined && KeyBuffer[e.key] == true) {
    e.preventDefault()
    KeyBuffer[e.key] = false
  }
})

window.addEventListener('mousemove', (e: MouseEvent) => {
  MouseBuffer.clientX = e.clientX
  MouseBuffer.clientY = e.clientY
})

// TODO Create scene manager w/ events 

// Load our Scene in the Viewport
document.body.append(scene)

// TODO create a fixed update that runs at the baseFps

// Main game loop, updates every frame
const Update = (deltaTime: number) => {
  elapsedRealTime += deltaTime
  frameTicks++

  calculateFpsCounter(deltaTime)
  calculateMousePosition()
}

// Setup Game Loop for Update
const game = createGameLoop(Update, baseFps)
game.fps = targetFps

// Recursively call request animation frame to vsynch
function rAF(dT: number) {
  game.loop(dT)
  requestAnimationFrame(rAF)
}

// Start game loop
requestAnimationFrame(rAF)

function calculateMousePosition() {
  MouseState.deltaX = 0
  MouseState.deltaY = 0

  MouseState.deltaX = MouseBuffer.clientX - MouseBuffer.clientXLast
  MouseState.deltaY = MouseBuffer.clientYLast - MouseBuffer.clientY

  MouseBuffer.clientXLast = MouseBuffer.clientX
  MouseBuffer.clientYLast = MouseBuffer.clientY
}

function calculateFpsCounter(deltaTime: number) {
  if (frameTicks >= game.fps) {
    fpsNode.textContent = ((totalFps / frameTicks) | 0) + ""
    frameTicks = 0
    totalFps = 0
  }

  currentFps = (1000 / (deltaTime * 1000))
  totalFps += currentFps
}
