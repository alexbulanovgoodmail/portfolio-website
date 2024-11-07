<script setup lang="ts">
interface Props {}

defineProps<Props>()
</script>

<template>
	<div class="work-preview">
		<a class="work-preview__link" href="#!">
			<div class="work-preview__image-container">
				<img class="work-preview__image" src="/images/Image.jpg" width="315" height="315" alt="" />
			</div>
			<p class="work-preview__title typo-p-medium">Free Bird</p>
			<p class="work-preview__text">Lynyrd Skynyrd</p>
		</a>
	</div>
</template>

<style lang="scss">
.work-preview {
	&__link {
		display: block;
		text-decoration: none;
		color: var(--color-dark);
		transition: 300ms transform cubic-bezier(0.4, 0, 0.2, 1);

		@media (hover: hover) {
			&:hover,
			&:focus-visible {
				transform: scale(0.9);
			}
		}
	}

	&__image-container {
		margin: 0 0 25px;
		position: relative;
		overflow: hidden;

		&::before {
			content: '';
			display: block;
			width: 100%;
			padding-top: calc(100% / (315px / 315px));
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
		margin: 0 0 10px;
		font-weight: 600;
	}

	&__text {
		margin: 0;
	}
}
</style>
