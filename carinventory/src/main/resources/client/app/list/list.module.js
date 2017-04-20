import angular from 'angular';
import routing from './list.route';
import component from './list.component';
import service from './list.service';
import './list.scss';

angular
  .module('list', [])
  .component('list', component)
  .factory('listService', service)
  .config(routing);
