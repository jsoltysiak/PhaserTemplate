var GameName = GameName || {};

GameName.Boot = function () {};

GameName.Boot.prototype = {

    init: function () {
        this.input.maxPointers = 1;

        this.scale.pageAlignHorizontally = true;

        if (this.game.device.desktop) {

        } else
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(480, 260, 1024, 768);
            this.scale.forceLandscape = true;
        }
    },

    preload: function () {
        this.load.image('preloadBackground', 'assets/images/preload_background.png');
        this.load.image('preloadBar', 'assets/images/preload_bar.png');
    },

    create: function () {
        this.state.start('Preload');
    }
};
