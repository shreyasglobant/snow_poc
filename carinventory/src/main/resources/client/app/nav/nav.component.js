import navHtml from './nav.html';

let navComponent = {
  template: navHtml,
  controllerAs: 'nav',
  controller: function(navService, $state) {
    const vm = this;
    vm.title = navService.title();
    vm.goto = (state) => {
      $state.go(state);
    }
    vm.currentNavItem = 'example';
  }

}

export default navComponent;
