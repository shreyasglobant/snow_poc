import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import example from './example/example.module';
import list from './list/list.module';
import login from './login/login.module';
import logout from './logout/logout.module';
import appNav from './nav/nav.module';
import home from './home/home.module';
import session from './session/session.module';
import ENV from './env/env.module';
//import interceptor from './interceptor/interceptor.module';
import newCar from './newCar/newCar.module';
import car from './car/car.module';


require('./main.scss');

angular.module('app', [
  uirouter,
  ngMaterial,
  'example',
  'list',
  'login',
  'logout',
  'home',
  'appNav',
  'session',
  'ENV',
  'newCar',
  'car'
])
.run(($rootScope, $state, sessionService, $log, $http) => {
  $rootScope.path = 'login';
  $log.log('hree');
  $http.defaults.headers.common.Authorization = 'Basic TWFuZGFyLkthbXRla2FyOjEyMzQ1';
    // Route changes event handler
  let stateListerner = $rootScope.$on('$stateChangeStart', (e, currentState) => {
    // Logged in
    $log.log('hree1');
    if (!sessionService.isValid()) {
      $state.go('login');
    }

  });
});
