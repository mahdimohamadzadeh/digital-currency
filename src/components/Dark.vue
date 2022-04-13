<template>
  <div>
    <div
      class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
    >
      <input
        @click="darkmode = !darkmode"
        type="checkbox"
        name="toggle"
        id="toggle"
        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
      />
      <label
        for="toggle"
        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      ></label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dark",
  data() {
    return {
      darkmode: false,
    };
  },
};
</script>

<style>
/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
  @apply: right-0 border-black;
  right: 0;
  border-color: #000000;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-black;
  background-color: #000000;
}
</style>
