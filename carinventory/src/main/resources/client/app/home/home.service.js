function homeService($state) {
  return {
    title: () => $state.current.name
  }

}

export default homeService;
