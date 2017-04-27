import exampleHtml from './example.html';

let exampleComponent = {
  template: exampleHtml,
  controllerAs: 'grid',
  controller: function(exampleService, newCarService) {
    const vm = this;
    vm.title = exampleService.title();
    vm.cars = newCarService.getCars();
  }

}

export default exampleComponent;
