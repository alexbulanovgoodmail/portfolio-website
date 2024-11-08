<script setup lang="ts"></script>

<template>
	<section class="skill-preview">
		<div class="skill-preview__image-container">
			<img class="skill-preview__image" src="/images/Skill.png" width="130" height="130" alt="" />
		</div>
		<p class="skill-preview__title typo-h3">Product design</p>
		<p class="skill-preview__text">
			This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
		</p>
	</section>
</template>

<style lang="scss">
.skill-preview {
	padding: 0 32px;

	@media screen and (min-width: $md) {
		padding: 0 44px;
	}

	&__image-container {
		margin: 0 auto 56px;
		position: relative;
		overflow: hidden;
		max-width: 130px;

		&::before {
			content: '';
			display: block;
			width: 100%;
			padding-top: calc(100% / (130px / 130px));
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

	&__title {
		margin: 0 0 20px;
		text-align: center;
	}

	&__text {
		margin: 0;
		text-align: center;
	}
}
</style>
