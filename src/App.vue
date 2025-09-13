<template>
  <div id="app">
    <!-- Navigation Header -->
    <header class="bg-blue-400 shadow-lg">
      <div class="container mx-auto lg:max-w-(--breakpoint-lg) px-3 md:px-6 py-4">
        <div class="flex items-center gap-3">
          <div class="text-white text-2xl">🎯</div>
          <h1 class="text-white text-2xl font-bold">抽獎囉！</h1>
          <nav class="ml-6">
            <router-link 
              to="/" 
              class="text-white hover:text-blue-200 mr-4 font-medium transition-colors"
              active-class="underline"
            >
              自訂抽獎模式
            </router-link>
            <router-link 
              to="/restaurant" 
              class="text-white hover:text-blue-200 font-medium transition-colors"
              active-class="underline"
            >
              今天要吃什麼
            </router-link>
          </nav>
        </div>
      </div>
    </header>

    <!-- Router Content -->
    <router-view />

    <!-- Footer -->
    <footer class="bg-gray-800 text-white mt-auto">
      <div class="container mx-auto lg:max-w-(--breakpoint-lg) px-3 md:px-6 py-8">
        <div class="text-center">
          <div class="flex items-center justify-center gap-2 mb-4">
            <div class="text-2xl">🎯</div>
            <h3 class="text-xl font-bold">Prize Draw</h3>
          </div>
          <p class="text-gray-400 text-sm mb-6">
            The ultimate tool for fair and exciting prize drawings. Create your list, draw winners, and celebrate!
          </p>
          <p class="text-gray-400 text-sm">
            © 2025 Prize Draw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Global styles */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
}
</style>