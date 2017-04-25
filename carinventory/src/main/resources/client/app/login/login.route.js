function loginRoutes($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/login');
  $urlRouterProvider.when('/', '/login');

  $stateProvider
    .state('login', {
      url: '/login',
      component: 'login'
    })
}

export default loginRoutes;
