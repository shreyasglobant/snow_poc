function navService($state) {

  return {
    title: () => $state.current.name
  }

}

export default navService;
