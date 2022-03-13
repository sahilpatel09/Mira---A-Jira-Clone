<template>
  <form method="GET">
    <div class="relative text-gray-600 focus-within:text-gray-700">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-5 h-5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" class="py-2 text-sm text-black bg-gray-200 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off">
    </div>
  </form>
  
  <div class="flex flex-row">
    <div class="inline-block border-2 rounded-full hover:border-indigo-800 hover:-mt-8 w-10">
      <img src="https://i.ibb.co/6RJ5hq6/gaben.jpg" alt="" class="rounded-full">
    </div>

    <div class="inline-block border-2 rounded-full hover:border-indigo-800 hover:-mt-8 w-10">
      <img src="https://i.ibb.co/6RJ5hq6/gaben.jpg" alt="" class="rounded-full">
    </div>

    <div class="inline-block border-2 rounded-full hover:border-indigo-800 hover:-mt-8 w-10">
      <img src="https://i.ibb.co/6RJ5hq6/gaben.jpg" alt="" class="rounded-full">
    </div>

  </div>
  
  <button class="text-gray-700 hover:bg-gray-200 px-4">Only My Issues</button>
  <button class="text-gray-700 hover:bg-gray-200 px-4">Recently Updated</button>
</template>

<script>
export default {
  name: "FeatureMeta"
}
</script>

<style scoped>

</style>