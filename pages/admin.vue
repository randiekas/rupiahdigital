<template>
	
</template>
<script>
export default {
	layout:'blank',
	data: () => ({
		
    }),
	mounted: function(){
		this.$auth.$storage.setUniversal("loginType", 'admin')
		return this.$auth
			.loginWith('google')
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.error(err)
				this.error = err.response?.data
			})
	}
}
</script>
