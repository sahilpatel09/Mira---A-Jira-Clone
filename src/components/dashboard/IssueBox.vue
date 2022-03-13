<template>
  <div class="w-full bg-gray-100 py-2">
    <h2 class="antialiased text-gray-900 font-semibold py-1 pl-3">BACKLOG 2.0</h2>
    <IssueCard/>
  </div>
</template>

<script>
import IssueCard from "@/components/dashboard/IssueCard";

export default {
  name: "IssueBox",
  components: {
    IssueCard
  }

}
</script>

<style scoped>

</style>