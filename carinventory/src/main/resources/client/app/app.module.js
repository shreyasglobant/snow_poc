import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import example from './example/example.module';
import list from './list/list.module';
import login from './login/login.module';

require('./main.scss');

angular.module('app', [
  uirouter,
  ngMaterial,
  'example',
  'list',
  'login'
]);
