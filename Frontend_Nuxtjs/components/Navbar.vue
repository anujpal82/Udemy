<!-- Please remove this file from your project -->
<template>
  <div class="relative">
    <!-- <div class="w-64 bg-purple-700 h-screen left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">dgdgg</div> -->
    <div>
      <!-- The navbar which shows above the tablet screen size -->
      <div
        class="hidden tablet:flex justify-between items-center px px-6 py-3 shadow-md"
      >
        <img
          height="34px"
          width="91px"
          :src="require('../assets/logos/logo-udemy.svg')"
        />
        <a href="">Categories</a>

        <input
          class="border outline-none p-5 border-black w-5/12 rounded-full h-12"
          type="text"
          placeholder="Search for anything"
        />
        <a href="">Udemy Business</a>
        <a href="">Teach On Udemy</a>
        <span><fa class="text-2xl" icon="shopping-cart" /></span>
        <button
          class="border-black border px-6 font-bold py-2 hover:bg-gray-100"
        >
          Log in
        </button>
        <button class="px-5 font-bold py-2 bg-black text-white">Sign Up</button>
        <button class="border border-black px-2 py-1">
          <fa class="text-2xl" icon="futbol" />
        </button>
      </div>
      <!-- The navbar which shows in small screen size -->
      <div>
        <div class="flex justify-between px-5 py-3 items-center tablet:hidden">
          <span class="cursor-pointer"
            ><fa class="text-2xl" icon="bars"
          /></span>
          <img
            height="34px"
            width="91px"
            :src="require('../assets/logos/logo-udemy.svg')"
          />
          <div class="">
            <span><fa class="text-xl ml-5" icon="search" /></span
            ><span> <fa class="text-xl ml-5" icon="shopping-cart" /></span>
          </div>
        </div>
      </div>
      <!-- Sidebar for the small screen -->
    </div>
  </div>
</template>
<style>
* {
  font-size: 14px;
}
</style>
<script>
export default {};
</script>
