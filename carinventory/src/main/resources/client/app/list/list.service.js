function listService($state) {

  return {
    title: () => $state.current.name
  }

}

export default listService;
