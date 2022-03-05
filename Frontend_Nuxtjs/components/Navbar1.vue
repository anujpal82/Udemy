<!-- Please remove this file from your project -->
<template>
  <div class="relative z-10">
    <!-- <div class="w-64 bg-purple-700 h-screen left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">dgdgg</div> -->
    <div>
      <nav
        class="w-80 bg-yellow-50 h-screen absolute p-6 text-xl transform -translate-x-full z-50 transition-all"
        id="mobileMenu"
      >
        <div class="inline">
          <span
            class="float-end z-50 cursor-pointer rounded-full inline"
            @click="openMobileMenu"
            ><fa class="text-2xl ml-64" icon="times"
          /></span>
        </div>
        <a class="block p-2" href="">Web Developement </a
        ><a class="block p-2" href="">Mobile Developement</a
        ><a class="block p-2" href="">Game Developement</a
        ><a class="block p-2" href="">Digital Marketing</a>
      </nav>
      <!-- The navbar which shows above the tablet screen size -->
      <div
        class="hidden md:flex justify-between items-center px px-6 py-3 shadow-md"
      >
        <img
          height="34px"
          width="91px"
          :src="require('../assets/logos/logo-udemy.svg')"
        />
        <a class="relative" @mouseenter="mouseEnter" id="" href=""
          >Categories
          <div
            @mouseenter="mouseEnter"
            @mouseleave="mouseLeave"
            v-show="toShowOnHover"
            class="absolute w-64 bg-gray-50 border shadow-md h-auto top-14 categoriesMenu"
          >
            <ul class="relative p-5" @mouseenter="mouseEnter1">
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text-purple-500"
                >
                  <span>Devlopement</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text hover:text-purple-500"
                >
                  <span>Business</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text hover:text-purple-500"
                >
                  <span>Finance & Accounting</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text hover:text-purple-500"
                >
                  <span>IT & Software</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text hover:text-purple-500"
                >
                  <span>Office Productivity</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text hover:text-purple-500"
                >
                  <span>Personal Developmentt</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text hover:text-purple-500"
                >
                  <span>Design</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text hover:text-purple-500"
                >
                  <span>Marketing</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text hover:text-purple-500"
                >
                  <span>Lifestyle</span
                  ><span
                    ><fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text hover:text-purple-500"
                >
                  <span>Photography & Video</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text hover:text-purple-500"
                >
                  <span>Health & Fitness</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text hover:text-purple-500"
                >
                  <span>Music</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text hover:text-purple-500"
                >
                  <span>Teaching & Academics</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
            </ul>
          </div>
          <div
            class="absolute left-64 w-64 top-14"
            v-show="toShowOnHover1"
            @mouseenter="mouseEnter1"
            @mouseleave="mouseLeave1"
          >
            <ul
              class="bg-gray-50 border shadow-md p-5"
              @mouseenter="mouseEnter2"
            >
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text-purple-500"
                >
                  <span>ement</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text-purple-500"
                >
                  <span>ement</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text-purple-500"
                >
                  <span>ement</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text-purple-500"
                >
                  <span>ement</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text-purple-500"
                >
                  <span>ement</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
            </ul>
          </div>
          <div
            style="left: 32rem"
            class="absolute top-14 w-64"
            v-show="toShowOnHover2"
            @mouseenter="mouseEnter2"
            @mouseleave="mouseLeave2"
          >
            <ul class="p-5 bg-gray-50 border shadow-md">
              <li class="py-3">
                <div
                  @click.prevent="getValueOfNode"
                  class="flex justify-between fghf items-center hover:text hover:text-purple-500"
                >
                  <span>Business</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text hover:text-purple-500"
                >
                  <span>Business</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text hover:text-purple-500"
                >
                  <span>Business</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
              <li class="py-3">
                <div
                  class="flex justify-between items-center hover:text hover:text-purple-500"
                >
                  <span>Business</span
                  ><span>
                    <fa class="text-md font-thin" icon="angle-right"
                  /></span>
                </div>
              </li>
            </ul>
          </div>
        </a>

        <input
          class="border outline-none p-5 border-black w-3/12 xl:w-5/12 xxl:w-6/12 xxxl:w-7/12 rounded-full h-14"
          type="text"
          placeholder="Search for anything"
        />
        <a class="hidden xxxl:block" href="">Udemy Business</a>
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
        <div class="flex justify-between px-5 py-3 items-center md:hidden">
          <span
            @click="openMobileMenu"
            id="hamBurgerMenu"
            class="cursor-pointer"
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

/* .categories :hover .categoriesMenu {
  display: none !important;
} */
</style>
<script>
import $ from "jquery";
export default {
  data: function () {
    return {
      toShowOnHover: false,
      toShowOnHover1: false,
      toShowOnHover2: false,
    };
  },
  methods: {
    // mouseEnter: function () {
    //   this.toShowOnHover = !this.toShowOnHover;
    //   alert("me1");
    // },
    // mouseLeave: function () {
    //   this.toShowOnHover = false;
    //   this.toShowOnHover1 = false;
    //   this.toShowOnHover2 = false;
    // },
    // mouseEnter1: function () {
    //   this.toShowOnHover1 = true;
    //   this.toShowOnHover = true;
    //   alert("me2");
    // },
    // mouseLeave1: function () {
    //   this.toShowOnHover1 = false;
    //   this.toShowOnHover = false;
    //   this.toShowOnHover2 = false;
    // },
    // mouseEnter2: function () {
    //   this.toShowOnHover1 = true;
    //   this.toShowOnHover = true;
    //   this.toShowOnHover2 = true;
    // },
    // mouseLeave2: function () {
    //   this.toShowOnHover1 = false;
    //   this.toShowOnHover = false;
    //   this.toShowOnHover2 = false;
    //   console.log("Hiii");
    // },
    getValueOfNode() {
      alert("Hii");
    },
    openMobileMenu() {
      var element = document.getElementById("mobileMenu");
      element.classList.toggle("-translate-x-full");
    },
  },
};
</script>
