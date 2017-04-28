import logoutHtml from './logout.html';

let logoutComponent = {
  template: logoutHtml,
  bindings: { path: '@' },
  controllerAs: 'logout',
  controller: function(loginService, $rootScope, $state) {
    const vm = this;
    vm.title = loginService.title();
    vm.logout = ()=> {
      $rootScope.path = 'login';
      $state.go('login');
    } ;
  }
}

export default logoutComponent;
