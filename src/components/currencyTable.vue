<template>
  <div class="card w-full">
    <div class="card-body">
      <div class="overflow-x-auto shadow-lg">
        <table class="table w-full table-normal">
          <!-- head -->
          <thead>
            <tr class="grid md:grid-cols-5 grid-cols-2 items-center py-4">
              <th># name</th>
              <th>
                <div
                  class="tooltip tooltip-primary"
                  data-tip="Current price of currency"
                >
                  Price
                </div>
              </th>
              <th class="hidden md:block">
                <div
                  class="tooltip tooltip-primary"
                  data-tip="Changes in the last 1 hours"
                >
                  1h
                </div>
              </th>
              <th class="hidden md:block">
                <div
                  class="tooltip tooltip-primary"
                  data-tip="Changes in the last 24 hours"
                >
                  24h
                </div>
              </th>
              <th class="hidden md:block">last volume</th>
            </tr>
          </thead>
          <tbody>
            <!-- rows -->
            <tr
              class="grid md:grid-cols-5 grid-cols-2 items-center"
              v-for="(item, index) in currencies"
              :key="item.id"
            >
              <td class="py-1 px-0">
                <div class="flex items-center">
                  <th>{{ index + 1 }}</th>
                  <i class="hidden lg:block"
                    ><img
                      class="w-8 h-8"
                      :src="item.imageUrl"
                      alt="symbol icon"
                  /></i>
                  <span class="mx-2 font-bold">{{ item.name }}</span>
                  {{ item.symbol }}
                </div>
              </td>
              <td>{{ item.price }}</td>
              <td class="hidden md:block">{{ item.changehour }}</td>
              <td class="hidden md:block">{{ item.changeDay }}</td>
              <td class="hidden md:block">{{ item.lastVolume }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  currencies: Object,
});
</script>

<style lang="scss" scoped></style>
