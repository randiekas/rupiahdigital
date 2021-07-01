<template>
	<v-app>
		<v-main>
			<nuxt-child/>
		</v-main>
	</v-app>
</template>

<script>
export default {
	data () {
		return {
		}
	},
	methods:{
	}
}
</script>
<style>
.border--primary{
	border: 1px solid #4268F6!important
}
.border--success{
	border: 1px solid #4caf50!important
}
.border--error{
	border: 1px solid #ff5252!important
}
</style>