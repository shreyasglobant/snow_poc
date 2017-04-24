import angular from 'angular';
import routing from './login.route';
import component from './login.component';
import service from './login.service';
import './login.scss';

angular
  .module('login', [])
  .component('login', component)
  .factory('loginService', service)
  .config(routing);
