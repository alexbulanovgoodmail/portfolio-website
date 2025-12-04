<template>
	<div class="default">
		<AppHeader />

		<div class="scroll-pinner">
			<slot />

			<AppFooter />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.default {
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	height: 100%;
	background-color: var(--color-bg);
}
</style>
