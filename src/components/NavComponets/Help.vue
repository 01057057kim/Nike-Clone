<script setup></script>
<template>
    <div class="relative">
        <div class="absolute bg-white rounded-xl w-[240px] h-[280px] shadow-md">
            <div class="flex justify-start items-center h-full pl-4">
                <ul class="flex space-x-20">
                    <li>
                        <span class="mb-2 inline-block">Help</span>
                        <p><a href="">Order Status</a></p>
                        <p><a href="">Dispatch and Delivery</a></p>
                        <p><a href="">Returns</a></p>
                        <p><a href="">Contact Us</a></p>
                        <p><a href="">Privacy Policy</a></p>
                        <p><a href="">Terms of Sale</a></p>
                        <p><a href="">Terms of Use</a></p>
                        <p><a href="">Send Us Feedback</a></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
span {
    font-size: 18px;
    font-weight: 600; 
}

p {
    font-size: 14px;
    font-weight: 500;
    color: #000;
    opacity: 60%;
    margin-bottom: 5px;
}

p:hover {
    opacity: 100%;
}

</style>