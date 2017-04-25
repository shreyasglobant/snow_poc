import loginHtml from './login.html';

let loginComponent = {
  template: loginHtml,
  controllerAs: 'login',
  controller: function(loginService, $state, $rootScope) {
    const vm = this;
    vm.title = loginService.title();
    vm.formData =  {
      email: '',password: ''
    };
    vm.submit = ()=> {
      $rootScope.path = 'home';
      $state.go('home.list');
      loginService.login(vm.formData).then(res => {
      });
      return true;
    } ;
  }
}

export default loginComponent;
