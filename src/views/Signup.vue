<template>
  <AuthLayout>
    <AuthSignup />
  </AuthLayout>
</template>

<script>
import AuthLayout from "../components/auth/AuthLayout";
import AuthSignup from "@/components/auth/AuthSignup";
export default {
  name: "Signup",
  components: {
    AuthSignup,
    AuthLayout
  }
}
</script>