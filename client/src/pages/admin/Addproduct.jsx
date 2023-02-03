import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addproducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [qty, setQty] = useState("");
  const [kategori, setKategori] = useState("Makanan");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("desc", desc);
    formData.append("qty", qty);
    formData.append("kategori", kategori);
    formData.append("images", image);
    try {
      await axios.post("http://localhost:5000/products", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      alert("Produk Baru Berhasil ditambahkan");
      navigate("/admin/products");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
      }
    }
  };

  return (
    <div className="p-2 bg-neutral-200 h-screen">
      <div className="p-5 bg-white rounded">
        <div className="heading border-b-2 mb-2">
          <h2 className="text-semibold text-[25px]">Tambah Produk Baru</h2>
        </div>
        <div className="w-full">
          <form onSubmit={saveProduct}>
            <div className="flex flex-wrap mb-5">
              <div className="left w-1/2 px-5 ">
                <div className="field mb-3">
                  <label className="label">Nama produk</label>
                  <input type="text" className="py-1 px-3 border rounded w-full" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama Produk" />
                </div>
                <div className="field mb-3">
                  <label className="label">Harga</label>
                  <input type="text" className="py-1 px-3 border rounded w-full" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Harga" />
                </div>
                <div className="field mb-3">
                  <label className="label">Deskripsi Produk</label>
                  <input type="text" className="py-1 px-3 border rounded w-full" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Deskripsi Produk ..." />
                </div>
                <div className="field mb-3">
                  <label className="label">Jumlah</label>
                  <input type="text" className="py-1 px-3 border rounded w-full" value={qty} onChange={(e) => setQty(e.target.value)} placeholder="Jumlah Produk ..." />
                </div>
                <div className="field mb-3">
                  <label className="label">Kategori</label>
                  <div className="control w-full">
                    <select className="w-full py-1 px-3 border" value={kategori} onChange={(e) => setKategori(e.target.value)}>
                      <option value="Makanan">Makanan</option>
                      <option value="Minuman">Minuman</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="right w-1/2 px-5">
                <div className="field max-w-sm p-2">
                  <label className="label">Product Image</label>
                  <div className="flex flex-col gap-2 control ">
                    <div className="preview w-full border ">
                      {preview ? (
                        <div className="p-2 w-[335px] h-[250px] rounded overflow-hidden">
                          <img className="object-cover w-ful" src={preview} alt="Preview Image" />
                        </div>
                      ) : (
                        <figure className="p-2 w-full min-h-[235px]"></figure>
                      )}
                    </div>

                    <button className="py-2 px-5 border rounded w-full">
                      <input type="file" className="w-full rounded" onChange={loadImage} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="field w-full text-center">
              <button type="submit" className="py-2 px-5 rounded bg-green-500 active:scale-95">
                TAMBAH BARU
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addproducts;
