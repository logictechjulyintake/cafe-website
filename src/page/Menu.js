import React, { useRef } from "react";
import CoffeeImg from "../img/coffee.jpg";

function Menu() {
  const eatContentBtn = useRef(null);
  const drinkContentBtn = useRef(null);
  const eatContentRef = useRef(null);
  const drinkContentRef = useRef(null);

  function openEatContent() {
    eatContentRef.current.style.display = "block";
    drinkContentRef.current.style.display = "none";
    eatContentBtn.current.classList.add("menu-active")
    drinkContentBtn.current.classList.remove("menu-active")

  }
  function openDrinkContent() {
    eatContentRef.current.style.display = "none";
    drinkContentRef.current.style.display = "block";
    eatContentBtn.current.classList.remove("menu-active")
    drinkContentBtn.current.classList.add("menu-active")
  }

  return (
    <>
      <div id="menu">
        <div className="text-white flex justify-center m-10">
          <span className="bg-black w-40 h-7 flex justify-center">
            THE MENU
          </span>
        </div>

        <div className="flex justify-center flex-col items-center">
          <div className="w-[700px] shadow-md">
            <div className="flex flex-row justify-around shadow-md">
              <div
                className="menu-active cursor-pointer flex-auto text-center m-2 p-1"
                onClick={openEatContent} 
                ref={eatContentBtn}
              >
                Eat
              </div>
              <div
                className="cursor-pointer flex-auto text-center m-2 p-1"
                onClick={openDrinkContent} 
                ref={drinkContentBtn}
              >
                Drink
              </div>
            </div>
            <div>
              {/* eat content*/}
              <div className="p-3" ref={eatContentRef}>
                <h5 className="mt-8">Bread Basket</h5>
                <p className="text-gray-500 mt-4">
                  Assortment of fresh baked fruit breads and muffins 5.50
                </p>

                <h5 className="mt-8 ">Honey Almond Granola with Fruits</h5>
                <p className="text-gray-500 mt-4">
                  Natural cereal of honey toasted oats, raisins, almonds and
                  dates 7.00
                </p>

                <h5 className="mt-8 ">Belgian Waffle</h5>
                <p className="text-gray-500 mt-4">
                  Vanilla flavored batter with malted flour 7.50
                </p>

                <h5 className="mt-8 ">Scrambled eggs</h5>
                <p className="text-gray-500 mt-4">
                  Scrambled eggs, roasted red pepper and garlic, with green
                  onions 7.50
                </p>

                <h5 className="mt-8 ">Blueberry Pancakes</h5>
                <p className="text-gray-500 mt-4">
                  With syrup, butter and lots of berries 8.50
                </p>
              </div>

              {/* drink content */}
              <div className="p-3" ref={drinkContentRef}>
                <h5 className="mt-8">Coffee</h5>
                <p className="text-gray-500 mt-4">Regular coffee 2.50</p>

                <h5 className="mt-8">Chocolato</h5>
                <p className="text-gray-500 mt-4">
                  Chocolate espresso with milk 4.50
                </p>

                <h5 className="mt-8">Corretto</h5>
                <p className="text-gray-500 mt-4">Whiskey and coffee 5.00</p>

                <h5 className="mt-8">Iced tea</h5>
                <p className="text-gray-500 mt-4">
                  Hot tea, except not hot 3.00
                </p>

                <h5 className="mt-8">Soda</h5>
                <p className="text-gray-500 mt-4">
                  Coke, Sprite, Fanta, etc. 2.50
                </p>
              </div>
            </div>
          </div>

          <div
            className="w-[700px] h-[400px] box-border bg-cover saturate-50 mt-8 "
            style={{ backgroundImage: `url(${CoffeeImg})` }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Menu;
