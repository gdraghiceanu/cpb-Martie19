let source$ = of('hello', 1, true, allBooks)
source$.subscribe(v=>l(v));

//concat
let source1$ = of('hello', 1, true, allBooks[0])
let source2$ = from(allBooks);

concat(source1$, source2$).subscribe(val => l(val));