import Phaser from "phaser";
import FallingObject from "../ui/FallingObject"; //----> Import kelas bernama FallingObject dari folder ui
import Laser from "../ui/Laser"; //----> Import kelas bernama FallingObject dari folder ui
export default class CoronaBusterScene extends Phaser.Scene {
    constructor() {
        super("corona-buster-scene");
    }
    init() {
        this.clouds = undefined;
        this.nav_left = false;
        this.nav_right = false;
        this.shoot = false;

        this.player = undefined;
        this.speed = 100;

        this.cursor = undefined;

        this.enemies = undefined;
        this.enemySpeed = 100;

        this.lasers = undefined;
        this.lastFired = 10;

        this.scoreLabel = undefined;
        this.score = 0;

        this.lifeLabel = undefined;
        this.life = 3;

        this.handsanitizer = undefined;

        this.backsound = undefined

    }

    preload() {
        this.load.image("background", "images/corona/bg_layer1.png");
        //Load image cloud, wajib dikerjakan ya!
        this.load.image('cloud', 'images/corona/cloud.png');
        this.load.image('shoot', 'images/corona/shoot-btn.png');
        this.load.image('right-btn', 'images/corona/right-btn.png');
        this.load.image('left-btn', 'images/corona/left-btn.png');
        this.load.image('enemy', 'images/corona/enemy.png');
        this.load.image('handsanitizer', 'images/corona/handsanitizer.png');

        this.load.spritesheet("player", "images/corona/ship.png", {
            frameWidth: 66,
            frameHeight: 66,
        });

        this.load.spritesheet("laser", "images/corona/laser-bolts.png", {
            frameWidth: 16,
            frameHeight: 16,
        });


        this.load.audio("bgsound", "sfx/AloneAgainst Enemy.ogg");
        this.load.audio("laser", "sfx/sfx_laser.ogg");
        this.load.audio("destroy", "sfx/destroy.mp3");
        this.load.audio("life", "sfx/handsanitizer.mp3");
        this.load.audio("gameover", "sfx/gameover.wav");
    }
    create() {
        const gameWidht = this.scale.width * 0.5;
        const gameHeight = this.scale.height * 0.5;
        this.add.image(gameWidht, gameHeight, "background");

        // gameHeight = Cari dan simpan nilai dari setengah lebar dan tinggi layout
        // dan gunakan untuk menempatkan background agar berada ditengah 

        this.clouds = this.physics.add.group({
            key: "cloud",
            repeat: 10, //----------------------> coba ganti angkanya menjadi lebih besar atau kecil
        });

        Phaser.Actions.RandomRectangle(this.clouds.getChildren(), this.physics.world.bounds);

        this.createButton();
        this.player = this.createPlayer();

        this.cursor = this.input.keyboard.createCursorKeys();

        this.enemies = this.physics.add.group({
            classType: FallingObject,
            maxSize: 10, //-----> banyaknya enemy dalam satu grup
            runChildUpdate: true,
        });

        this.time.addEvent({
            delay: Phaser.Math.Between(1000, 5000), //--------> Delay random  rentang 1-5 detik
            callback: this.spawnEnemy,
            callbackScope: this, //--------------------> Memanggil method bernama spawnEnemy
            loop: true,
        });

        this.lasers = this.physics.add.group({
            classType: Laser,
            maxSize: 10,
            runChildUpdate: true,
        });

        this.physics.add.overlap(this.lasers, this.enemies, this.hitEnemy, null, this);

        this.scoreLabel = this.add
            .text(10, 10, "Score", {
                fontSize: "16px",
                fill: "black",
                backgroundColor: "white",
            })
            .setDepth(1);

        this.lifeLabel = this.add
            .text(10, 30, "Life: " + this.life, {
                fontSize: "16px",
                fill: "black",
                backgroundColor: "white",
            })
            .setDepth(1);

        this.physics.add.overlap(
            this.player,
            this.enemies,
            this.decreaseLife,
            null,
            this
        );

        this.handsanitizer = this.physics.add.group({
            classType: FallingObject,
            runChildUpdate: true,
        });
        this.time.addEvent({
            delay: 10000,
            callback: this.spawnHandsanitizer,
            callbackScope: this,
            loop: true,
        });

        // delay: 10000 = handsanitizer di spawn setiap 10s

        this.physics.add.overlap(
            this.player,
            this.handsanitizer,
            this.increaseLife,
            null,
            this
        );

        this.backsound = this.sound.add("bgsound");
        var soundConfig = {
            loop: true,
            volume: 0.5,
        };
        this.backsound.play(soundConfig);

        /* 
        play = Memainkan backsound 
        loop: true = Pengaturan sound
        */
    }

    update(time) {
        this.clouds.children.iterate((child) => {
            child.setVelocityY(20); //----------------> Semua awan bergerak kebawah dengan kecepatan 20.
        });

        this.clouds.children.iterate((child) => { //-----------> untuk setiap awan dalam kumpulan awan
            child.setVelocityY(20); //----------> bergerak kebawah
            if (child.y > this.scale.height) { //---------->  jika melewati batas bawah
                child.x = Phaser.Math.Between(10, 400); //----------> posisi awan dipindah ke atas layout
                child.y = 0;
            }
        });

        this.movePlayer(this.player, time);

        this.scoreLabel.setText("Score : " + this.score);

        // "Score : " = Agar scoreLabel selalu menampilkan nilai score terkini. 

        this.lifeLabel.setText("Life: " + this.life);


    }

    createButton() {
        this.input.addPointer(3)

        let shoot = this.add.image(320, 550, 'shoot').setInteractive().setDepth(0.5).setAlpha(0.8)

        let nav_left = this.add.image(50, 550, 'left-btn').setInteractive().setDepth(0.5).setAlpha(0.8)

        let nav_right = this.add.image(nav_left.x + nav_left.displayWidth + 20, 550, 'right-btn').setInteractive().setDepth(0.5).setAlpha(0.8)

        nav_left.on(
            "pointerdown",
            () => { //---------> Ketika pointerup (diklik) maka properti nav left akan bernilai true
                this.nav_left = true;
            },
            this
        );
        nav_left.on(
            "pointerout",
            () => { //----------> Ketika pointerout (tidak diklik) maka properti nav left akan bernilai false
                this.nav_left = false;
            },
            this
        );
        nav_right.on(
            "pointerdown",
            () => {
                this.nav_right = true;
            },
            this
        );
        nav_right.on(
            "pointerout",
            () => {
                this.nav_right = false;
            },
            this
        );
        shoot.on(
            "pointerdown",
            () => {
                this.shoot = true;
            },
            this
        );
        shoot.on(
            "pointerout",
            () => {
                this.shoot = false;
            },
            this
        );
    }

    movePlayer(player, time) {
        // Use cursor keys and nav_left for player movement
        if (this.cursor.left.isDown || this.nav_left) {
            this.player.setVelocityX(-this.speed);
            this.player.anims.play("left", true);
            this.player.setFlipX(false);
        } else if (this.cursor.right.isDown || this.nav_right) {
            this.player.setVelocityX(this.speed);
            this.player.anims.play("right", true);
            this.player.setFlipX(true);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play("turn");
        }

        // New conditions for up and down movement
        if (this.cursor.up.isDown) {
            this.player.setVelocityY(-this.speed);
            this.player.anims.play("turn", true); // Play "turn" animation when moving up
        } else if (this.cursor.down.isDown) {
            this.player.setVelocityY(this.speed);
            this.player.anims.play("turn", true); // Play "turn" animation when moving down
        }

        //above there’s codes for moving player
        if (this.shoot && time > this.lastFired) {
            const laser = this.lasers.get(0, 0, "laser");
            if (laser) {
                laser.fire(this.player.x, this.player.y);
                this.lastFired = time + 500;
                this.sound.play("laser");
            }
        }

        if (this.cursor.space.isDown) {
            this.shoot = true;
        } else {
            this.shoot = false;
        }
    }

    createPlayer() {
        const player = this.physics.add.sprite(200, 450, 'player')
        player.setCollideWorldBounds(true)
        //----------WRITE CODE BELLOW-------//
        this.anims.create({
            key: "turn",
            frames: [{
                key: "player",
                frame: 0,
            }, ],
        });
        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("player", {
                start: 1,
                end: 2,
            }),
        });
        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("player", {
                start: 1,
                end: 2,
            }),
        });
        return player;
        //-------------------------------//


    }

    spawnEnemy() {
        const config = {
            speed: 70, //-----------> Mengatur kecepatan dan besar rotasi dari enemy
            rotation: 0.1
        };
        // @ts-ignore
        const enemy = this.enemies.get(0, 0, 'enemy', config);
        const positionX = Phaser.Math.Between(50, 350); //-----> Mengambil angka acak dari 50-350
        if (enemy) {
            enemy.spawn(positionX); //--------------> Memanggil method spawn dengan parameter nilai posisi sumbux
        }
    }

    hitEnemy(laser, enemy) {
        laser.die() //--------> Laser dan enemy dihancurkan 
        enemy.die()
        this.score += 10;
        this.sound.play("destroy");
    }

    decreaseLife(player, enemy) {
        enemy.die();
        this.sound.play("destroy")
        this.life--;
        if (this.life == 2) {
            player.setTint(0xff0000);
        } else if (this.life == 1) {
            player.setTint(0xff0000).setAlpha(0.2);
        } else if (this.life == 0) {
            this.sound.stopAll();
            this.sound.play("gameover");
            this.scene.start("over-scene", {
                score: this.score
            });
        }
    }

    spawnHandsanitizer() {
        const config = {
            speed: 60,
            rotation: 0, // ------------> handsanitizer tidak berputar
        };
        // @ts-ignore
        const handsanitizer = this.handsanitizer.get(0, 0, "handsanitizer", config);
        const positionX = Phaser.Math.Between(70, 330);
        if (handsanitizer) {
            handsanitizer.spawn(positionX);
        }
    }

    increaseLife(player, handsanitizer) {
        handsanitizer.destroy();
        this.sound.play("life")
        this.life++;
        if (this.life >= 3) { //------> Menambah 1 life
            player.clearTint().setAlpha(1);
        } else if (this.life == 2) {
            player.setTint(0x00ff00);
        } else if (this.life == 1) {
            player.setTint(0xffff00);
        }
    }

    // clearTint = menghapus warna sebelumnya dan mengembalikan warna objek seperti semula
}