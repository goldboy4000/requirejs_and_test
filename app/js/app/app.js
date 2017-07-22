define(['fb', 'radio', 'modules/menu', 'modules/toDoList', 'modules/userSettings'],
    function (fb, radio, menu, toDo, settings) {
        return {
            init: function () {
                radio.on('fb/initialized', this.initializeModules);

                fb.init();
            },

            initializeModules: function (user) {
                this.menu.init();
                this.settings.init();
                this.toDo.init(user);
            }.bind({menu: menu, settings: settings, toDo: toDo})
        }
    });
