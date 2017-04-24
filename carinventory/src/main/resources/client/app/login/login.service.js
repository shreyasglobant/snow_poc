function loginService($state) {

  return {
    title: () => $state.current.name
  }

}

export default loginService;
