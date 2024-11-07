<script setup lang="ts">
interface Props {}

defineProps<Props>()
</script>

<template>
	<section class="feedback-block">
		<div class="container">
			<div class="feedback-block__wrapper">
				<div class="feedback-block__texts">
					<h2 class="feedback-block__title">Let’s work together</h2>
					<p class="feedback-block__text">
						This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template
						Figma file, turned into code using Anima. Learn more at AnimaApp.com
					</p>

					<div class="feedback-block__social">
						<SocialBlock />
					</div>
				</div>
				<div class="feedback-block__forms">
					<FeedbackForm />
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.feedback-block {
	padding: 70px 0;

	&__wrapper {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 80px 24px;

		@media screen and (min-width: $md) {
			grid-template-columns: repeat(12, minmax(0, 1fr));
		}
	}

	&__texts {
		grid-column: span 4 / span 4;

		@media screen and (min-width: $md) {
			grid-column: span 4 / span 4;
		}
	}

	&__forms {
		grid-column: span 4 / span 4;

		@media screen and (min-width: $md) {
			grid-column: span 6 / span 6;
			grid-column-start: 7;
		}
	}

	&__title {
		margin: 0 0 40px;
	}

	&__social {
		margin: 60px 0 0;
	}
}
</style>
