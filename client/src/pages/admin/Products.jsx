import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";


const Products = () => {
  const [Products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(3);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getProducts();
  }, [page, keyword]);

  const getProducts = async () => {
    const response = await axios.get(`http://localhost:5000/products?search_query=${keyword}&page=${page}&limit=${limit}`);
    setProducts(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  };

  const changePage = ({ selected }) => {
    setPage(selected);
    if (selected === 9) {
      setMsg("Jika tidak menemukan data yang Anda cari, silahkan cari data dengan kata kunci spesifik!");
    } else {
      setMsg("");
    }
  };

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setMsg("");
    setKeyword(query);
  };

  const deleteProduct = async (id) => {
    const deletes = window.confirm("Hapus Produk yang dipilih?");
    if (deletes) {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`);
        getProducts();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="bg-neutral-100 p-5 min-h-screen">
      <div className="container mt-5">
        <div className="columns">
          <div className="flex flex-col justify-center w-full">
            <form onSubmit={searchData}>
              <div className="flex flex-wrap w-full gap-2 mb-2">
                <input type="text" className="input w-full md:w-[85%] py-2 px-5" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Find something here..." />
                <button type="submit" className="w-full md:w-auto py-2 px-5 bg-green-500 rounded active:scale-95">
                  Search
                </button>
              </div>
            </form>
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-2 py-2 border border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-[10px]">ID</th>
                  <th className="px-2 py-2 border border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                  <th className="px-2 py-2 border border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider w-[80px]">Image</th>
                  <th className="px-2 py-2 border border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider w-[20px]">Price</th>
                  <th className="px-2 py-2 border border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider w-[20px]">Quantity</th>
                  <th className="px-2 py-2 border border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">Desc</th>
                  <th className="px-2 py-2 border border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider w-[50px]">Kategori</th>
                  <th className="px-2 py-2 border border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider w-[100px]">Action</th>
                </tr>
              </thead>
              <tbody>
                {Products.map((Prod) => (
                  <tr key={Prod.id}>
                    <td className="px-2 py-2 border border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider max-w-[10px]">{Prod.id}</td>
                    <td className="px-2 py-2 border border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">{Prod.name}</td>
                    <td className="px-2 py-2 border border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-[80px]">
                      {" "}
                      <div class="flex justify-center items-center p-2">
                        <figure className="max-w-[80px] h-full overflow-hidden">
                          <img className="w-full object-cover" src={Prod.url} alt="product_images" />
                        </figure>
                      </div>
                    </td>
                    <td className="px-2 py-2 border border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-[20px]">Rp.{Prod.price}</td>
                    <td className="px-2 py-2 border border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider w-[20px]">{Prod.qty}</td>
                    <td className="px-2 py-2 border border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider ">{Prod.desc}</td>
                    <td className="px-2 py-2 border border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider w-[50px]">{Prod.kategori}</td>
                    <td className="px-2 py-2 border border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-widerw-[100px]">
                      <div className="flex gap-2">
                        <button className="py-2 px-3 rounded bg-green-500 active:scale-95">EDIT</button>
                        <button onClick={() => deleteProduct(Prod.id)} className="py-2 px-5 rounded bg-red-500 active:text-white active:scale-95">
                          DELETE
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}
            </p>
            <p className="text-center text-red-700">{msg}</p>
            <nav className="text-center " key={rows} role="navigation" aria-label="pagination">
              <ReactPaginate
                previousLabel={"PREV"}
                nextLabel={"NEXT"}
                pageCount={Math.min(10, pages)}
                onPageChange={changePage}
                containerClassName={"w-full flex justify-center items-center list-none"}
                pageLinkClassName={"py-2 px-4 rounded border"}
                previousLinkClassName={"p-2 rounded border bg-green-500"}
                nextLinkClassName={"p-2 rounded border bg-green-500"}
                activeLinkClassName={"pagination-link is-current"}
                disabledLinkClassName={"pagination-link is-disabled"}
              />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
