// Load libraries

import {default as Services} from './services';
import {default as Controllers} from './controllers';
import {default as Directives} from './directives';
import {default as Components} from './components';

export default angular
  .module( 'starter-app',
         [ 
           'ngMaterial', 
            'ngAnimate', 
            'ngRoute',
            'chart.js',
             Controllers,
             Services,
             Directives,
             Components
             ])

  .config(($mdIconProvider, $mdThemingProvider, $routeProvider, ChartJsProvider) => {

    let roottpl = 'app/src/components/main-content/main-content-tpl';
    console.log("configuring");

    $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey', {
      'default': '700', 
      'hue-1': '300', 
      'hue-2': '500', 
      'hue-3': 'A700' 
    })
    .dark(true);
    
    $routeProvider
        .when('/',{
          templateUrl: roottpl + '/gettingStarted.html'
        })
        .when('/dashboard',{
          templateUrl: roottpl + '/dashboard.html',
          controller: 'DashBoardController', 
          controllerAs: 'vm'
        })
        .when('/architecture', {
          templateUrl: roottpl + '/architecture.html',
        })
        .when('/contact', {
          templateUrl: roottpl + '/contact.html',
        })
        .when('/tile', {
          templateUrl: roottpl + '/tile.html',
        })
        .when('/portofolio', {
          templateUrl: roottpl + '/portofolio.html',
        })
        .when('/more', {
          templateUrl: roottpl + '/more.html',
        })
        .otherwise({redirectTo:'/'});

    $mdIconProvider
      .icon("menu"       , "app/assets/svg/menu.svg"        , 512)
      .icon("material"  ,   "app/assets/svg/angular-logo.svg", 1024);

    ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
  });