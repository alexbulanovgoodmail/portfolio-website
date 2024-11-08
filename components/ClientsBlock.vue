<script setup lang="ts"></script>

<template>
	<section class="clients-block">
		<h2 class="clients-block__title typo-h2">Clients</h2>

		<div class="clients-block__wrapper">
			<ClientPreview v-for="_ in 3" :key="_" class="clients-block__client" />
		</div>
	</section>
</template>

<style lang="scss">
.clients-block {
	padding: 50px 0;

	@media screen and (min-width: $md) {
		padding: 100px 0;
	}

	&__wrapper {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 60px 24px;

		@media screen and (min-width: $md) {
			grid-template-columns: repeat(12, minmax(0, 1fr));
		}
	}

	&__client {
		grid-column: span 4 / span 4;
	}

	&__title {
		margin: 0 0 60px;
		text-align: center;
	}
}
</style>
