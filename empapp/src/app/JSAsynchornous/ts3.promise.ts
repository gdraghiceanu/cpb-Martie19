// Import stylesheets
import './style.css';
let l = console.log;
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var isParentHappy = true;

var willGetNewCar = new Promise(function(resolve, reject){
  if(isParentHappy) {
    var car = {
      brand: 'Ferrari',
      color: 'red'
    }
    resolve(car);
  } else {
    var reason = new Error('Parent is not happy');
    reject(reason);
  }
}) 

// var askParent = function() {
//   willGetNewCar.then(function(fullfilment){
//     l(fullfilment);
//   }).catch (function(err){
//     l(err.message);
//   })
// }

var showCarOff = function (car) {
  return new Promise(function(resolve, reject){
    var mesaj = 'Hei friends, I have a new ' + car.color + ' ' + car.brand + ' car!'

    resolve(mesaj);
  })   
}

var askParent = function() {
  l('Befor ask Parent:');
  willGetNewCar
  .then(showCarOff)
  .then(function(fullfilment){
    l(fullfilment);
  }).catch (function(err){
    l(err.message);
  })
  l('After ask Parent');
}

askParent();



