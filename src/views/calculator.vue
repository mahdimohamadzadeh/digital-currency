<template>
  <div class="grid place-items-center h-screen">
    <!-- show calculator for phone -->
    <div
      class="sm:hidden min-w-screen min-h-full flex items-center justify-center px-5 py-5"
    >
      <div
        class="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden"
        style="max-width: 300px"
      >
        <div
          class="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right"
        >
          <input
            :value="current || '0'"
            disabled
            class="w-full py-5 px-6 text-6xl text-white font-thin"
          />
        </div>
        <div class="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
          <div class="flex w-full">
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                @click="clearDisplay"
                class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
              >
                AC
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                @click="changeSign"
                class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
              >
                +/-
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                @click="convertPercent"
                class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
              >
                %
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                @click="handleOperator('÷')"
                class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-2xl font-light"
              >
                ÷
              </button>
            </div>
          </div>
          <div class="flex w-full">
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                @click="appendSymbol('7')"
                class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                7
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                @click="appendSymbol('8')"
                class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                8
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                @click="appendSymbol('9')"
                class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                9
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                @click="handleOperator('×')"
                class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
              >
                ⨉
              </button>
            </div>
          </div>
          <div class="flex w-full">
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                @click="appendSymbol('4')"
                class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                4
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                @click="appendSymbol('4')"
                class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                5
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                @click="appendSymbol('6')"
                class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                6
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                @click="handleOperator('-')"
                class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
              >
                -
              </button>
            </div>
          </div>
          <div class="flex w-full">
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                @click="appendSymbol('1')"
                class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                1
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                @click="appendSymbol('2')"
                class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                2
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                @click="appendSymbol('3')"
                class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                3
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                @click="handleOperator('+')"
                class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
              >
                +
              </button>
            </div>
          </div>
          <div class="flex w-full">
            <div class="w-1/4 border-r border-indigo-400">
              <button
                @click="appendSymbol('0')"
                class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                0
              </button>
            </div>
            <div class="w-1/4 border-r border-indigo-400">
              <button
                @click="convertDecimal()"
                class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                .
              </button>
            </div>
            <div class="w-2/4 border-r border-indigo-400">
              <button
                @click="handleOperator('=')"
                class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- show calculator for laptop -->
    <div
      class="hidden sm:block mx-auto overflow-hidden mt-10 mb-2 bg-neutral shadow-2xl rounded-lg md:w-2/3 sm:w-4/6"
    >
      <div class="">
        <div class="p-5 text-center text-3xl">Calculator</div>
        <div class="w-full h-20 flex justify-center items-center">
          <input
            class="input input-primary rounded-full text-center text-3xl py-4"
            :value="current || '0'"
            disabled
          />
        </div>
        <div class="flex items-stretch bg-neutral h-24">
          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="clearDisplay"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              AC
            </button>
          </div>
          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="changeSign"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              +/-
            </button>
          </div>
          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="convertPercent"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              %
            </button>
          </div>

          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="handleOperator('÷')"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              ÷
            </button>
          </div>
        </div>

        <div class="flex items-stretch bg-neutral h-24">
          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="appendSymbol('7')"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              7
            </button>
          </div>

          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="appendSymbol('8')"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              8
            </button>
          </div>

          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="appendSymbol('9')"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              9
            </button>
          </div>

          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="handleOperator('×')"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              &#215;
            </button>
          </div>
        </div>

        <div class="flex items-stretch bg-neutral h-24">
          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="appendSymbol('4')"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              4
            </button>
          </div>

          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="appendSymbol('5')"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              5
            </button>
          </div>

          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="appendSymbol('6')"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              6
            </button>
          </div>

          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="handleOperator('-')"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              -
            </button>
          </div>
        </div>

        <div class="flex items-stretch bg-neutral h-24">
          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="appendSymbol('1')"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              1
            </button>
          </div>

          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="appendSymbol('2')"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              2
            </button>
          </div>

          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="appendSymbol('3')"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              3
            </button>
          </div>

          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="handleOperator('+')"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              +
            </button>
          </div>
        </div>

        <div class="flex items-stretch bg-neutral h-24">
          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          ></div>
          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="appendSymbol('0')"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              0
            </button>
          </div>

          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="convertDecimal()"
              class="rounded-full h-20 w-20 flex items-center justify-center shadow-xl hover:border-2 hover:border-primary"
            >
              &#183;
            </button>
          </div>
          <div
            class="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold"
          >
            <button
              @click="handleOperator('=')"
              class="text-white rounded-full h-20 w-20 flex items-center text-3xl bg-orange-500 justify-center shadow-xl border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
            >
              &#61;
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const current = ref("");
const previous = ref(null);
const operator = ref(null);
const clickedOperator = ref(false);
const clearDisplay = () => {
  // use for AC keyboard
  current.value = "";
  previous.value = null;
  operator.value = null;
  clickedOperator.value = false;
};
const appendSymbol = (number) => {
  if (clickedOperator.value) {
    clickedOperator.value = false;
    current.value = number;
  } else {
    current.value =
      current.value === "0" ? number : `${current.value}${number}`;
  }
};
const convertDecimal = () => {
  if (clickedOperator.value) {
    current.value = "0.";
    clickedOperator.value = false;
  }
  if (current.value.indexOf(".") === -1) {
    current.value += "0.";
  }
};
const changeSign = () => {
  current.value =
    current.value.charAt(0) === "-"
      ? current.value.slice(1)
      : `-${current.value}`;
};
const convertPercent = () => {
  current.value = `${parseFloat(current.value) / 100}`;
};
const handleOperator = (newOperator) => {
  const numberValue = parseFloat(current.value);
  if (operator.value && clickedOperator.value) {
    operator.value = newOperator;
  }
  if (previous.value == null) {
    previous.value = numberValue;
  } else if (operator.value) {
    const result = calculate(previous.value, numberValue, operator.value);
    current.value = String(result);
    previous.value = result;
  }
  clickedOperator.value = true;
  operator.value = newOperator;
};
const calculate = (first, second, operator) => {
  switch (operator) {
    case "+":
      return first + second;
    case "-":
      return first - second;
    case "×":
      return first * second;
    case "÷":
      return first / second;
    default:
      return second;
  }
};
</script>
