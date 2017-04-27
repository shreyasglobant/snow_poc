function newCarService($state, sessionService, $http, ENV, $q) {
  var cars = [];
  return {
    cars: [],
    title: () => $state.current.name,
    getCars: () => cars,
    addCar: (car) => {
      return $q((resolve, reject) => {
        $http({
          method: 'POST',
          url: `${ENV.addCarApi}`,
          data: [
            {
              'u_serial': car.u_serial,
              'u_manufacturer': car.u_manufacturer,
              'u_segment': car.u_segment,
              'u_model': car.u_model,
              'u_quantity': car.u_quanity
            }
          ]
        }).then(res => {
          if (res) {
            resolve(true);
          }
          else {
            resolve(false);
          }
        })
        .catch(reject);
      });
    }
  }

}

export default newCarService;
