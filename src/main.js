var GameName = GameName || {};

GameName.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

GameName.game.state.add('Boot', GameName.Boot);
//GameName.game.state.add('Preload', GameName.Preload);
//GameName.game.state.add('MainMenu', GameName.MainMenu);
//GameName.game.state.add('Game', GameName.Game);

GameName.game.state.start('Boot');
