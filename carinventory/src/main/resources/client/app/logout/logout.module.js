import angular from 'angular';
import routing from './logout.route';
import component from './logout.component';

angular
  .module('logout', [])
  .component('logout', component)
  .config(routing);
