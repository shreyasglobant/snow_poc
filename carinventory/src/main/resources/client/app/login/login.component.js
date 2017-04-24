import loginHtml from './login.html';

let loginComponent = {
  template: loginHtml,
  controllerAs: 'login',
  controller: function(loginService) {
    const vm = this;
    vm.title = loginService.title();
  }

}

export default loginComponent;
