<script setup>
import Guides from './NavComponets/Guides.vue';
import { ref } from 'vue';

const activeDropdown = ref(null);

const showDropdown = (menu) => {
    activeDropdown.value = menu;
};

const hideDropdown = () => {

    setTimeout(() => {
        const isOverDropdown = document.querySelector('.dropdown-menu:hover');
        if (!isOverDropdown) {
            activeDropdown.value = null;
        }
    }, 50);
};
</script>

<template>
    <div class="relative">
        <div
            class="group relative overflow-hidden transition-all duration-500 ease-in-out h-[25vh] hover:h-auto bg-white">
            <div class="flex justify-center items-start h-full px-4 md:px-10 transition-all duration-500">
                <ul class="flex space-x-20">
                    <li class="space-y-4">
                        <span class="mb-8 inline-block text-[1rem] font-medium">Shoes</span>
                        <p>Black Running Shoes</p>
                        <p>White Running Shoes</p>
                        <p>Nike P-6000</p>
                        <p>Nike Initator</p>
                        <p>V2K Run Trainers</p>
                        <p>Nike Shox</p>
                        <p>Nike Waffle Trainers</p>
                        <p>Nike Cortez</p>
                        <p>Nike Vomero</p>
                        <p>Black Trainers</p>
                        <p>Nike Motiva Shoes</p>
                    </li>
                    <li class="space-y-4">
                        <span class="mb-8 inline-block text-[1rem] font-medium">Clothing</span>
                        <p>Yoga Trousers</p>
                        <p>Tech Fleece Joggers</p>
                        <p>Tech Fleece</p>
                    </li>
                    <li class="space-y-4">
                        <span class="mb-8 inline-block text-[1rem] font-medium">Kids</span>
                        <p>Girls' Black Shoes</p>
                        <p>Kids' Black Shoes</p>
                    </li>
                    <li class="space-y-4">
                        <span class="mb-8 inline-block text-[1rem] font-medium">Featured</span>
                        <p>Football Club Teams</p>
                        <p>Football</p>
                        <p>Nike England</p>
                        <p>Nike Run Club</p>
                        <p>Nike Training Club</p>
                        <p>Gift Ideas</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bg-white w-full h-auto px-4 md:px-10 py-10 mt-10 footer-links z-10">
            <hr class="mb-12 opacity-10">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div class="space-y-3 text-[14px]">
                    <span class="mb-6 inline-block text-[1rem] font-medium">Resources</span>
                    <p>Find a Store</p>
                    <p>Nike Journal</p>
                    <p>Become a Member</p>
                    <p>Feedback</p>
                    <p>Promo Codes</p>
                </div>

                <div class="space-y-3 text-[14px]">
                    <span class="mb-6 inline-block text-[1rem] font-medium">Help</span>
                    <p>Get Help</p>
                    <p>Order Status</p>
                    <p>Shipping and Delivery</p>
                    <p>Returns</p>
                    <p>Payment Options</p>
                    <p>Contact Us</p>
                    <p>Reviews</p>
                </div>

                <div class="space-y-3 text-[14px]">
                    <span class="mb-6 inline-block text-[1rem] font-medium">Company</span>
                    <p>About Nike</p>
                    <p>News</p>
                    <p>Careers</p>
                    <p>Investors</p>
                    <p>Sustainability</p>
                    <p>Purpose</p>
                    <p>Report a concern</p>
                </div>

                <div class="text-right md:text-right mt-2 md:mt-0 cursor-pointer">
                    <div class="flex items-center justify-end gap-1 opacity-60">
                        <svg aria-hidden="true" class="css-npy3on" focusable="false" viewBox="0 0 24 24" role="img"
                            width="16px" height="16px" fill="none">
                            <path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5"
                                d="M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25">
                            </path>
                        </svg>
                        <span class="inline-block font-medium">Canada</span>
                    </div>
                </div>
            </div>
            <div class="my-20 flex gap-6">
                <p>© 2025 Nike, Inc. All rights reserved</p>
                <div  class="flex items-center">
                        <p class="hover:opacity-50 " @mouseenter="showDropdown('guides')" @mouseleave="hideDropdown">Guides
                        </p>
                         <svg aria-hidden="true" class="summary-caret" focusable="false" viewBox="0 0 24 24" role="img"
                        width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5" d="M17.5 9.25l-5.5 5.5-5.5-5.5"></path>
                    </svg>
                        <div v-if="activeDropdown === 'guides'" @mouseenter="showDropdown('guides')"
                            @mouseleave="hideDropdown"
                            class="dropdown-menu relative translate-y-[-170px] translate-x-[-80px] z-100">
                            <Guides />
                        </div>
                    </div>
                <p>Terms of Use</p>
                <p>Terms of Sale</p>
                <p>Company Details</p>
                <p>Privacy Policy</p>
                <p>Privacy & Cookies Settings</p>
            </div>
        </div>

    </div>
</template>


<style scoped>
.footer-links p {
    font-size: 14px;
    color: #000;
    opacity: 60%;
    font-weight: 500;
    cursor: pointer;
}

.footer-links p:hover {
    color: #000;
    opacity: 100%;
}

p {
    cursor: pointer;
    color: #000;
    opacity: 60%;
    font-weight: 500;
    font-size: 1rem;
}

p:hover {
    color: #000;
    opacity: 100%;
}
</style>