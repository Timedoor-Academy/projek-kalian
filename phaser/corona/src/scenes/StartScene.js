import Phaser from "phaser";

export default class StartScene extends Phaser.Scene {
    constructor() {
        super("start-scene");
    }

    preload() {
        this.load.image("background", "images/corona/bg_layer1.png");
        this.load.image("start", "images/corona/start.png");
        this.load.image("play-button", "images/corona/right-btn.png");

        this.load.audio("mulai", "sfx/sfx_laser.ogg");
    }

    create() {
        this.add.image(200, 320, "background");
        this.add.image(200, 200, "start");

        this.playButton = this.add.image(200, 500, 'play-button')
            .setInteractive().setScale(0.5);

        this.playButton.once(
            "pointerup",
            () => {
                this.scene.start("corona-buster-scene");
            },
            this
        );

        this.input.keyboard.on("keydown-ENTER", () => {
            this.sound.play("mulai")
            this.scene.start("corona-buster-scene");
        });
        
    }
}
