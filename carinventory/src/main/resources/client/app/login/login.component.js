import loginHtml from './login.html';

let loginComponent = {
  template: loginHtml,
  controllerAs: 'login',
  controller: function(loginService) {
    const vm = this;
    vm.title = loginService.title();
    vm.formData =  {
      email: '',password: ''
    };
    vm.submit = ()=> {
      loginService.login(vm.formData).then(res => {
      });
      return true;
    } ;
  }
}

export default loginComponent;
