<template>
    <section id="home_calculator">
        <div class="container">
            <div class="row home_calculator">
                <div class="calculator_left_side">
                    <h1 class="text-white">
                        Our Currency Calculator
                    </h1>
                    <p>3 Free Credit Scores From All Three Bureaus Get your score from all three credit bureaus for free
                        without harming your score.</p>

                    <div class="currency_select">
                        <div class="select-menu active">
                            <div class="select-btn">
                                <span class="sBtn-text">
                                    <img src="assets/img/Vector 6.png" class="sBtn-text-img" alt="">
                                    <div class="d-flex">
                                        <h4 class="sBtn-text-name text-white">Bitcoin</h4>
                                        <span class="sBtn-text-number">USD 1.2123</span>
                                    </div>
                                </span>
                                <i class="fas fa-chevron-up"></i>
                            </div>

                            <!-- <ul class="options">
                              <li class="option">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png" class="option-img" alt="">
                                <span class="option-text">Bitcoin 1</span>
                              </li>
                              <li class="option">
                               <img src="https://www.creativefabrica.com/wp-content/uploads/2021/06/13/Cryptocurrency-Bitcoin-Logo-BNW-Graphics-13353111-1.jpg" class="option-img" alt="">
                                <span class="option-text">Bitcoin 2</span>
                              </li>
                              <li class="option">
                                <img src="https://s3.cointelegraph.com/uploads/2022-06/6fde082d-c08a-4540-af9a-6d8448ea2cd8.png" class="option-img" alt="">
                                <span class="option-text">Bitcoin 3</span>
                              </li>
                              <li class="option">
                               <img src="https://cdn-icons-png.flaticon.com/512/2473/2473354.png" class="option-img" alt="">
                                <span class="option-text">Bitcoin 4</span>
                              </li>
                            </ul> -->

                        </div>
                    </div>
                    <div class="home_calculator_chcbox">
                        <input type="checkbox" name="" id="inp">
                        <label class="mt-2" for="inp">Check your available balance.</label>
                    </div>
                </div>

                <div class="calculator_right_side">
                    <label class="text-white mb-2" for="">You have</label>
                    <div class="money">
                        <input min="0" type="text" value="35000" name="" id="">
                        <select name="">
                            <option selected value="">USD</option>
                            <option selected value="">EUR</option>
                        </select>

                    </div>
                    <label class="text-white mt-3 mb-2" for="">You get</label>
                    <div>
                        <input min="0" type="text" value="$9.22" name="" id="">
                        <select name="">
                            <option selected value="">BTC</option>
                        </select>
                    </div>
                    <div class="home_payment_methods mt-2 d-flex align-items-center">
                        <h5 class="text-white mt-1">Payment:</h5>
                        <div class="d-flex align-items-center ms-1">
                            <img src="assets/img/payoneer.png" alt="">
                            <img class="" src="assets/img/paypal.png" alt="">
                            <img class="" src="assets/img/amazon.png" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div class="calculator_btn d-flex justify-content-center mt-4">
                <button>Payment Now</button>
            </div>
        </div>
    </section>
</template>