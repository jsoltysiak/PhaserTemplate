var GameName = GameName || {};

GameName.Preload = function () {
    this.background = null;
    this.preloadBar = null;
};

GameName.Preload.prototype = {

    preload: function () {
        this.background = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadBackground');
        this.background.anchor.setTo(0.5);
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 100, 'preloadBar');
        this.preloadBar.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.preloadBar);

        // this.load.image('image', 'assets/images/image.png');
    },

    create: function () {

        this.game.state.start('MainMenu');
    }
};
