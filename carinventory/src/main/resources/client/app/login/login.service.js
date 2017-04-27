function loginService($state, sessionService, $http, ENV, $q) {

  return {
    title: () => $state.current.name,
    login: (user) => {
      return $q((resolve, reject) => {
        $http({
          method: 'POST',
          url: `${ENV.baseUrl}${ENV.loginApi}`,
          headers: {
            'user_name': user.email,
            'user_password': user.password
          }
        }).then(res => {
          if (res && res.data.result && res.data.result.firstName) {
            let userData = {
              firstName : 'Mandar',
              lastName : 'Kamtekar',
              role :'admin'
            }
            sessionService.setUser(userData);
            resolve(true);
          }
          else {
            sessionService.inValidate();
            resolve(false);
          }
        })
        .catch(reject);
      });
    }
  }

}

export default loginService;
