require.config({
    baseUrl: '../app',
    paths: {
        underscore: '../lib/underscore',
        text: '../lib/text',
        firebase: 'https://www.gstatic.com/firebasejs/4.1.1/firebase'
    },
    map: {
        'app': {
            fb: '../test/mocks/mockFb',
            radio: '../test/mocks/mockRadio',
            'modules/menu': '../test/mocks/mockMenu',
            'modules/toDoList': '../test/mocks/mockToDoList',
            'modules/userSettings': '../test/mocks/mockUserSettings'
        }
    }
});

require(['specs/testApp.js'],function () {
   if (window.mochaPhantomJS) {
       window.mochaPhantomJS.run();
   } else {
       mocha.run();
   }
});