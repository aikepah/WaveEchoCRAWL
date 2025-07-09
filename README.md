# Wave Echo Cave - DM's Interactive Guide

After playing around with updating my keyed encounters for Wave Echo Cave using Gemini (Scaling for a party of 4 level 5 characters, using the "How to Run a Room" principles from Keith Amman, adding traps, and using some monsters from Flee Mortals and Monster Manual Expanded) it asked me if I wanted to use their Canvas tool to create an app. Curious, I said yes, and this is the result! It generated an HTML structure with CSS and basic JS navigation for each area. Later I pulled it into VS Code and utilized Copilot to enhance the functionality, adding a DM interface and a player view that updates in real-time using `localStorage`, effect tracking, and more. This was a fun quick experiment that turned into a useful tool for running the Wave Echo Cave adventure in Dungeons & Dragons. Definitely not how I would have implemented it from scratch, but considering I only spent a few hours (including pulling in all the area descriptions and images) it turned out pretty well! There's plenty of room for improvement, but for running a couple sessions in this dungeon, it worked great!

This project is a digital Dungeon Master (DM) tool for running the Wave Echo Cave adventure in Dungeons & Dragons. It provides a rich, interactive experience for both the DM and players, supporting real-time updates, effect tracking, and marching order management.

## Features

- **DM View (`FinalBattle.html`)**
  - Area navigation and detailed descriptions
  - Sensory clue generator for each area
  - Dungeon turn tracker with encounter checks
  - Effect tracker (manual and ritual effects, with descriptions)
  - 3x5 marching order grid (15 slots)
  - Ritual effect cycle and random ritual effect generator
  - State save/load functionality
  - Dark mode toggle

- **Player View (`player-view.html`)**
  - Displays the current scene image for the area
  - Read-only list of active effects (with descriptions)
  - Read-only 3x5 marching order grid
  - Automatically updates in real-time based on DM actions (via `localStorage`)

## How It Works

- The DM uses `FinalBattle.html` to control the dungeon, manage effects, and update the party's state.
- The player view (`player-view.html`) is opened in a separate browser window. It listens for changes in the shared `localStorage` and updates automatically.
- All state (current area, effects, marching order, etc.) is stored in `localStorage` under the key `dungeonState`.

## File Structure

```
WaveEchoCRAWL/
├── FinalBattle.html         # Main DM interface
├── player-view.html         # Player-facing view
├── js/
│   ├── main.js              # DM logic and state management
│   ├── player.js            # Player view logic
│   ├── areas.js             # Area data and descriptions
│   └── ...                  # Other supporting JS files
├── css/
│   └── styles.css           # Custom styles
├── images/                  # Scene and token images
│   └── ...
```

## Setup & Usage

1. **Open `FinalBattle.html` in your browser** (as DM).
2. **Open `player-view.html` in a separate window** (for players to see the current state).
3. Use the DM interface to manage turns, effects, and the party. The player view will update automatically.

## Customization
- Add or modify area images in the `images/` folder.
- Edit `areas.js` to update area descriptions or add new areas.
- Update `ritualEffects` in `main.js` to add new ritual effects.

## Requirements
- Modern web browser (no server required; works locally via `file://`)
- JavaScript enabled

## Credits
- Inspired by Keith Amman's book "So You Want to Be a Game Master"
- Tailwind CSS for styling
- D&D 5e resources from Flee Mortals and Monster Manual Expanded

---
Enjoy running your Wave Echo Cave adventure!
