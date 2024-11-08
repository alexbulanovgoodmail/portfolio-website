<script setup lang="ts"></script>

<template>
	<div class="client-preview">
		<p class="client-preview__review typo-h4">
			This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
		</p>

		<div class="client-preview__brief">
			<div class="client-preview__avatar">
				<img class="client-preview__image" src="/images/Work.jpg" width="50" height="50" alt="" />
			</div>
			<div class="client-preview__details">
				<div class="client-preview__rating">
					<NuxtIcon v-for="_ in 5" :key="_" class="client-preview__icon" name="star" filled />
				</div>
				<p class="client-preview__name">Gemma Nolen,</p>
				<p class="client-preview__from">Google</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.client-preview {
	border: 1px solid var(--color-yellow);
	padding: 30px;
	background-color: var(--color-light);

	@media screen and (min-width: $md) {
		padding: 15px;
	}

	@media screen and (min-width: $lg) {
		padding: 30px;
	}

	&__review {
		margin: 0 auto 80px;
	}

	&__brief {
		display: flex;

		& > * + * {
			margin-left: 20px;
		}
	}

	&__avatar {
		position: relative;
		flex-shrink: 0;
		border-radius: 100%;
		display: flex;
		width: 50px;
		height: 50px;
		overflow: hidden;
	}

	&__image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	&__rating {
		margin: 0 0 10px;
		display: flex;
		align-items: center;

		& > * + * {
			margin-left: 5px;
		}
	}

	&__icon.nuxt-icon {
		svg {
			margin: 0;
			width: 20px;
			height: 20px;
		}
	}

	&__name {
		margin: 0;
	}

	&__from {
		margin: 0;
	}
}
</style>
