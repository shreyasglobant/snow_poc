import exampleHtml from './example.html';

let exampleComponent = {
  template: exampleHtml,
  controllerAs: 'grid',
  controller: function(exampleService, newCarService) {
    const vm = this;
    vm.title = exampleService.title();
    newCarService.getCars().then((res)=> {
      vm.cars = res.data.result;
    });
  }

}

export default exampleComponent;
