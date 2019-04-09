import { concat, of, from } from 'rxjs';
import { allBooks } from 'requisites/4.data';

const source$ = of('hello', 1, true, allBooks);
source$.subscribe(v => l(v));

// concat
const source1$ = of('hello', 1, true, allBooks[0]);
const source2$ = from(allBooks);

concat(source1$, source2$).subscribe(val => l(val));
