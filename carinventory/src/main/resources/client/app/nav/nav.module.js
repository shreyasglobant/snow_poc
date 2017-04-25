import angular from 'angular';
import component from './nav.component';
import service from './nav.service';
import './nav.scss';

angular
  .module('appNav', [])
  .component('appNav', component)
  .factory('navService', service);
