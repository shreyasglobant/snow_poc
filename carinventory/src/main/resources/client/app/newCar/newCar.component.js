import newCarHtml from './newCar.html';

let newCarComponent = {
  template: newCarHtml,
  controllerAs: 'newCar',
  controller: function(newCarService, $state) {
    const vm = this;
    vm.title = newCarService.title();
    vm.cars = newCarService.getCars();
    vm.addCar = (car) => {
      newCarService.addCar(car);
      $state.go('home.list');
    }
  }

}

export default newCarComponent;
