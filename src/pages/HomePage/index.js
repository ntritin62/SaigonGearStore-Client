import React from 'react';
import MenuCard from './components/MenuCard';
import ItemCard from './components/ItemCard';

const coffees = [
  {
    img: './image/cafe-i1.png',
    title: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    price: '47.00',
    stars: '4.3',
  },
  {
    img: './image/cafe-i2.png',
    title: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    price: '47.00',
    stars: '4.3',
  },
  {
    img: './image/cafe-i3.png',
    title: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    price: '47.00',
    stars: '4.3',
  },
  {
    img: './image/cafe-i4.png',
    title: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    price: '47.00',
    stars: '4.3',
  },
  {
    img: './image/cafe-i1.png',
    title: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    price: '47.00',
    stars: '4.3',
  },
  {
    img: './image/cafe-i2.png',
    title: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    price: '47.00',
    stars: '4.3',
  },
  {
    img: './image/cafe-i3.png',
    title: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    price: '47.00',
    stars: '4.3',
  },
  {
    img: './image/cafe-i4.png',
    title: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    price: '47.00',
    stars: '4.3',
  },
];

const HomePage = () => {
  return (
    <div className="container mt-[40px]">
      <section className="flex flex-col gap-[40px]">
        <div>
          <h2 className="text-4xl font-bold mb-[20px]">
            <a href="">Browse Menu</a>
          </h2>
          <ul className="w-full grid grid-cols-3 gap-[51px] md:grid-cols-1 md:gap-[20px]">
            <li>
              <a href="#!">
                <MenuCard img="./image/coffee.png" title="Coffee" />
              </a>
            </li>
            <li>
              <a href="#!">
                <MenuCard img="./image/tea.png" title="Tea" />
              </a>
            </li>
            <li>
              <a href="#!">
                <MenuCard img="./image/food.png" title="Snacks" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-[20px]">Coffee</h2>
          <ul className="w-full grid grid-cols-4 gap-[30px] md:grid-cols-1 md:gap-[20px]">
            {coffees.map((coffee) => (
              <li>
                <a href="#!">
                  <ItemCard
                    img={coffee.img}
                    title={coffee.title}
                    price={coffee.price}
                    stars={coffee.stars}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
