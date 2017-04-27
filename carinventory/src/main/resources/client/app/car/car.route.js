function carRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('car', {
      url: '/car',
      params: {
        car: null
      },
      component: 'car'
    })
}

export default carRoutes;
