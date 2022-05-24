<script setup>
import DemoRef from "@/components/DemoRef.vue"
import Names from "@/components/Names.vue"
import Names2 from "@/components/Names2.vue"

</script>

<template>
	<DemoRef/>
	<hr>
	<Suspense>
		<Names/>
		<template #fallback>
			<p> Chargement ...</p>
		</template>
	</Suspense>
	<hr>
	<Suspense>
		<Names2/>
		<template #fallback>
			<p> Chargement ...</p>
		</template>
	</Suspense>
</template>

<style></style>
