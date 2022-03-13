<template>
  <div class="mt-11">
    <!-- First List -->
    <div v-for="item in menuData" :key="item.name">
      <a href="/">
        <div class="flex flex-row gap-3 p-2 mt-0.5" :class="{ 'bg-gray-200': item.active }">
          <img :src="item.img" alt="board" class="w-4">
          <span class="antialiased font-normal roboto" :class="{'text-indigo-700': item.active}">{{ item.name }}</span>
        </div>
      </a>
    </div>
    <!-- First List End -->
    <hr class="bg-gray-400 h-0.5 my-3"/>
    <!-- Second List -->
    <div v-for="items in secondMenuList" :key="items.name">
      <a href="/">
        <div class="flex flex-row gap-3 p-2 mt-0.5" :class="{ 'bg-gray-200': items.active }">
          <img :src="items.img" alt="board" class="w-4">
          <span class="antialiased font-normal roboto"
                :class="{'text-indigo-700': items.active}">{{ items.name }}</span>
        </div>
      </a>
    </div>
    <!-- Second List End -->
  </div>
</template>

<script>
export default {
  name: "DashMenu",
  data: () => {
    return {
      menuData: {
        0: {
          name: 'Kanban Board',
          img: require('@/assets/svg/tab.svg'),
          active: true
        },
        1: {
          name: 'Settings',
          img: require('@/assets/svg/settings.svg'),
          active: false
        }
      },
      secondMenuList: {
        0: {
          name: 'Filters',
          img: require('@/assets/svg/filter.svg'),
          active: false
        },
        1: {
          name: 'Upgrade Release',
          img: require('@/assets/svg/truck.svg'),
          active: true
        },
      }
    };
  }
}
</script>