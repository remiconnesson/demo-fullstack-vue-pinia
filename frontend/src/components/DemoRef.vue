<script setup>
import {ref} from "vue";

const counter = ref(0)
let counter2 = 0

counter.value++
counter2++
</script>

<template>
	<h1 data-testid="demo-ref-first-h1">Compteur REF {{counter}}</h1>
	<h1>Compteur pas REF {{counter2}}</h1>
	<button @click="counter++" data-testid="demo-ref-first-input">+1 ref</button>
	<br>
	<button @click="counter2++">+1 pas ref</button>
</template>
<style></style>
