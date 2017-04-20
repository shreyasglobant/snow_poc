import listHtml from './list.html';

let listComponent = {
  template: listHtml,
  controllerAs: 'list',
  controller: function(listService) {
    const vm = this;
    vm.title = listService.title();
  }

}

export default listComponent;
