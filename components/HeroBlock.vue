<script setup lang="ts">
interface Props {}

defineProps<Props>()
</script>

<template>
	<section class="hero-block">
		<div class="hero-block__wrapper">
			<div class="hero-block__texts">
				<p class="hero-block__sub-title typo-h4">Branding | Image making</p>
				<h2 class="hero-block__title typo-h1">My awesome portfolio</h2>

				<p class="hero-block__text">
					This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
				</p>
			</div>
			<div class="hero-block__images">
				<div class="hero-block__image-container">
					<img class="hero-block__image" src="/images/Hero.png" width="315" height="270" alt="" />
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.hero-block {
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

	&__texts {
		grid-column: span 4 / span 4;

		@media screen and (min-width: $md) {
			grid-column: span 12 / span 12;
		}

		@media screen and (min-width: $lg) {
			grid-column: span 6 / span 6;
		}
	}

	&__images {
		grid-column: span 4 / span 4;

		@media screen and (min-width: $md) {
			grid-column: span 12 / span 12;
		}

		@media screen and (min-width: $lg) {
			grid-column: span 6 / span 6;
		}
	}

	&__sub-title {
		margin: 0 auto 24px;
		text-align: center;

		@media screen and (min-width: $md) {
			margin: 0 auto 40px;
			text-align: left;
		}
	}

	&__title {
		margin: 0 auto 20px;
		text-align: center;

		@media screen and (min-width: $md) {
			margin: 0 auto 40px;
			text-align: left;
		}
	}

	&__text {
		margin: 0;
		text-align: center;

		@media screen and (min-width: $md) {
			text-align: left;
		}
	}

	&__image-container {
		position: relative;
		overflow: hidden;

		&::before {
			content: '';
			display: block;
			width: 100%;
			padding-top: calc(100% / (315px / 270px));
		}
	}

	&__image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
}
</style>
