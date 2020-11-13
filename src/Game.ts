import "phaser";

class Game {
    game: Phaser.Game;
    config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: {
            preload: this.preload
        }
    }

    constructor() {
        this.game = new Phaser.Game(this.config);
    }

    preload() {
    }
}