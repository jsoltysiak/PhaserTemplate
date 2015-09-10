var GameName = GameName || {};

GameName.Boot = function () {};

GameName.Boot.prototype = {

    preload: function () {

    },

    create: function () {
        this.game.stage.backgroundColor = '#000';
        this.state.start('Preload');
    }
};
