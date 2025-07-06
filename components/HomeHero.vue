<script setup lang="ts">
import { StructuredText as DatocmsStructuredText } from 'vue-datocms'
import type { Link } from '~/types/Link'

interface Props {
	content: {
		title: string
		text: any
		button?: Link
	}
}

const props = defineProps<Props>()
const { title, text, button } = props.content

const { renderBlock } = useDatoRender()
const eye = ref<HTMLElement | null>(null)

function handleMouseMove(event: MouseEvent): void {
	if (!eye.value) return

	const rect = eye.value.getBoundingClientRect()
	const eyeCenterX = rect.left + rect.width / 2
	const eyeCenterY = rect.top + rect.height / 2

	const dx = event.clientX - eyeCenterX
	const dy = event.clientY - eyeCenterY

	const offsetX = Math.min(Math.max(dx * 0.1, -10), 10) // ограничим смещение по X
	const offsetY = Math.min(Math.max(dy * 0.1, -10), 10) // и по Y

	eye.value.style.transform = `translate(${offsetX}px, ${offsetY}px)`
}

onMounted(() => {
	document.body.addEventListener('mousemove', handleMouseMove)
})
</script>

<template>
	<PageSection class="home-hero">
		<div class="container">
			<div class="home-hero__wrapper">
				<div class="home-hero__texts">
					<h1 class="home-hero__title typo-head">
						{{ title }}
					</h1>
					<DatocmsStructuredText class="home-hero__sub-title typo-subhead" :data="text" :render-block="renderBlock" />

					<a v-if="button" class="button" :href="button.to" target="_blank" download> {{ button.label }}</a>
				</div>
				<div class="home-hero__images">
					<div class="home-hero__image-container">
						<div class="home-hero__eye">
							<img ref="eye" src="~/assets/images/eye.svg" width="44" height="44" alt="" />
						</div>
						<img class="home-hero__image" src="~/assets/images/mac.svg" width="288" height="227" alt="" />
					</div>
				</div>
			</div>

			<div class="home-hero__quick-links">
				<slot />
			</div>
		</div>
	</PageSection>
</template>

<style lang="scss" scoped>
.home-hero.section {
	padding: 60px 0 0;

	@media screen and (min-width: $md) {
		padding: 80px 0 0;
	}

	@media screen and (min-width: $lg) {
		padding: 120px 0 0;
	}
}

.home-hero {
	&__wrapper {
		margin: 0 0 100px;
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 36px 72px;

		@media screen and (min-width: $lg) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			align-items: center;
		}
	}

	&__title {
		margin: 0 0 12px;
	}

	&__sub-title {
		margin: 0 0 36px;

		& > :deep(p) {
			font-size: 28px;
			font-weight: 600;
			line-height: 32px;
		}
	}

	&__image-container {
		@media screen and (min-width: $lg) {
			position: relative;
			max-width: 612px;
		}
	}

	&__image {
		display: flex;
		width: 100%;
		height: auto;
	}

	&__eye {
		display: none;

		img {
			width: 50%;
			height: 50%;
		}

		@media screen and (min-width: $lg) {
			position: absolute;
			top: 50%;
			left: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 10;
			border-radius: 100%;
			width: 18%;
			height: 72px;
			background-color: var(--color-bg);
			transform: translate(calc(-50% + 12px), calc(-50% - 10px));
		}

		@media screen and (min-width: $xl) {
			top: 50%;
			left: 51%;
			width: 18%;
			height: 90px;
			transform: translate(calc(-50% + 10px), calc(-50% - 12px));
		}

		@media screen and (min-width: $xxl) {
			top: 50%;
			left: 51%;
			width: 18%;
			height: 110px;
			transform: translate(calc(-50% + 14px), calc(-50% - 14px));
		}
	}

	&__quick-links {
		position: relative;
		z-index: 10;
		margin: 0 0 -108px;

		@media screen and (min-width: $sm) {
			margin: 0 0 -30px;
		}

		@media screen and (min-width: $lg) {
			margin: 0 0 -40px;
		}
	}
}
</style>
