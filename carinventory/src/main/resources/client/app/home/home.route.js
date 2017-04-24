function homeRoute($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    component: 'home',
    resolve: ($rootScope) => {
      $rootScope.activeMenu = 'home';
    }
  });
}
export default homeRoute;
