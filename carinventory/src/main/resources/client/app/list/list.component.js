import listHtml from './list.html';

let listComponent = {
  template: listHtml,
  controllerAs: 'list',
  controller: function(listService, newCarService) {
    const vm = this;
    vm.title = listService.title();
    vm.cars = newCarService.getCars();
    var imagePath = 'img/list/60.jpeg';

    vm.todos = [
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: 'I will be in your neighborhood doing errands'
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: 'I will be in your neighborhood doing errands'
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: 'I will be in your neighborhood doing errands'
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: 'I will be in your neighborhood doing errands'
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: 'I will be in your neighborhood doing errands'
      }
    ];
  }

}

export default listComponent;
