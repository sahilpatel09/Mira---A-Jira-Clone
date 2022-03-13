<template>
  <div class="w-full bg-gray-100 py-2">
    <h2 class="antialiased text-gray-700 font-medium text-sm py-1 pl-3">{{ title.toUpperCase() }}</h2>
    <div v-for="item in data" :key="item.id">
      <IssueCard :title="item.title"/>
    </div>
  </div>
</template>

<script>
import IssueCard from "@/components/dashboard/IssueCard";

export default {
  name: "IssueBox",
  components: {
    IssueCard
  },
  props: {
    title: String,
    data: Array,
  },
  data() {
    return {};
  }
}
</script>

<style scoped>

</style>