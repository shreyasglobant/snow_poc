function newCarRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home.newCar', {
      url: '/newCar',
      component: 'newCar'
    })
}

export default newCarRoutes;
