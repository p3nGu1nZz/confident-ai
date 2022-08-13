import './index.css'
import * as LUME from 'lume'
import { createGameLoop } from '@wmcmurray/game-loop-js'
import SceneA from './scenes/sceneA'

// Create WebGL Scene
LUME.defineElements()
const { Scene, Node } = LUME
const scene = new Scene()
const sceneA = new SceneA()

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
var totalFps: number = 0
var currentFps: number = 0
var elapsedRealTime: number = 0
var frameTicks: number = 0

// Initlized the Default Keyboard States
const KeyState: { [x: string]: boolean } = {
  "w": false, "a": false, "s": false, "d": false,
  "W": false, "A": false, "S": false, "D": false,
  "q": false, "e": false, "Q": false, "E": false,
  "i": false, "I": false, "m": false, "M": false,
  "Shift": false, "Tab": false, " ": false, "Control": false,
  "Enter": false, "Backspace": false, "Escape": false, "Alt": false,
  "1": false, "2": false, "3": false, "4": false, "5": false,
  "6": false, "7": false, "8": false, "9": false, "0": false
}

// TODO create functions to load and unload the listeners.

// Keyboard Input
document.addEventListener("keydown", e => {
  if (KeyState[e.key] != undefined && KeyState[e.key] == false) {
    e.preventDefault()
    KeyState[e.key] = true
    console.log(e.key + " : " + KeyState[e.key])
  }
})
document.addEventListener("keyup", e => {
  if (KeyState[e.key] != undefined && KeyState[e.key] == true) {
    e.preventDefault()
    KeyState[e.key] = false
    console.log(e.key + " : " + KeyState[e.key])
  }
})

// TODO Create scene manager w/ events 

// Load our Scene in the Viewport
document.body.append(scene)

// TODO create a fixed update that runs at the baseFps

// Main game loop, updates every frame
const Update = (deltaTime: number) => {
  elapsedRealTime += deltaTime
  frameTicks++

  if (frameTicks >= game.fps) {
    fpsNode.textContent = ((totalFps / frameTicks) | 0) + ""
    frameTicks = 0
    totalFps = 0
  }

  currentFps = (1000 / (deltaTime * 1000))
  totalFps += currentFps
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

// Input controls 
// TODO move this into its own class
function addInputListeners() {
  document.addEventListener("keydown", e => {
    if (KeyState[e.key] != undefined && KeyState[e.key] == false) {
      e.preventDefault()
      KeyState[e.key] = true
      console.log(e.key + " : " + KeyState[e.key])
    }
  })
  document.addEventListener("keyup", e => {
    if (KeyState[e.key] != undefined && KeyState[e.key] == true) {
      e.preventDefault()
      KeyState[e.key] = false
      console.log(e.key + " : " + KeyState[e.key])
    }
  })
}

// TODO implement better listener handling
function removeInputListeners() {
  
}
