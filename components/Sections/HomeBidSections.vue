<template>
    <div v-for="(item,index) in 4" :key="index" class="home_bid_section">
                    <div class="">
                        <div>
                            <div class="bid_img">
                                <!-- <img src="" alt="img"> -->
                            </div>
                            <div class="">
                                <h4 class="text-white mt-3">NFT Killer- 2.0</h4>
                            </div>
                            <div class="d-flex bid_content align-items-center ">
                                <div class="current_bid">
                                    <img src="assets/img/bid_img.png" alt="">
                                </div>
                                <div class="current_bid_content ms-2">
                                    <span class="">Current Bid</span>
                                    <h5>2.39 ETH</h5>
                                </div>
                                <div class="ms-5 bid_label ">
                                    <input type="checkbox" name="" id="stock">
                                    <label class="text-white" for="stock">59 Stock</label>
                                </div>
                            </div>
                            <div class="bid_btn mt-3">
                                <button>Place Bid</button>
                            </div>
                        </div>
                    </div>


                </div>
</template>