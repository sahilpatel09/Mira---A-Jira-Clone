<template>
  <div class="">
    <aside class="block z-50 fixed top-0 left-0 overflow-hidden h-screen w-20 bg-asidecolor transition duration-150">
      <div class="pt-5 flex flex-col justify-center items-center">
        <img src="../assets/logo-white.png" alt="" class="w-12">
        <img src="../assets/search.png" alt="" class="mt-9 w-12">
        <img src="../assets/plus.png" alt="" class="w-12 ml-2">
      </div>
    </aside>
    <div class="z-49 w-64 fixed absolute top-0 ml-20 bg-gray-200 h-screen px-5 pt-6">

      <div class="flex flex-row items-center gap-2">
        <DashIcon />
        <div>
          <h2 class="font-semibold text-lg">Mira 2.0</h2>
          <p class="text-xs">Software Project</p>
        </div>
      </div>

<!--      <div class="">-->
<!--        <buton>-->
<!--          <i></i>-->
<!--        </buton>-->
<!--      </div>-->

    </div>

    <div class=" top-0 right-0 ml-84 bg-white ml-80 px-5 pt-6 px-14">
      <BoradHeader />
      <div class="mt-4 flex flex-row gap-4">
          <FeatureMeta />
      </div>
      <div class="flex flex-row items-start gap-5 mt-6 justify-between">
        <IssueBox />
        <IssueBox />
        <IssueBox />
        <IssueBox />
      </div>
    </div>


  </div>
</template>
<script>
import DashIcon from "@/components/dashboard/DashIcon";
import BoradHeader from "@/components/dashboard/BoradHeader";
import FeatureMeta from "@/components/dashboard/FeatureMeta";
import IssueBox from "@/components/dashboard/IssueBox";
export default {
  components: {BoradHeader, DashIcon, FeatureMeta, IssueBox}
}
</script>