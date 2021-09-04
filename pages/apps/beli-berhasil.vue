<template>
	<div class="grey lighten-4" style="height:100%">

		<v-container>
			<div :class="`mt-6`">
				<v-card>
					<v-card-title> Pembelian Berhasil</v-card-title>
					<v-card-text>
						Topup saldo berhasil
					</v-card-text>
					<v-card-actions>
						<v-btn to="/apps/beli">
							Kembali
						</v-btn>
					</v-card-actions>
				</v-card>
				
			</div>
			
		</v-container>
		
	</div>
</template>
<script>
export default {
	layout:'apps',
	props: ['convertCurrency', 'getAkunIDRS'],	
	data: function(){
		let user = this.$auth.user
		return {
			user,	
		}
    },
	
	mounted: function(){
		
	},
	methods:{
			
	}
}
</script>
