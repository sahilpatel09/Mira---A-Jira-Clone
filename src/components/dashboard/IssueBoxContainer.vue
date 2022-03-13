<template>
  <IssueBox title="Backlogs" :data="listOne"/>
  <IssueBox title="Selected for development" :data="listTwo"/>
  <IssueBox title="In Progress 2" :data="listThree"/>
  <IssueBox title="Done 2" :data="listFour"/>
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
          title: 'Item A',
          list: 1
        },
        {
          id: 1,
          title: 'Item B',
          list: 2
        },
        {
          id: 2,
          title: 'Item C',
          list: 3
        },
        {
          id: 3,
          title: 'Item C',
          list: 4
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

  }
}
</script>

<style scoped>

</style>