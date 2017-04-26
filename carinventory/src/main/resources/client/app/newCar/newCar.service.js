function newCarService($state) {
  var cars = [];
  return {
    cars: [],
    title: () => $state.current.name,
    addCar: (car) => {
      cars.push(car);
    },
    getCars: () => cars
  }

}

export default newCarService;
