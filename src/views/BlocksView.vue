<script setup lang="ts">
import DataTable, { type DataTableRowSelectEvent } from 'primevue/datatable'
import Column from 'primevue/column'
import { computed } from 'vue'
import { useAPIGetBlocks } from '@/composables/useAPIGetBlocks'
import { useRouter } from 'vue-router'
import { ROUTE_NAMES } from '@/constants/ROUTE_NAMES'
import type { Block } from '@/types/block'

const { data, isFetching, error } = useAPIGetBlocks()
const router = useRouter()

const blocks = computed(() => {
  return data.value?.blocks
})

const onRowSelect = (d: DataTableRowSelectEvent) => {
  const b: Block = d.data
  router.push({ name: ROUTE_NAMES.BlockDetail, params: { seqno: b.seqno } })
}
</script>

<template>
  <div>
    <h1 class="font-bold text-3xl">Blocks</h1>
    <Transition name="fade" mode="out-in">
      <div v-if="error">
        <h2>Server Error</h2>
      </div>

      <div class="mt-5 rounded-lg overflow-hidden" v-else>
        <DataTable
          :value="blocks"
          tableStyle="min-width: 50rem"
          :loading="isFetching"
          selectionMode="single"
          :metaKeySelection="false"
          @rowSelect="onRowSelect"
        >
          <Column field="timestamp" header="Time"></Column>
          <Column field="root_hash" header="Hash"></Column>
          <Column field="seqno" header="Seqno"></Column>
        </DataTable>
      </div>
    </Transition>
  </div>
</template>
