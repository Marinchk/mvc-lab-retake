const cars = [
    { id: 1, make: "Lada", model: "VAZ-2101", year: 1970, color: "beige" },
    { id: 2, make: "Moskvitch", model: "Moskvitch-412", year: 1967, color: "green" },
    { id: 3, make: "ZAZ", model: "Zaporozhets", year: 1960, color: "yellow" },
    { id: 4, make: "GAZ", model: "Volga", year: 1956, color: "black" },
    { id: 5, make: "UAZ", model: "469", year: 1971, color: "camouflage" }
  ]
  
  function getCars() {
    return cars
  }

  function getCarInformation(id) {
    const car = cars.find(car => car.id === id);
    if (car) {
      const { make, model, year, color } = car;
      return `Make: ${make}, Model: ${model}, Year: ${year}, Color: ${color}.`;
    } else {
      return ""
    }
  }

  function getCarAge(id){
    const car = cars.find(car => car.id === id);
    if (car) {
        const thisYear = new Date().getFullYear()
        const carAge = thisYear - car.year
        return `Car is ${carAge} years old.`
    } else {
        return "Car doesn't exist"
    }
};

module.exports = { getCars, getCarInformation, getCarAge }