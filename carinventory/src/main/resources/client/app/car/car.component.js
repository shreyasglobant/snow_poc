import carHtml from './car.html';

let exampleComponent = {
  template: carHtml,
  controllerAs: 'car',
  controller: function(newCarService, $stateParams, $state) {
    const vm = this;
    vm.cars = newCarService.getCars();
    vm.car = $stateParams.car;
    vm.gotoList = () => {
      $state.go('home.list');
    }
  }

}

export default exampleComponent;
