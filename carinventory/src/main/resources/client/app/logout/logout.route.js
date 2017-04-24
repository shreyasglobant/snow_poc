function logoutRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('logout', {
      url: '/logout',
      component: 'logout'
    })
}

export default logoutRoutes;
