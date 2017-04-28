import exampleHtml from './example.html';

let exampleComponent = {
  template: exampleHtml,
  controllerAs: 'grid',
  controller: function(exampleService, newCarService, $state) {
    const vm = this;
    vm.title = exampleService.title();
    var getCars = () => {
      newCarService.getCars().then((res)=> {
        vm.cars = res.data.result;
      });
    };
    getCars();
    vm.deleteCar = (car) => {
      newCarService.deleteCar(car).then(res => {
        getCars();
      });
    };
  }

}

export default exampleComponent;
