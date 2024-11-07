<script setup lang="ts">
interface Props {}

defineProps<Props>()
</script>

<template>
	<section class="works-block">
		<h2 class="works-block__title typo-h2">My latest work</h2>

		<div class="works-block__wrapper">
			<WorkPreview v-for="_ in 6" :key="_" class="works-block__work" />
		</div>
	</section>
</template>

<style lang="scss">
.works-block {
	padding: 40px 0;

	&__title {
		margin: 0 0 60px;
		text-align: center;
	}

	&__wrapper {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 60px 24px;

		@media screen and (min-width: $md) {
			grid-template-columns: repeat(12, minmax(0, 1fr));
		}
	}

	&__work {
		grid-column: span 4 / span 4;
	}
}
</style>
