<template>
  <div class="w-full bg-gray-100 pt-2 pb-4 max-h-full self-stretch">
    <h2 class="antialiased text-gray-700 font-medium text-sm py-1 pl-3">{{ title.toUpperCase() }}</h2>
    <div v-for="item in data" :key="item.id">
      <IssueCard :title="item.title" draggable="true" @dragstart="startDrag($event, item)"/>
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
  },
  methods: {
    startDrag (evt, item) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
      evt.dataTransfer.setData('item', item)

    },
  }

}
</script>

<style scoped>

</style>