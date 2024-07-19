<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ROUTE_NAMES } from './constants/ROUTE_NAMES'
import Button from 'primevue/button'

const router = useRouter()
const route = useRoute()

const onLogout = () => {
  localStorage.removeItem('token')
  router.push({
    name: ROUTE_NAMES.Login
  })
}
</script>

<template>
  <div class="bg-gray-50 min-h-[100vh]">
    <div class="container mx-auto px-1 py-3">
      <header
        class="flex items-center rounded-xl bg-white h-16 px-4"
        v-if="route.name !== ROUTE_NAMES.Login"
      >
        <h1 class="font-bold text-2xl">Company</h1>

        <div class="ml-10 flex items-center gap-4">
          <RouterLink :to="{ name: ROUTE_NAMES.Blocks }" class="uppercase font-bold text-gray-500"
            >Blocks</RouterLink
          >
          <RouterLink
            :to="{ name: ROUTE_NAMES.Transactions }"
            class="uppercase font-bold text-gray-500"
            >Transactions</RouterLink
          >
        </div>

        <Button
          label="Logout"
          icon="pi pi-sign-out"
          severity="contrast"
          size="small"
          class="ml-auto"
          @click="onLogout"
        />
      </header>

      <main class="mt-10">
        <RouterView v-slot="{ Component }">
          <Transition name="fade">
            <Component :is="Component" />
          </Transition>
        </RouterView>
      </main>
    </div>
  </div>
</template>

<style>
.router-link-active,
.router-link-exact-active {
  @apply text-black;
}
</style>
