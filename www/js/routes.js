angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.progress', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/progress.html',
        controller: 'progressCtrl'
      }
    }
  })

  .state('menu.trends', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trends.html',
        controller: 'trendsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.settings', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.home', {
    url: '/page5',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
    }
  })

$urlRouterProvider.otherwise('/page5')


});