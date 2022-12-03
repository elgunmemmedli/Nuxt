<template>
  <div>
    <!-- Header -->
    <header id="home_header">
      <div class="container">
        <div class="row justify-content-between">
          <div
            class="
              col-3 col-md-3 col-lg-3
              header_logo
              d-flex
              align-items-center
            "
          >
            <img src="~/assets/img/logo.png" alt="logo" />
            <h5>Nafco</h5>
          </div>
          <div class="col-6 col-md-6 col-lg-6 d-flex navbar_ul">
            <ul class="d-flex align-items-center mb-0">
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><a href="">Road Map</a></li>
              <li><a href="">NFT</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div class="col-3 col-md-3 col-lg-3 header_btn">
            <button>
              <div class="d-flex align-items-center">
                <img src="assets/img/btn_img.png" alt="btn_img" />
                <span class="text-white ms-2">Wallet</span>
              </div>
            </button>
          </div>
          <div class="col-3 col-md-6 col-lg-4 mobile_menu_bars">
            <div id="navbar_icon"></div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>