import Phaser from 'phaser'

export default class AmongUsScene extends Phaser.Scene
{
	constructor()
	{
		super('amongus-scene')
	}

	preload ()
        {
            this.load.image('maps', 'images/amongus/Maps.png')
            this.load.image('playerPink', 'images/amongus/Pink.png')
            this.load.image('playerOrange', 'images/amongus/Orange.png')
            this.load.image('playerGreen', 'images/amongus/Green.png')
            this.load.image('playerCyan', 'images/amongus/Cyan.png')
        }

        create ()
        {
            this.add.image(960, 540, 'maps')
            this.add.image(1000, 600, 'playerRed')
            this.add.image(1000, 800, 'playerPink')
            this.add.image(1000, 1000, 'playerGreen')
            this.add.image(1000, 1200, 'playerOrange')
            this.add.image(1000, 1200, 'playerCyan')
        }
}
