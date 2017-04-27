import listHtml from './list.html';

let listComponent = {
  template: listHtml,
  controllerAs: 'list',
  controller: function(listService, newCarService, $state) {
    const vm = this;
    vm.title = listService.title();
    newCarService.getCars().then((res)=> {
      vm.cars = res.data.result;
    });
    var imagePath = 'img/list/60.jpeg';

    vm.viewCar = (car) => {
      $state.go('car', {'car': car});
    }
  }

}

export default listComponent;
