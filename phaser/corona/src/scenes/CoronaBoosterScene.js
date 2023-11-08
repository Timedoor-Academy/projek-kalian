import Phaser from "phaser";
import FallingObject from "../ui/FallingObject";

export default class CoronaBusterScene extends Phaser.Scene {
    constructor() {
        super('corona-buster-scene');
    }

    init() {
        this.clouds = undefined;
        this.nav_left = false;
        this.nav_right = false;
        this.shoot = false;
        this.player = undefined;
        this.speed = 100;
        this.load.spritesheet('player', 'images/ship.png', {
            frameWidth: 66,
            frameHeight: 66
        });
        this.enemies = undefined;
        this.enemySpeed = 50;
    }

    preload() {
        this.load.image('background', 'images/bg_layer1.png');
        this.load.image('cloud', 'images/cloud.png');
        this.load.image('enemy', 'images/enemy.png');
        this.load.image('shoot', 'images/shoot.png'); // Add this line
        this.load.image('left-btn', 'images/left-btn.png'); // Add this line
    }

    create() {
        const gameWidth = this.scale.width * 0.5;
        const gameHeight = this.scale.height * 0.5;
        this.add.image(gameWidth, gameHeight, 'background');

        this.clouds = this.physics.add.group({
            key: 'cloud',
            repeat: 11,
        });

        Phaser.Actions.RandomRectangle(
            this.clouds.getChildren(),
            this.physics.world.bounds
        );

        this.createButton();

        this.player = this.createPlayer();

        this.enemies = this.physics.add.group({
            classType: FallingObject,
            maxSize: 10,
            runChildUpdate: true
        });

        this.time.addEvent({
            delay: Phaser.Math.Between(1000, 5000),
            callback: this.spawnEnemy,
            callbackScope: this,
            loop: true
        });
    }

    update(time) {
        this.clouds.children.iterate((cloud: Phaser.GameObjects.GameObject) => {
            if (cloud instanceof Phaser.GameObjects.Sprite) {
                cloud.setVelocityY(20);
                if (cloud.y > this.scale.height) {
                    cloud.x = Phaser.Math.Between(10, 400);
                    cloud.y = 0;
                }
            }
        });
        this.movePlayer(this.player, time);
    }
    
    
    
    

    createButton() {
        this.input.addPointer(3);
        this.input.addPointer(3);

        let shoot = this.add.image(320, 550, 'shoot')
            .setInteractive()
            .setDepth(0.5)
            .setAlpha(0.8);
        let nav_left = this.add.image(50, 550, 'left-btn')
            .setInteractive()
            .setDepth(0.5)
            .setAlpha(0.8);
        let nav_right = this.add.image(nav_left.x + nav_left.displayWidth + 20, 550, 'right-btn')
            .setInteractive()
            .setDepth(0.5)
            .setAlpha(0.8);

        nav_left.on('pointerdown', () => {
            this.nav_left = true;
        }, this);

        nav_left.on('pointerout', () => {
            this.nav_left = false;
        }, this);

        nav_right.on('pointerdown', () => {
            this.nav_right = true;
        }, this);

        nav_right.on('pointerout', () => {
            this.nav_right = false;
        }, this);

        shoot.on('pointerdown', () => {
            this.shoot = true;
        }, this);

        shoot.on('pointerout', () => {
            this.shoot = false;
        }, this);
    }

    movePlayer(player, time) {
        if (this.nav_left) {
            player.setVelocityX(this.speed * -1);
            player.anims.play('left', true);
            player.setFlipX(false);
        } else if (this.nav_right) {
            player.setVelocityX(this.speed);
            player.anims.play('right', true);
            player.setFlipX(true);
        } else {
            player.setVelocityX(0);
            player.anims.play('turn');
        }
    }

    createPlayer() {
        const player = this.physics.add.sprite(200, 450, 'player');
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'turn',
            frames: [{
                key: 'player',
                frame: 0
            }],
        });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', {
                start: 1,
                end: 2
            }),
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { // Fixed 'plaayer' to 'player'
                start: 1,
                end: 2
            })
        });

        return player;
    }

    spawnEnemy() {
        const config = {
            speed: 30, // Ubah ke angka yang sesuai
            rotation: 0.1 // Ubah ke angka yang sesuai
        };
    
        const enemy = this.enemies.get(0, 0, 'enemy', config);
        const positionX = Phaser.Math.Between(50, 350);
        if (enemy) {
            enemy.spawn(positionX);
        }
    }
    
}