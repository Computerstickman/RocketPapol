class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload() {
      // load audio
      this.load.audio('sfx_select', './assets/assets_blip_select12.wav');
      this.load.audio('sfx_explosion', './assets/assets_explosion38.wav');
      this.load.audio('sfx_rocket', './assets/assets_rocket_shot.wav');
    }

    create(){
        //text config 
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '22px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 0
        }

        //menu text

        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'FOKIT PAPOL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use Left and Right arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press Left for Easy Game or Right for Hard Game', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '00FF00';
        menuConfig.color = '#000';
       

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
      }


}