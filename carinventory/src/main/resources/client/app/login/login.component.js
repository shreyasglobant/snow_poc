import loginHtml from './login.html';

let loginComponent = {
  template: loginHtml,
  controllerAs: 'login',
  controller: function(loginService) {
    const vm = this;
    vm.title = loginService.title();
    vm.formData =  {
      email: 'hello@patternry.com',password: 'foobar'
    };
    vm.submit = ()=> {
      return true;
    } ;
  }
}

export default loginComponent;
