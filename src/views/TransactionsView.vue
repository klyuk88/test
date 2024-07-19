<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { computed } from 'vue'
import { useAPIGetTransactions } from '@/composables/useAPIGetTransactions'

const { data, isFetching, error } = useAPIGetTransactions()

const transactions = computed(() => {
  return data.value?.messages
})
</script>

<template>
  <div>
    <h1 class="font-bold text-3xl">Transactions</h1>
    <Transition name="fade" mode="out-in">
      <div v-if="error">
        <h2>Server Error</h2>
      </div>

      <div class="mt-5 rounded-lg overflow-hidden" v-else>
        <DataTable
          :value="transactions"
          tableStyle="min-width: 50rem"
          :loading="isFetching"
          selectionMode="single"
          :metaKeySelection="false"
        >
          <Column field="account" header="Account"></Column>
          <Column field="hash" header="Hash"></Column>
          <Column field="address" header="Address"></Column>
          <Column field="fee" header="Fee"></Column>
        </DataTable>
      </div>
    </Transition>
  </div>
</template>
