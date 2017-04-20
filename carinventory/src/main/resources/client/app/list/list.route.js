function listRoutes($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/example');
  $urlRouterProvider.when('/', '/example');

  $stateProvider
    .state('list', {
      url: '/list',
      component: 'list'
    })
}

export default listRoutes;
