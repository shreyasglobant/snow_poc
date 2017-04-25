function homeRoute($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    component: 'home',
    resolve: ($rootScope) => {
      $rootScope.activeMenu = 'home';
    }
  });

  $stateProvider.state('home.list', {
    url: '/list',
    component: 'list',
    resolve: ($rootScope) => {
      $rootScope.activeMenu = 'list';
    }
  });

  $stateProvider.state('home.grid', {
    url: '/grid',
    component: 'example',
    resolve: ($rootScope) => {
      $rootScope.activeMenu = 'grid';
    }
  });
}
export default homeRoute;
