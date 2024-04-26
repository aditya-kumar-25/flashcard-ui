import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";
import { flashCardContent, flashcardLinks } from "./utilityDemoData";
import FAQ from "./FAQ";

function FlashcardDisplay() {
  const ref = useRef();

  const title = `Relations and Functions ( Mathematics )`;

  const [totalCards, setTotalCards] = useState(flashCardContent.length - 2);

  const [active, setActive] = useState("Study");

  const [page, setPage] = useState(1);

  const [sliding, setSliding] = useState(false);

  const nextHandler = async () => {
    if (page === totalCards || sliding) return;
    setSliding(true);
    const a = document.getElementsByClassName("see-height");
    const b = a[0].clientWidth / window.innerWidth;
    ref.current.style.transition = "transform 300ms";
    ref.current.style.transform = `translateX(-${50 + 100 * b}vw)`;
    setTimeout(() => {
      setPage(page + 1);
      ref.current.style.transition = "";
      ref.current.style.transform = "";
      setSliding(false);
    }, 300);
  };

  const prevHandler = async () => {
    if (page === 1 || sliding) return;
    setSliding(true);
    const a = document.getElementsByClassName("see-height");
    const b = a[0].clientWidth / window.innerWidth;
    ref.current.style.transition = "transform 300ms";
    ref.current.style.transform = `translateX(${50 + 100 * b}vw)`;
    setTimeout(() => {
      setPage(page - 1);
      ref.current.style.transition = "";
      ref.current.style.transform = "";
      setSliding(false);
    }, 300);
  };

  const fullScreenHandler = () => {};

  return (
    <div className="my-12">
      <header className="primary-text-gradient font-bold text-lg sm:text-2xl md:text-3xl">
        {title}
      </header>

      <div className="flex flex-col items-center gap-5 my-12">
        <ul className="flex justify-between max-w-[90vw] overflow-x-auto">
          {flashcardLinks.map((link, index) => (
            <li
              key={index}
              className={`cursor-pointer border-b-2 py-2 px-3 ${
                active === link
                  ? "text-primary-text-color border-primary-text-color"
                  : "text-gray-500 border-white"
              } font-semibold`}
              onClick={() => setActive(link)}
            >
              {link}
            </li>
          ))}
        </ul>

        <div className="overflow-hidden">
          <div ref={ref} className="flex gap-[50vw]">
            {flashCardContent
              .slice(page - 1, page + 2)
              .map((content, index) => {
                return (
                  <div
                    key={index}
                    className="relative flex items-center justify-center see-height min-h-[300px] w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] flashcard-gradient text-white font-semibold text-lg"
                  >
                    <img
                      src="../src/assets/bulb.svg"
                      className="absolute top-6 left-6 h-[25px] aspect-square"
                    />
                    <img
                      src="../src/assets/sound.svg"
                      className="absolute top-6 right-6 h-[25px] aspect-square"
                    />
                    <p>{content.front}</p>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="hidden sm:flex justify-between items-center gap-24 max-w-[90vw] overflow-x-auto">
          <img
            src="../src/assets/reset.svg"
            className="h-[25px] aspect-square cursor-pointer"
            onClick={() => setPage(1)}
          />
          <div className="flex gap-5 items-center">
            <div
              className="primary-gradient p-3 rounded-full text-white cursor-pointer"
              onClick={prevHandler}
            >
              <FaChevronLeft className="aspect-square" size={20} />
            </div>
            <p className="text-lg font-semibold">
              {(page < 10 ? "0" : "") + page.toString()}/
              {(totalCards < 10 ? "0" : "") + totalCards.toString()}
            </p>
            <div
              className="primary-gradient p-3 rounded-full text-white cursor-pointer"
              onClick={nextHandler}
            >
              <FaChevronRight className="aspect-square" size={20} />
            </div>
          </div>
          <img
            src="../src/assets/fullScreen.svg"
            className="h-[25px] aspect-square cursor-pointer"
            onClick={fullScreenHandler}
          />
        </div>

        <div className="flex sm:hidden flex-col items-center gap-5">
          <div className="flex gap-5 items-center">
            <div
              className="primary-gradient p-3 rounded-full text-white cursor-pointer"
              onClick={prevHandler}
            >
              <FaChevronLeft className="aspect-square" size={20} />
            </div>
            <p className="text-lg font-semibold">
              {(page < 10 ? "0" : "") + page.toString()}/
              {(totalCards < 10 ? "0" : "") + totalCards.toString()}
            </p>
            <div
              className="primary-gradient p-3 rounded-full text-white cursor-pointer"
              onClick={nextHandler}
            >
              <FaChevronRight className="aspect-square" size={20} />
            </div>
          </div>
          <div className="flex gap-24">
            <img
              src="../src/assets/reset.svg"
              className="h-[25px] aspect-square cursor-pointer"
              onClick={() => setPage(1)}
            />
            <img
              src="../src/assets/fullScreen.svg"
              className="h-[25px] aspect-square cursor-pointer"
              onClick={fullScreenHandler}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-12 justify-around md:justify-between">
        <div className="flex gap-5">
          <div className="p-3 rounded-full primary-shadow h-fit">
            <img
              src="../src/assets/icon.svg"
              className="h-[30px] aspect-square"
            />
          </div>
          <div>
            <p className="text-[#696671] text-xs">Published by</p>
            <img src="../src//assets/nameLogo.svg" className=" aspect-square" />
          </div>
        </div>

        <button className="flex gap-2 items-center">
              <div className="primary-gradient p-3 rounded-full"><FaPlus /></div>
              <p className="primary-text-gradient font-bold text-lg">Create Flashcard</p>
        </button>
      </div>

        <FAQ />
            
    </div>
  );
}

export default FlashcardDisplay;
