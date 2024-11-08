<script setup lang="ts"></script>

<template>
	<section class="skills-block">
		<h2 class="visually-hidden">My Skills</h2>

		<div class="skills-block__wrapper">
			<SkillPreview v-for="_ in 3" :key="_" class="skills-block__skill" />
		</div>
	</section>
</template>

<style lang="scss">
.skills-block {
	padding: 50px 0;

	@media screen and (min-width: $md) {
		padding: 100px 0;
	}

	&__wrapper {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 125px 24px;

		@media screen and (min-width: $md) {
			grid-template-columns: repeat(12, minmax(0, 1fr));
		}
	}

	&__skill {
		grid-column: span 4 / span 4;
	}
}
</style>
