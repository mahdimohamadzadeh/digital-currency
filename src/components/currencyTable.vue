<template>
  <div class="card w-full">
    <div class="card-body">
      <div class="overflow-x-auto shadow-lg">
        <table class="table w-full table-normal">
          <!-- head -->
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>
                <div
                  class="tooltip tooltip-primary my-4"
                  data-tip="Current price of currency"
                >
                  Price
                </div>
              </th>
              <th>
                <div
                  class="tooltip tooltip-primary my-4"
                  data-tip="Changes in the last 1 hours"
                >
                  1h
                </div>
              </th>
              <th>
                <div
                  class="tooltip tooltip-primary my-4"
                  data-tip="Changes in the last 24 hours"
                >
                  24h
                </div>
              </th>
              <th>market</th>
            </tr>
          </thead>
          <tbody>
            <!-- rows -->
            <tr v-for="(item, index) in currencies" :key="item.id">
              <th>{{ index + 1 }}</th>
              <td>
                <div class="flex w-1/2 items-center">
                  <i
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
              <td>{{ item.changehour }}</td>
              <td>{{ item.changeDay }}</td>
              <td>{{ item.market }}</td>
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
