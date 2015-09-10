var GameName = GameName || {};

GameName.Preload = function () {};

GameName.Preload.prototype = {

    preload: function () {

    },

    create: function () {

        this.game.state.start('MainMenu');
    }
};
