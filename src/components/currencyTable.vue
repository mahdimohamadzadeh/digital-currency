<template>
  <div class="card w-full bg-white mt-6 h-1/2 md:h-auto">
    <div class="card-body">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th>#</th>
              <th>
                name
              </th>
              <th>
                Symbol
              </th>
              <th>
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- rows -->
            <tr v-for="body in tableDetail.body" :key="body.id">
              <th>{{ id }}</th>
              <td v-for="(name, index) in body.names" :key="index">
                {{ name }}
              </td>
              <td v-if="body.image">
                <img
                  class="w-10 h-10"
                  :src="require(`@/assets/images/${body.image.name}`)"
                  :alt="body.image.alt"
                />
              </td>
              <td v-for="checkBox in body.checkboxes">
                <div class="flex items-center mr-4">
                  <input
                    :id="checkBox.id"
                    type="checkbox"
                    v-model="checkBox.value"
                    :value="checkBox.value"
                    class="w-4 h-4 rounded-full checked:bg-accent"
                  />
                  <label
                    v-if="checkBox.value === false"
                    :for="checkBox.id"
                    class="badge badge-warning text-sm mr-1 font-medium"
                    >غیرفعال</label
                  >
                </div>
              </td>
              <td v-if="body.buttons">
                <button
                  v-for="btn in body.buttons"
                  class="btn ml-4 text-white"
                  :class="btn.color"
                >
                  <slot v-if="btn.id === 1" name="firstIcon"></slot>
                  <slot v-if="btn.id === 2" name="secondIcon"></slot>
                  <slot></slot>
                  {{ btn.name }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tableDetail"],
};
</script>

<style lang="scss" scoped></style>
