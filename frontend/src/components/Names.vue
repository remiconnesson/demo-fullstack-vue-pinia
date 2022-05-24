<script setup>
import {ref} from "vue";
import { useNameStore } from "@/stores/names";

const store = useNameStore()

await store.getAllNames()

const name = ref('')

</script>
<template>
	<p>{{ store.names }}</p>
	<input type="text" v-model="name">
	<button @click="store.postNewName({nom:name})">Ajouter Nom</button>
</template>
<style></style>
