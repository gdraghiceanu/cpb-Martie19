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

var askParent = function() {
  willGetNewCar.then(function(fullfilment){
    l(fullfilment);
  }).catch (function(err){
    l(err.message);
  })
}

askParent();


