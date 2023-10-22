<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>This page is to show you how the layouting system works</p>
  </div>

  <div class="testlibs">
    <PersonalButton text="button text here" />
<!--    <PersonalButton2 text="button text here" />-->
    <PersonalInput text="button text here" />
<!--    <PersonalInput2 text="button text here" />-->
  </div>

  <div>
    <label>
      <p>Language:</p>
      <select v-model="language">
        <option v-for="lang in preferredLanguages" :key="lang">
          {{ lang }}
        </option>
      </select>
    </label>
    <label>
      <p>Number:</p>
      <input v-model.number="number" type="number">
    </label>
<!--    <p>Formatted Number: {{ formattedNumber }}</p>-->
<!--    <p>useNumberFormatter1: Formatted Number: {{ useNumberFormatter1.formattedNumber }}</p>-->
<!--    <p>useNumberFormatter2: Formatted Number: {{ useNumberFormatter2.formattedNumber }}</p>-->
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script setup lang="ts">
import { ref } from 'vue'

import { PersonalButton, PersonalInput, Formatters } from "test-component";
// import { PersonalButton as PersonalButton2, PersonalInput as PersonalInput2, Formatters as Formatters2} from "@filipve/test-component2";

const preferredLanguages = ref(['en-US', 'en-GB', 'en-AU', 'en-CA', 'en-NZ'])
const language = ref(preferredLanguages.value[0])
const number = ref(123456789)
const options = ref({
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'symbol',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
})
// const { formattedNumber } = useNumberFormatter(number, language, options);
// const useNumberFormatter1 = Formatters.useNumberFormatter(number, language, options);
// const useNumberFormatter2 = Formatters2.useNumberFormatter(number, language, options);
// const { formattedNumber } = Formatters2.useNumberFormatter(number, language, options);
</script>