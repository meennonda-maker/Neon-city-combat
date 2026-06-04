import * as BABYLON from '@babylonjs/core';
import Game from './game/Game';

// Initialize the game when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Create the game instance
    const game = new Game(canvas);
    
    // Initialize the game
    game.init().then(() => {
        // Hide loading screen
        loadingScreen.style.display = 'none';
        
        // Start the game loop
        game.start();
        
        console.log('🎮 NEON CITY COMBAT - Game Started!');
        console.log('📍 Location: Neon City');
        console.log('🎯 Objective: Take down the syndicate');
    }).catch((error) => {
        console.error('Failed to initialize game:', error);
        loadingScreen.innerHTML = '<p style="color: #ff0000;">Failed to load game. Please refresh.</p>';
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        game.engine.resize();
    });
});
