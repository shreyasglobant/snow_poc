import angular from 'angular';
import routing from './home.route';
import component from './home.component';
import service from './home.service';
import './home.scss';

angular
.module('home', [])
.component('home', component)
.factory('homeService', service)
.config(routing);
