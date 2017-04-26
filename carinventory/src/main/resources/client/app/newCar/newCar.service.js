function newCarService($state) {

  return {
    title: () => $state.current.name,
    addCar: (car) => {

    }
  }

}

export default newCarService;
