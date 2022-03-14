<template>
  <IssueBox @drop="onDrop($event, 1)" @dragover.prevent @dragenter.prevent title="Backlogs" :data="listOne"/>
  <IssueBox title="Selected for development" :data="listTwo" @drop="onDrop($event, 2)" @dragover.prevent @dragenter.prevent/>
  <IssueBox title="In Progress 2" :data="listThree" @drop="onDrop($event, 3)" @dragover.prevent @dragenter.prevent/>
  <IssueBox title="Done 2" :data="listFour" @drop="onDrop($event, 4)" @dragover.prevent @dragenter.prevent/>
</template>

<script>
import IssueBox from "@/components/dashboard/IssueBox";

export default {
  name: "IssueBoxContainer",
  components: {
    IssueBox
  },
  data: () => {
    return {

      items: [
        {
          id: 0,
          title: 'Try to drag this block into another block and see the dragging functionality.',
          list: 1
        },
        {
          id: 1,
          title: 'Another Issue with boring ideas.',
          list: 2
        },
        {
          id: 2,
          title: 'I hate clients nowadays. Do you hate them too?',
          list: 3
        },
        {
          id: 3,
          title: 'I do nothing.',
          list: 4
        },
        {
          id: 4,
          title: 'Another Issue with second column.',
          list: 2
        },

      ]


    };
  },
  computed: {
    listOne() {
      return this.items.filter(item => item.list === 1)
    },
    listTwo() {
      return this.items.filter(item => item.list === 2)
    },
    listThree() {
      return this.items.filter(item => item.list === 3)
    },
    listFour() {
      return this.items.filter(item => item.list === 4)
    },

  },
  methods: {
    onDrop(evt, list) {
      console.log(evt.dataTransfer.getData('itemID'), list);
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.items.find(item => item.id == itemID)
      item.list = list
    }
  }
}
</script>

<style scoped>

</style>