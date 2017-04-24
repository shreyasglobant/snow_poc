import loginHtml from './login.html';

let loginComponent = {
  template: loginHtml,
  controllerAs: 'login',
  controller: function(loginService, $state, $rootScope) {
    const vm = this;
    vm.title = loginService.title();
    vm.formData =  {
      email: 'hello@patternry.com',password: 'foobar'
    };
    vm.submit = ()=> {
      $rootScope.path = 'home';
      $state.go('home');
    } ;
  }
}

export default loginComponent;
