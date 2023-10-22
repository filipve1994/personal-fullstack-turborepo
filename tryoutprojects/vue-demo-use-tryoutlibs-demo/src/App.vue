<script setup lang="ts">
import { ref } from "vue";
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import {subtract, sum} from "my-ts-lib";

const sum_my_ts_lib = sum(1, 2);
const subtract_my_ts_lib = subtract(10, 5);

import VueTypewriterEffect from "vue-typewriter-effect";

const tooltipText = ref("Hello world");
import {PersonalButton} from "@sample/my-internal-vue-package";

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/>

    <div class="wrapper">
      <HelloWorld msg="You did it!"/>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView/>

  <div>
    <h1>Demos from my-ts-lib package</h1>
    <p>Sum demo Typescript function: {{sum_my_ts_lib}}</p>
    <p>Subtract demo Typescript function: {{subtract_my_ts_lib}}</p>
  </div>
  <div>
    <h1>Demos from vue-typewriter-effect package</h1>
    <p><vue-typewriter-effect :strings="['hello', 'world']" /></p>
  </div>

  <div>
    <h3>Custom Vue.js 3 Plugins</h3>
    <input type="text" v-model="tooltipText" /> <br />
    <span
    >Hover Over Me
    <ToolTip :text="tooltipText" :options="{ placement: 'bottom' }"
    /></span>

    <br />

    <span>And me <ToolTip :text="tooltipText" /></span>

    <br />

    <button @click="$hideAllTooltips()">Hide All</button>
  </div>

  <div>
    <h1>Internal package demo</h1>
    <div>
      <PersonalButton text="button text here" />
      <PersonalButton text="button text here"  />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
