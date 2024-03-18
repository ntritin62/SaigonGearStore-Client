import React from 'react';
import MenuCard from './components/MenuCard';
import ItemCard from '../../components/ItemCard';
import { Link, useLoaderData } from 'react-router-dom';

const HomePage = () => {
  const { keyboardProds, mouseProds, headphoneProds } = useLoaderData();

  return (
    <div className="container  py-[40px]">
      <section className="flex flex-col gap-[40px]">
        <div>
          <h2 className="text-4xl font-bold mb-[20px]">
            <a href="">Browse Menu</a>
          </h2>
          <ul className="w-full grid grid-cols-3 gap-[51px] md:grid-cols-1 md:gap-[20px]">
            <li>
              <Link to="./keyboard">
                <MenuCard img="/image/keyboard.png" title="Keyboard" />
              </Link>
            </li>
            <li>
              <Link to="./mouse">
                <MenuCard img="./image/mouse.png" title="Mouse" />
              </Link>
            </li>
            <li>
              <Link to="./headphone">
                <MenuCard img="./image/headphone.png" title="Headphone" />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between items-center mb-[20px]">
            <h2 className="text-4xl font-bold ">Keyboard</h2>
            <Link
              to="./keyboard"
              className="text-[#539bea] font-medium pr-[25px]"
            >
              More...
            </Link>
          </div>
          <ul className="w-full grid grid-cols-4 gap-[30px] md:grid-cols-2 sm:grid-cols-1 md:gap-[20px] ">
            {keyboardProds.map((prod) => (
              <ItemCard
                key={prod._id}
                id={prod._id}
                img={prod.images[0]}
                title={prod.name}
                price={(prod.price - (prod.sale / 100) * prod.price).toFixed(2)}
                brand={prod.brand.brandName}
              />
            ))}
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-center mb-[20px]">
            <h2 className="text-4xl font-bold ">Mouse</h2>
            <Link to="./mouse" className="text-[#539bea] font-medium pr-[25px]">
              More...
            </Link>
          </div>
          <ul className="w-full grid grid-cols-4 gap-[30px] md:grid-cols-2 sm:grid-cols-1 md:gap-[20px] ">
            {mouseProds.map((prod) => (
              <ItemCard
                key={prod._id}
                id={prod._id}
                img={prod.images[0]}
                title={prod.name}
                price={prod.price}
                brand={prod.brand.brandName}
              />
            ))}
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-center mb-[20px]">
            <h2 className="text-4xl font-bold ">Headphone</h2>
            <Link
              to="./headphone"
              className="text-[#539bea] font-medium pr-[25px]"
            >
              More...
            </Link>
          </div>
          <ul className="w-full grid grid-cols-4 gap-[30px] md:grid-cols-2 sm:grid-cols-1 md:gap-[20px] ">
            {headphoneProds.map((prod) => (
              <ItemCard
                key={prod._id}
                id={prod._id}
                img={prod.images[0]}
                title={prod.name}
                price={prod.price}
                brand={prod.brand.brandName}
              />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
