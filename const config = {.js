const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload,
        create,
        update
    }
};

const game = new Phaser.Game(config);
let player, cursors;

function preload() {
    this.load.image('house', 'assets/house.png');
    this.load.spritesheet('player', 'assets/player_spritesheet.png', { frameWidth: 32, frameHeight: 32 });
}

function create() {
    this.add.image(400, 300, 'house');

    player = this.physics.add.sprite(100, 100, 'player');

    this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        frameRate: 8,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    player.setVelocity(0);

    if (cursors.left.isDown) {
        player.setVelocityX(-100);
        player.anims.play('walk', true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(100);
        player.anims.play('walk', true);
    }

    if (cursors.up.isDown) {
        player.setVelocityY(-100);
    } else if (cursors.down.isDown) {
        player.setVelocityY(100);
    }

    if (!cursors.left.isDown && !cursors.right.isDown && !cursors.up.isDown && !cursors.down.isDown) {
        player.anims.stop();
    }
}
