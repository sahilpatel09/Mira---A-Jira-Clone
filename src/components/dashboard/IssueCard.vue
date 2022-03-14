<template>
  <div class="bg-white mx-1.5 px-2 py-4 my-1">
    <p class="text-sm">{{ title }}</p>
    <div class="flex flex-row justify-between items-center mt-3">
      <div class="flex flex-row gap-2">
        <input type="checkbox" checked/>
        <img src="../../assets/svg/down-arrow.svg" alt="" class="w-3" size="200">

      </div>
      <img src="https://i.ibb.co/6RJ5hq6/gaben.jpg" alt="" class="rounded-full w-6">
    </div>
  </div>
</template>

<script>
export default {
  name: "IssueCard",
  props: {
    title: String
  },
  mounted() {
    console.log(this.title)
  }
}
</script>

<style scoped>

</style>