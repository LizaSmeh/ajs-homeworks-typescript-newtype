import Cart from "./cart";
import Movie from "./domain/movie";
const cart = new Cart();

cart.add(
    new Movie(
        1,
        'Мстители',
        10000000,
        'The Avengers',
        2012,
        'США',
        'Avengers Assemble!',
        ['фантастика', 'боевик', 'фэнтези', 'приключения'],
         '137 мин. / 02:17'
    )
);

console.log(cart.items);