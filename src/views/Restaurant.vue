<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
            🍽️ 今天要吃什麼？
        </h1>
      </div>

      <!-- Draw Button -->
      <div class="text-center mb-12" v-if="!isDrawing && !showResults">
        <button
          @click="startDraw"
          class="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          🎲 按我抽餐廳囉!（目前只限定台北大安區） 
        </button>
      </div>

      <!-- Drawing Animation -->
      <div v-if="isDrawing" class="text-center mb-12">
        <div class="inline-block">
          <div
            class="animate-spin rounded-full h-16 w-16 border-4 border-orange-500 border-t-transparent mx-auto mb-4"
          ></div>
          <p class="text-lg text-gray-600 animate-pulse">
            尋找中
          </p>
        </div>
      </div>

      <!-- Restaurant Cards -->
      <div v-if="showResults" class="space-y-8">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            吃爆!! 🎉
          </h2>
          <button
            @click="resetDraw"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
          >
          再抽一次
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(restaurant, index) in restaurants"
            :key="index"
            class="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            <!-- Restaurant Info -->
            <div class="p-6">
              <section class="min-h-[50px]">
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  {{ restaurant.name }}
                </h3>
              </section>
              <p class="text-gray-600 mb-3">{{ restaurant.description }}</p>
              <!-- Rating -->
              <div class="flex items-center mb-3">
                <div class="flex text-yellow-400">
                  <span v-for="n in 5" :key="n" class="text-lg">
                    {{ n <= restaurant.rating ? "⭐" : "☆" }}
                  </span>
                </div>
                <span class="ml-2 text-gray-600"
                  >({{ restaurant.rating }}/5)</span
                >
              </div>

              <div
                class="flex justify-between items-center text-sm text-gray-600 mb-4"
              >地址：{{restaurant.address}}</div>

              <!-- Action Button -->
              <button
                @click="selectRestaurant(restaurant)"
                class="w-full bg-green-700 hover:bg-green-300 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                點我進 google map 看看 🎯
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Selected Restaurant Modal -->
      <div
        v-if="selectedRestaurant"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      >
        <div
          class="bg-white rounded-xl p-8 max-w-md w-full transform animate-pulse"
        >
          <div class="text-center">
            <span class="text-6xl mb-4 block">{{
              selectedRestaurant.emoji
            }}</span>
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Great Choice!</h3>
            <p class="text-lg text-gray-600 mb-4">
              You selected {{ selectedRestaurant.name }}!
            </p>
            <button
              @click="closeModal"
              class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Awesome! 🎉
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { drawRestaurants } from "../api/restaurant";
export default {
  name: "Restaurant",
  data() {
    return {
      isDrawing: false,
      showResults: false,
      selectedRestaurant: null,
      restaurants: [],
    };
  },
  methods: {
    async startDraw() {
      this.isDrawing = true;
      this.showResults = false;
      const result = await drawRestaurants();
      console.log("result", result);

      if (result?.status == "200") {
        this.restaurants = result.data.restaurants;
      } else {
        alert("error" + result?.message);
      }

      this.isDrawing = false;
      this.showResults = true;
    },
    selectRestaurant(restaurant) {
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${restaurant.name}&query_place_id=${restaurant.placeId}`;
      window.open(mapsUrl, "_blank");
    },
    closeModal() {
      this.selectedRestaurant = null;
    },

    resetDraw() {
      this.showResults = false;
      this.restaurants = [];
      this.selectedRestaurant = null;
      this.startDraw();
    },
  },
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>