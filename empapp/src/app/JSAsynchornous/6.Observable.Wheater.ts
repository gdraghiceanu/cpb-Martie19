// Import stylesheets
import './style.css';
const l = console.log;
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

interface Observer {
  notify(temp: number);
}

interface Subject {
  subscribe(o: Observer);
  unsubscribe(o: Observer);
  notifyObservers();
}

class WheaatherStation implements Subject {
  private temperature: number;
  private observers: Observer[] = [];

public SetTemperature (temp: number) {
  this.temperature = temp;
  this.notifyObservers();
}

 public subscribe(o: Observer) {
   this.observers.push(o);
 }

 public unsubscribe(o: Observer) {
   const index = this.observers.indexOf(o);
   this.observers.splice(index, 1);
 }

 public notifyObservers() {
   for (const obs of this.observers) {
     obs.notify(this.temperature);
   }
 }
}

// obs1
class WheatherCom implements Observer {
  private subj: Subject;

  constructor( wheaherStation: Subject) {
    this.subj = wheaherStation;
    wheaherStation.subscribe(this);
  }

  public notify(temp: number) {
    l('Temp s-a modificat!');
  }
}

// obs2
class VremeRO implements Observer {
  private subj: Subject;

  constructor( wheaherStation: Subject) {
    this.subj = wheaherStation;
    wheaherStation.subscribe(this);
  }

  public notify(temp: number) {
    if (temp < 25) {
      l('Vremea se raceste!');
    } else {
      l('Vremea se incalzeste!');
    }
  }
}

const observable = new WheaatherStation();
const  wheatherCom = new WheatherCom(observable);
const vremeRO = new VremeRO(observable);

observable.SetTemperature(30);