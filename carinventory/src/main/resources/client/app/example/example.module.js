import angular from 'angular';
import routing from './example.route';
import component from './example.component';
import service from './example.service';
import './example.scss';

angular
  .module('example', [])
  .component('example', component)
  .factory('exampleService', service)
  .config(routing);
