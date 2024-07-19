<script setup lang="ts">
import { ROUTE_NAMES } from '@/constants/ROUTE_NAMES'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const name = ref<string | null>(null)
const email = ref<string | null>(null)

const isDisabledBtn = computed(() => {
  return Boolean(!name.value || !email.value)
})

const router = useRouter()

const onLogin = () => {
  if (!isDisabledBtn.value) {
    router.push({ name: ROUTE_NAMES.Blocks })
    localStorage.setItem(
      'token',
      'Bearer 578691560fe2db0bc4f51f7b97025224ed1b8d7f56b3032e2d878f200b7ce27b'
    )
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="font-bold text-center text-2xl uppercase">Company</h1>

    <div class="max-w-[500px] w-[500px] border border-gray-300 rounded-lg bg-white p-4 mt-10">
      <h2 class="font-bold text-lg">Login</h2>

      <div class="grid grid-cols-1 gap-2 mt-2">
        <InputText type="text" v-model="name" placeholder="Name" />
        <InputText type="email" v-model="email" placeholder="Email" />
        <Button label="Submit" :disabled="isDisabledBtn" @click="onLogin" />
      </div>
    </div>
  </div>
</template>
