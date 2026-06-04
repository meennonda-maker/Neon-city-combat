# NEON CITY COMBAT - Shadow Runner

A 3D open-world action combat game built with Babylon.js. Play as Jaxon Reed, an undercover fighter taking down a corrupt syndicate in Neon City.

## Features

### Combat System
- 🥊 Punch Combos
- ⚡ Counter Attacks
- 🌀 Dodges
- 🎬 Slow Motion Finishers
- 🤼 Grapples
- 🔫 Tactical Gun Combat

### Open World
- 🌆 Infinite Procedurally Generated City Map
- 🏃 Rooftop Movement & Parkour
- 🚔 Police Chases & Tactical Encounters
- 🏪 Weapon Shops & Upgrades
- 🌙 Dynamic Day/Night Cycle
- 🕵 Secret Enemy Bases

### Game Content
- 🎯 **1000+ Missions** - Endless procedurally generated tasks
- 👹 **1000+ Boss Fights** - Unique challenging encounters
- 🔫 **200+ Robbers per Mission** - Dynamic enemy spawning
- ♾️ **Infinite Map** - Endless exploration
- 📱 **Mobile Optimized** - Play on any device
- ⏱️ **Endless Playtime** - Never-ending gameplay

## Installation

```bash
npm install
```

## Development

```bash
npm start
```

The game will run on `http://localhost:8080`

## Build for Production

```bash
npm run build
```

## Project Structure

```
neon-city-combat/
├── src/
│   ├── index.js              # Entry point
│   ├── game/
│   │   ├── Game.js           # Main game class
│   │   ├── Player.js         # Player controller
│   │   ├── Combat.js         # Combat system
│   │   ├── Mission.js        # Mission system
│   │   ├── Enemy.js          # Enemy AI
│   │   ├── Boss.js           # Boss encounters
│   │   └── World.js          # World generation
│   ├── ui/
│   │   ├── HUD.js            # Heads-up display
│   │   ├── Menu.js           # Main menu
│   │   └── MissionTracker.js # Mission tracking
│   └── utils/
│       ├── ProceduralGen.js  # Map generation
│       ├── Physics.js        # Physics engine
│       └── Audio.js          # Sound system
├── assets/
│   ├── models/               # 3D models
│   ├── textures/             # Textures & materials
│   └── audio/                # Sound effects & music
├── webpack.config.js         # Webpack configuration
└── index.html                # HTML entry point
```

## Story

You are **Jaxon Reed**, a betrayed undercover fighter trying to take down a corrupt syndicate controlling Neon City. Fight gangs, escape police ambushes, and uncover hidden enemy bases across the sprawling metropolis.

### Main Missions
- Escape Police Trap
- Rooftop Chase
- Destroy Weapon Factory
- Storm the Final Tower
- And 996+ more procedurally generated missions...

### Enemies
- Street Gang Members
- Elite Mercenaries
- Corrupt Police Officers
- Martial Arts Masters
- Cyber-Enhanced Soldiers
- Syndicate Bosses

### Player Skills
- Fast Reflexes
- Hand-to-Hand Combat Mastery
- Parkour & Rooftop Movement
- Gun Mastery & Tactical Combat

## Controls

**Keyboard:**
- `W/A/S/D` - Move
- `SPACE` - Jump/Dodge
- `Mouse` - Look Around
- `Left Click` - Punch/Attack
- `Right Click` - Aim/Counter
- `E` - Interact
- `Q` - Special Ability
- `M` - Map

**Mobile:**
- Touch joystick - Move
- Tap - Attack
- Swipe up - Jump/Dodge
- Pinch zoom - Camera

## Performance

Optimized for:
- Desktop (60+ FPS)
- Tablet (30+ FPS)
- Mobile (30+ FPS)

## License

MIT

## Credits

Built with [Babylon.js](https://www.babylonjs.com/)

---

**Status:** 🚀 In Development - Full Release Coming Soon!
