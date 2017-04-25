function sessionService($state) {
  let isValid = false;
  return {
    isValid: () => isValid,
    inValidate: () => {
      isValid = false;
    },
    setSession: () => {
      isValid = true;
    }
  }

}

export default sessionService;
