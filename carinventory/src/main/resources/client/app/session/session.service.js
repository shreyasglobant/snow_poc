function sessionService($state) {
  let isValid = false;
  let loggedUser = {};
  return {
    isValid: () => isValid,
    inValidate: () => {
      isValid = false;
      loggedUser = {};
    },
    setUser: (user) => {
      isValid = true;
      loggedUser = user;
    },
    getUser: () => {
      return loggedUser;
    }
  }

}

export default sessionService;
