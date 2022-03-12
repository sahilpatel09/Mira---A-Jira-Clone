<template>
  <div class="w-96 mx-auto flex flex-col items-center md:shadow-md md:p-10 bg-white mx-auto">
    <p class="py-4 font-semibold text-sm text-center md:text-lg text-gray-600">Sign up for your account</p>
    <input type="text" placeholder="Email" class="w-full p-2 text-black rounded bg-gray-100 shadow focus:border-red-800 hover:bg-gray-300 transition duration-300" autofocus/>
    <p class="w-72 text-center py-4 text-sm text-gray-400">By signing up, I accept the Atlassian Cloud Terms of Service and acknowledge the Privacy Policy.</p>
    <button class="w-full py-2 bg-indigo-700 text-white font-semibold">Sign up</button>
    <p class="text-center text-sm py-3">OR</p>

    <div class="flex flex-row items-center rounded justify-center gap-3 shadow-md py-2 mt-2  w-full">
      <img class="w-6 ml-2" src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.321/static/media/google-logo.e086107b.svg" alt="">
      <h4 class="text-base w-full text-center font-semibold">Continue with Google</h4>
    </div>

    <div class="flex flex-row items-center justify-center gap-3 shadow-md py-2 mt-2  w-full">
      <img class="w-6 ml-2" src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.321/static/media/microsoft-logo.42b61fa1.svg" alt="">
      <h4 class="text-base w-full text-center font-semibold">Continue with Microsoft</h4>
    </div>

    <div class="flex flex-row items-center justify-center gap-3 shadow-md py-2 my-2 w-full">
      <img class="w-6 ml-2" src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.321/static/media/apple-logo.4f2453fb.svg" alt="">
      <h4 class="text-base w-full text-center font-semibold">Continue with Apple</h4>
    </div>

    <div class="flex flex-row items-center justify-center gap-3 shadow-md py-2 my-2 w-full">
      <img class="w-6 ml-2" src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.321/static/media/slack-logo.0390f069.svg" alt="">
      <h4 class="text-base w-full text-center font-semibold">Continue with Slack</h4>
    </div>
    <hr style="border: 1px solid hsl(0deg 0% 100% / 16%);"/>
    <p class="text-center text-indigo-500 my-3">Already have an account? Log in.</p>
  </div>
</template>

<script>
export default {
  name: "AuthSignup"
}
</script>

<style scoped>

</style>