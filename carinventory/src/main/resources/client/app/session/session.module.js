import angular from 'angular';
import service from './session.service';

angular
  .module('session', [])
  .factory('sessionService', service);
