<script setup lang="ts">
interface Props {}

defineProps<Props>()
</script>

<template>
	<div class="social-block">
		<div class="social-block__wrapper">
			<div class="social-block__item">
				<a class="social-block__link" href="#!">
					<NuxtIcon class="social-block__icon" name="discord" filled />
				</a>
			</div>
			<div class="social-block__item">
				<a class="social-block__link" href="#!">
					<NuxtIcon class="social-block__icon" name="facebook" filled />
				</a>
			</div>
			<div class="social-block__item">
				<a class="social-block__link" href="#!">
					<NuxtIcon class="social-block__icon" name="dribbble" filled />
				</a>
			</div>
			<div class="social-block__item">
				<a class="social-block__link" href="#!">
					<NuxtIcon class="social-block__icon" name="instagram" filled />
				</a>
			</div>
			<div class="social-block__item">
				<a class="social-block__link" href="#!">
					<NuxtIcon class="social-block__icon" name="behance" filled />
				</a>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.social-block {
	&__wrapper {
		display: flex;

		& > * + * {
			margin-left: 13px;
		}
	}

	&__link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
	}

	&__icon.nuxt-icon {
		svg {
			margin: 0;
			width: 36px;
			height: 36px;
		}
	}
}
</style>
