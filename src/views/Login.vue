<template>
<AuthLayout>
  <AuthLogin />
</AuthLayout>
</template>

<script>
import AuthLayout from "@/components/auth/AuthLayout";
import AuthLogin from "@/components/auth/AuthLogin";
export default {
  name: "Login",
  components: {AuthLogin, AuthLayout}
}
</script>

<style scoped>

</style>