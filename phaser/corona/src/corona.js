import Phaser from 'phaser'

import CoronaBoosterScene from './scenes/CoronaBoosterScene'
import GameOverScene from "./scenes/GameOverScene";
import StartScene from './scenes/StartScene';

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 620,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 }
		}
	},
	scene: [StartScene,CoronaBoosterScene, GameOverScene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

export default new Phaser.Game(config)
