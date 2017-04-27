import angular from 'angular';
import component from './newCar.component';
import service from './newCar.service';
import routing from './newCar.route';
import './newCar.scss';

angular
  .module('newCar', [])
  .component('newCar', component)
  .factory('newCarService', service)
  .config(routing);
