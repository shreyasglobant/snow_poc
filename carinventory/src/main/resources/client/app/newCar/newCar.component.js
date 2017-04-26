import newCarHtml from './newCar.html';

let newCarComponent = {
  template: newCarHtml,
  controllerAs: 'newCar',
  controller: function(newCarService, $state) {
    const vm = this;
    vm.title = newCarService.title();
    vm.addCar = (car) => {
      newCarService.addCar(car);
    }
  }

}

export default newCarComponent;
