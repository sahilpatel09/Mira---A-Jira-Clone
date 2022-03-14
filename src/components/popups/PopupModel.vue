<template>
  <div class="popup mx-auto">
    <div class="popupinner w-2/3 bg-white p-8 mx-40 rounded">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupModel"
}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>