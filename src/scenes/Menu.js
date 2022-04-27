class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    create(){
        this.add.text(20,20, "Fokit Papol Menu");
        this.scene.start("playScene");
    }
}