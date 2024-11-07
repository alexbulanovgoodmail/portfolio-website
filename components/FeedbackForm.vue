<script setup lang="ts">
interface Props {}

defineProps<Props>()
</script>

<template>
	<div class="feedback-form">
		<div class="feedback-form__input-block">
			<input class="form-input" type="text" name="fio" placeholder="Name" />
		</div>
		<div class="feedback-form__input-block">
			<input class="form-input" type="email" name="email" placeholder="Email" />
		</div>
		<div class="feedback-form__input-block">
			<textarea class="form-textarea" name="message" placeholder="Type your message here"></textarea>
		</div>
		<div class="feedback-form__submit-block">
			<button class="button" type="submit">Submit</button>
		</div>
	</div>
</template>

<style lang="scss">
.feedback-form {
	&__input-block {
		margin: 0 0 20px;
	}

	&__submit-block {
		margin: 40px 0 0;
	}
}
</style>
