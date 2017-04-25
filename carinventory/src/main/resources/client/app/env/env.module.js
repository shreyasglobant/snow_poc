import angular from 'angular';
import constant from './env.constant';

angular
  .module('ENV', [])
  .constant('ENV', constant);
