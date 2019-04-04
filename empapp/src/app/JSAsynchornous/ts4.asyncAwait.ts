// Import stylesheets
import './style.css';
let l = console.log;
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
/_ ES7 _/
const isParentHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => {
        if (isParentHappy) {
            const car = {
                brand: 'Ferrari',
                color: 'red'
            };
            resolve(car);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }    });

// 2nd promise
async function showOff(car) {
    return new Promise(
        (resolve, reject) => {
            var message = 'Hey friend, I have a new ' +
                car.color + ' ' + car.brand + ' car';
            resolve(message);
        }    );};

// call our promise
async function askParent() {
    try {
        console.log('before asking parent');

        let phone = await willIGetNewPhone;
        let message = await showOff(phone);

        console.log(message);
        console.log('after asking parent');
    }
    catch (error) {
        console.log(error.message);
    }
}
(async () => {    await askParent();  })();


