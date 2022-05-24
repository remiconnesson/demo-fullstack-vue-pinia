<script setup>
import { useNameStore } from "@/stores/names"

const store = useNameStore();


</script>
<template>
	<p>{{store.names}}</p>
</template>
<style></style>
