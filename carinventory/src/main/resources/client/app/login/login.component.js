import loginHtml from './login.html';

let loginComponent = {
  template: loginHtml,
  controllerAs: 'login',
  controller: function(loginService, $state) {
    const vm = this;
    vm.title = loginService.title();
    vm.formData =  {
      email: '',password: ''
    };
    vm.errorMsg = '';
    vm.submit = ()=> {
      vm.errorMsg = '';
      loginService.login(vm.formData).then(res => {
        if (res) {
          $state.go('list');
        }
        else {
          vm.errorMsg = 'Invalid User';
        }
      });
    } ;
  }
}

export default loginComponent;
