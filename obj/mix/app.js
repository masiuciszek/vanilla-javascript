
const car = {
    maker : 'Ferrari',
    model : 'gt4'
};

 function drive(kmh) {
  return `Driving a ${this.maker} with this model ${this.model} in ${kmh}`;
    }


console.log(drive.call(car,200));
console.log(drive.apply(car,[300]));

