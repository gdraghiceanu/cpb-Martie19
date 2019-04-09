import { Observable, of } from 'rxjs';
import { allBooks } from './data';
import { map } from 'rxjs/operators';

const l = console.log;
console.clear();

// function subcribeFc(subcriber) {
//   for (let book of allBooks) {
//     subcriber.next(book);
//   }
// }

const allBooksObservable$ = new Observable(subscriber => {

  // error
  if (document.title !== 'RxBooks') {
    subscriber.error('Incorect page title');
  }

  // next
  for (const book of allBooks) {
    subscriber.next(book);
  }

  // complete
  setTimeout(() => {subscriber.complete(); }, 2000);

  return () => l('Executing code!');
});

allBooksObservable$.subscribe(carte => l(carte.title));
