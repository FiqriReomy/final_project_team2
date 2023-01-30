import React, { useState, useEffect, useRef } from "react";

const Detailbox = ({ setOpenModal }) => {
  const [Jumlah, setJumlah] = useState("0");
  let count = useRef(0);

  const tambah = () => {
    setJumlah((count.current += 1));
  };
  const kurang = () => {
    setJumlah((count.current = count.current - 1));
  };
  return (
    <section className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black bg-opacity-60 z-10" onClick={() => setOpenModal(false)}>
      <div
        className="max-w-screen-sm w-[300px] bg-white dropdown"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <figure className=" w-full overflow-hidden">
          <img className="object-cover" src="images/burger.png" />
        </figure>
        <div className="information px-2">
          <div className="title flex justify-center py-2 text-[20px]">BURGER COMBO DAGING</div>
          <div className="desc text-[13px] text-justify">Lorem ipsum dolor sit amet consectetur. Impedit, non eos rerum dicta enim atque iure modi voluptatem laborum in excepturi qui quod, asperiores vero.</div>
        </div>
        <div className="info py-2 px-2 flex justify-between items-center">
          <div className="aturjumlah">
            <div className="flex justify-center">Atur Jumlah</div>
            <div className="flex gap-2">
              <button className="px-2 bg-red-500" onClick={() => tambah()}>
                +
              </button>
              <div className="display w-[10px] px-5 border">{Jumlah}</div>
              <button className="px-2 bg-red-500" onClick={() => kurang()}>
                -
              </button>
            </div>
          </div>
          <div className="cekout">
            <button className="px-2 py-4 bg-green-500 active:scale-95">Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detailbox;
