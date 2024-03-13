import Cart from "../cart";
import Book from "../domain/book";
import Movie from "../domain/movie";

test('Добавление фильма', () => {
  const cart = new Cart();
  const movie = new Movie( 
    1,
    'Мстители',
    10000000,
    'The Avengers',
    2012,
    'США',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
     '137 мин. / 02:17');
  cart.add(movie);

  expect(cart.items.length).toBe(1);
});

test('Суммарная стоимость', () => {
  const cart = new Cart();
  cart.add(new Book(2, 'Дюна', 'Френк Герберт', 1000, 545));
  cart.add(new Movie(3, 'Дюна', 3000, 'duna', 2021, 'США', 'not', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '155 мин. / 02:35'));

  expect(cart.getTotalCost()).toBe(4000);
});

test('Суммарная стоимость с учетом скидки', () => {
  const cart = new Cart();
  cart.add(new Book(2, 'Дюна', 'Френк Герберт', 1000, 545));
  cart.add(new Movie(3, 'Дюна', 3000, 'duna', 2021, 'США', 'not', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '155 мин. / 02:35'));

  expect(cart.getTotalCostDiscount(10)).toBe(3600);
});

test('Удаление объекта по id', () => {
  const cart = new Cart();
  cart.add(new Book(2, 'Дюна', 'Френк Герберт', 1000, 545));
  cart.add(new Movie(3, 'Дюна', 3000, 'duna', 2021, 'США', 'not', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '155 мин. / 02:35'));

  cart.removeCart(3);

  expect(cart).toEqual({
    _items: [{
      id: 2,
      name: 'Дюна',
      author: 'Френк Герберт',
      price: 1000,
      pages: 545
    }]

  })

})

