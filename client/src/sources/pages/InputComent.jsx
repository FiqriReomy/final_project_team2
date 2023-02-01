import React from 'react'

function InputComent() {
  return (
    <section id="about" className="py-5 px-5 bg-[#F5EFE4]">
    <div className=" mx-auto max-w-screen-xl">
      <div className="content_area h-[400px] border flex justify-center">
            <div className='flex flex-col items-center justify-center'>
                <h2 className="text-2xl font-semibold">Leave Comment for Our Improvment</h2>
            <div className='flex flex-col py-5 justify-center'>
                <input type="text" placeholder="Your Name" className="input my-5 input-bordered w-[20rem] " />
                <input type="text" placeholder="Review" className="input input-bordered w-[20rem]" />
            </div>
            <button className="btn btn-warning font-bold hover:scale-105">Submit</button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default InputComent
