import angular from 'angular';
import routing from './car.route';
import component from './car.component';

angular
  .module('car', [])
  .component('car', component)
  .config(routing);
