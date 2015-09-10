var GameName = GameName || {};

GameName.MainMenu = function () {};

GameName.MainMenu.prototype = {

    preload: function () {

    },

    create: function () {

    },

    update: function () {

        this.game.state.start('Game');
    }
};
