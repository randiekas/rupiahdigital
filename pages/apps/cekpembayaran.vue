<template>
	<div class="grey lighten-4">

		<div> 
			<v-container>
				<div :class="`mt-6 text-h6 d-flex justify-space-between`">
					<div>
						<p class="subtitle-2">Cek Pembayaran</p>
					</div>
					
				</div>
				
			</v-container>
		</div>

		<div> 
			<v-container>
				
				<v-data-table
					dense
					:headers="headers"
					:items="data"
					item-key="name"
					class="elevation-1"
				>
				<template v-slot:top>
					<v-card-title>
						Riwayat Pembelian
					</v-card-title>
				</template>
				<template v-slot:[`item.dibuat`]="{item}">
					{{ $moment(item.dibuat).format('DD MMM, HH:mm:ss') }}
				</template>
				<template v-slot:[`item.jumlah`]="{item}">
					Rp. {{ convertCurrency(item.jumlah) }}
				</template>
				</v-data-table>
			</v-container>
		</div>

		
		<Contactus/>
	</div>
</template>
<script>
export default {
	layout:'appsblank',
	props: [],	
	data: function(){
		return {
			
		}
    },
	
	mounted: function(){
		
	},
	methods:{
		
	}
}
</script>
