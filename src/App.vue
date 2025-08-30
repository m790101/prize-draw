
<template>
  <main
    class="container mx-auto lg:max-w-(--breakpoint-lg) pt-6 md:pt-10 pb-10 md:pb-48 px-3 md:px-6 min-h-screen"
  >
    <section class="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Add New Prize</h2>
      <div class="flex gap-4 mb-4">
        <input
          type="text"
          id="prizeInput"
          placeholder="Enter prize name..."
          class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          v-model="prizeInput"
        />
        <button
          class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
          @click="addPrize"
        >
          Add Prize
        </button>
      </div>
    </section>
    <section class="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-semibold text-gray-800">Prizes</h2>
        <span id="prizeCount" class="text-gray-500 text-sm"
          >{{ prizeTotalNum }} prizes</span
        >
      </div>
      <div id="prizesList" class="grid gap-3">
        <ul>
          <li v-for="(prize, index) in prizeList" :key="index">
            {{ prize }}
          </li>
        </ul>
        <p
          v-if="prizeList.length === 0"
          class="text-gray-500 text-center py-8"
          id="emptyMessage"
        >
          No prizes added yet. Add some prizes to get started!
        </p>
      </div>
    </section>

    <!-- Draw Section -->
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Draw Winner</h2>

      <!-- Draw Button -->
      <div class="text-center mb-6">
        <button
          v-if="!sessionReady"
          id="drawButton"
          @click="startSession"
          class="px-8 py-4 bg-gradient-to-r from-red-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="prizeList.length === 0"
        >
          press to start session
        </button>
        <button
          v-if="sessionReady"
          id="drawButton"
          @click="setWinner"
          class="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          🎲 Draw!
        </button>
        <p class="text-sm text-gray-500 mt-2">Need at least 1 prize to draw</p>
      </div>

      <!-- Winner Display -->
      <div v-if="winner" id="winnerSection" class="">
        <div
          class="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 rounded-lg p-6 text-center"
        >
          <h3 class="text-xl font-bold text-gray-800 mb-2">🎊 Winner! 🎊</h3>
          <div
            id="winnerDisplay"
            class="text-2xl font-bold text-green-600 mb-4"
          >
            {{ winner }}
          </div>
          <p class="px-4 py-2 rounded-lg">press draw button to draw next one</p>
        </div>
      </div>
    </div>
  </main>
</template>



<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
import { setPrizeList, drawWinner } from "@/api/drawApi.js";


onMounted(async () => {});

const prizeInput = ref("");
const prizeList = ref([]);
const sessionReady = ref(false);
const winner = ref("");
const sessionId = ref("")

const addPrize = () => {
  prizeList.value.push(prizeInput.value);
  prizeInput.value = ""
};
const startSession = async() => {
  sessionReady.value = true;
  const result = await setPrizeList({names:prizeList.value})
  if(result?.status == "200"){
    sessionId.value = result.data.id
  }
};

const setWinner = async() => {
  console.log("draw winner");
  const result = await drawWinner({uId:sessionId.value})
  if(result?.status == "200"){
    winner.value = result.data.name
  } else {
    alert("error"+ result?.message)
    reset()
  }
};

const reset = ()=>{
  winner.value = ""
  sessionReady.value = false
  sessionId.value = ""
  prizeInput.value = ""
  prizeList.value = []
}

const prizeTotalNum = computed(() => {
  return prizeList.value.length;
});
</script>

