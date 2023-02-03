import React from "react";

const Footer = () => {
  return (
    <footer>
      <section class="sec3 mt-5 py-5">
        <div class="spacing px-0 md:px-5 mx-auto w-[90%] sm:max-w-screen-md lg:max-w-screen-2xl">
          <div class="top block md:flex mb-5 gap-10">
            <div class="left w-full md:w-[40%] mb-5 md:text-left text-center">
              <div class="logo md:block flex justify-center md:justify-start">
                <img class="w-[180px]" src="./css/images/logoharisenin.png" alt="" />
              </div>
              <p class="mt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad illo aperiam nobis quos laudantium repellat maxime cupiditate nihil, praesentium, nemo commodi! Perspiciatis atque libero nemo animi officiis provident
                qui doloribus, non nostrum eveniet cumque sed a dolorem porro reiciendis assumenda, possimus perferendis. Obcaecati, eligendi in quae nam nihil temporibus.
              </p>
            </div>
            <div class="right flex w-full md:w-[40%] justify-between ml-0 md:ml-10">
              <div class="program">
                <button class="mb-2 font-bold">Our Menu</button>
                <div class="content flex flex-col gap-2">
                  <a href="#">Makanan</a>
                  <a href="#">Minuman</a>
                  <a href="#">Best Deal</a>
                </div>
              </div>
              <div class="About">
                <button class="mb-2 font-bold">About</button>
                <div class="content flex flex-col gap-2">
                  <a href="#">Tentang Kami</a>
                  <a href="#">Food Blog</a>
                </div>
              </div>
              <div class="Bantuan">
                <button class="mb-2 font-bold">Bantuan</button>
                <div class="content flex flex-col gap-2">
                  <a href="#">FAQ</a>
                  <a href="#">Syarat & Ketentuan</a>
                  <a href="#">Kebijakan & Privasi</a>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom py-10 flex justify-between border-t-2">
            <div class="text">© 2023 Team Project #2 Harisenin.com</div>
            <div class="socialmedia flex gap-3 text-[20px]">
              <div class="linkedin">
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
              <div class="face">
                <ion-icon name="logo-facebook"></ion-icon>
              </div>
              <div class="insta">
                <ion-icon name="logo-instagram"></ion-icon>
              </div>
              <div class="twitter">
                <ion-icon name="logo-twitter"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
