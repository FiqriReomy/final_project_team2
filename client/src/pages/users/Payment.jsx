import React from "react";

const Payment = () => {
  return (
    <section className="h-full">
          <div className="hero bg-hero bg-cover bg-center h-full ">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" text-center text-neutral-content w-[80%]  bg-white rounded-lg">
              <div className=" h-full flex  px-10 py-10">
                <div className="flex flex-col text-black">
                  <h1 className="mb-5 text-xl font-bold">Pilih Metode Pembayaran</h1>
                  <div className="py-2">
                        <div className="flex gap-2">
                          <input type="checkbox" checked="checked" className="checkbox" />
                            Transfer Bank
                        </div> 
                      </div>
                  <div>
                  <select className="select select-bordered w-full max-w-xs ">
                    <option disabled selected>Pilih Bank</option>
                    <option>BCA</option>
                    <option>BRI</option>
                    <option>BNI</option>
                  </select>
                  </div>
                </div>
                <div className="text-black border-l pl-40">
                    <h1 className="mb-5 text-xl font-bold">Detail Pembayaran</h1>
                    <div className="flex justify-start gap-7 py-3">
                      <div className="flex flex-col items-start justify-start space-y-1">
                          <h2 className="py-2 font-semibold">Total Pembayaran</h2>
                          <p>Sub total</p>
                          <p>Biaya Ongkir</p>
                          <p>handling fee</p>            
                          <p>Diskon</p>            
                      </div>
                      <div className="flex flex-col items-end justify-end space-y-1">
                          <h2 className="py-2 font-semibold">Rp. 300.000</h2>
                          <p>Rp.300.000</p>
                          <p>Rp.15.000</p>
                          <p>Free</p>            
                          <p>Rp.15.000</p>
                      </div>
                    </div>
                    <button className="btn btn-block btn-warning">Bayar Sekarang</button>
                </div>                
              </div>
            </div>
          </div>
    </section>
  );
};

export default Payment;
