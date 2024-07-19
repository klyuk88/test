<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { useAPIGetBlock } from '@/composables/useAPIGetBlock'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useDateFormat, useClipboard } from '@vueuse/core'
import { unref } from 'vue'

const route = useRoute()
const { data, isFetching, error } = useAPIGetBlock(Number(route?.params?.seqno))

const block = computed(() => {
  return data.value?.block
})

const { copy: rootHashCopy, copied: rootHashCopied } = useClipboard({
  source: block.value?.root_hash
})
const { copy: fileHashCopy, copied: fileHashCopied } = useClipboard({
  source: block.value?.file_hash
})
</script>

<template>
  <div>
    <h1 class="font-bold text-3xl">Block detail {{ route?.params?.seqno }}</h1>

    <div v-if="error"></div>

    <div v-else>
      <div class="mt-5 rounded-lg overflow-hidden">
        <div class="bg-white grid grid-cols-1">
          <div
            class="h-14 px-4 border-b border-b-gray-100 grid grid-cols-[300px_1fr] content-center"
          >
            <div>
              <p class="font-bold">Generated at</p>
            </div>
            <div>{{ unref(useDateFormat(block?.timestamp, 'YYYY-MM-DD HH:mm:ss')) }}</div>
          </div>

          <div
            class="h-14 px-4 border-b border-b-gray-100 grid grid-cols-[300px_1fr] content-center"
          >
            <div>
              <p class="font-bold">Seqno</p>
            </div>
            <div>{{ block?.seqno }}</div>
          </div>

          <div
            class="h-14 px-4 border-b border-b-gray-100 grid grid-cols-[300px_1fr] content-center"
          >
            <div>
              <p class="font-bold">Workchain</p>
            </div>
            <div>{{ block?.workchain }}</div>
          </div>

          <div
            class="h-14 px-4 border-b border-b-gray-100 grid grid-cols-[300px_1fr] content-center"
          >
            <div>
              <p class="font-bold">Root hash</p>
            </div>
            <div class="flex items-center gap-2">
              <p>{{ block?.root_hash }}</p>

              <div v-if="block?.root_hash">
                <span class="pi pi-check cursor-pointer" v-if="rootHashCopied"></span>
                <span
                  class="pi pi-clipboard cursor-pointer"
                  v-else
                  @click="rootHashCopy(block?.root_hash)"
                ></span>
              </div>
            </div>
          </div>

          <div
            class="h-14 px-4 border-b border-b-gray-100 grid grid-cols-[300px_1fr] content-center"
          >
            <div>
              <p class="font-bold">File hash</p>
            </div>
            <div class="flex items-center gap-2">
              <p>{{ block?.file_hash }}</p>

              <div v-if="block?.file_hash">
                <span class="pi pi-check cursor-pointer" v-if="fileHashCopied"></span>
                <span
                  class="pi pi-clipboard cursor-pointer"
                  v-else
                  @click="fileHashCopy(block?.file_hash)"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <h2 class="font-bold text-lg mb-2">Shards</h2>
        <div class="rounded-lg overflow-hidden">
          <DataTable :value="block?.shards" tableStyle="min-width: 50rem" :loading="isFetching">
            <Column field="workchain" header="Workchain"></Column>
            <Column field="seqno" header="Seqno"></Column>
            <Column field="processed" header="Processed"></Column>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>
