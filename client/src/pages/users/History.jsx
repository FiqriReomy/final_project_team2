import React from "react";
import food4 from '../../image-source/images/food4.png'
import food6 from '../../image-source/images/food6.png'
import food7 from '../../image-source/images/food7.png'
import food8 from '../../image-source/images/food8.png'
import food9 from '../../image-source/images/food9.png'

const History = () => {
  return (
    <section className="h-full flex-col flex justify-center items-center bg-green-400 ">
          <div className="hero bg-hero bg-cover bg-center h-full ">
              <div className="hero-overlay bg-opacity-60"></div>
              <div className=" w-full px-10">
          <div className="overflow-x-auto w-full ">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Makanan</th>
                  <th>Jumlah</th>
                  <th>Total harga</th>
                  <th>Tanggal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={food4} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Salad Kotak</div>
                        <div className="text-sm opacity-50">Rp.20.000</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    X 2
                    <br/>
                  </td>
                  <td>Rp.40.000</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">23 January 2022</button>
                  </th>
                </tr>
                
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={food8} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Juice Alpukad</div>
                        <div className="text-sm opacity-50">Rp.10.000</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    x1
                    <br/>
                  </td>
                  <td>Rp. 10.000</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">04 Maret 2022</button>
                  </th>
                </tr>
              
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={food9} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Kentang Goreng</div>
                        <div className="text-sm opacity-50">Rp.10.000</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    x3
                    <br/>
                  </td>
                  <td>Rp.30.000</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">19 Maret 2022</button>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={food9} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Kentang Goreng</div>
                        <div className="text-sm opacity-50">Rp.10.000</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    x3
                    <br/>
                  </td>
                  <td>Rp.30.000</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">20 April 2022</button>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={food9} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Kentang Goreng</div>
                        <div className="text-sm opacity-50">Rp.10.000</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    x3
                    <br/>
                  </td>
                  <td>Rp.30.000</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">20 April 2022</button>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={food9} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Kentang Goreng</div>
                        <div className="text-sm opacity-50">Rp.10.000</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    x3
                    <br/>
                  </td>
                  <td>Rp.30.000</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">20 April 2022</button>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={food9} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Kentang Goreng</div>
                        <div className="text-sm opacity-50">Rp.10.000</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    x3
                    <br/>
                  </td>
                  <td>Rp.30.000</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">20 April 2022</button>
                  </th>
                </tr>
              
              </tbody>    
            </table>
          </div>

          <div className="flex items-center justify-between pt-5">
            <div className="btn-group ">
              <button className="btn btn-warning">1</button>
              <button className="btn btn-success">2</button>
              <button className="btn btn-warning">3</button>
              <button className="btn btn-warning">4</button>
            </div>
          </div>
            </div>
              </div>
    </section>
  );
};

export default History;
