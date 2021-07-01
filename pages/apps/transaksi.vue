<template>
	<div class="grey lighten-4">

		<div> 
			<v-container>
				<div :class="`mt-6 text-h6 d-flex justify-space-between`">
					<div>
						<p class="text-h4 mb-0">Transaksi</p>
						<p class="subtitle-2">Kelola history transaksi</p>
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
				<template v-slot:[`item.aksi`]="{item}">
					<v-btn small v-if="item.status==='SUCCESS'" class="primary" v-on:click="handelKonfirmasiDialog(item)">
						<v-icon small left>
							mdi-check
						</v-icon>
						Konfirmasi transfer
					</v-btn>
					<v-btn small v-if="item.status==='PROCESS'" class="warning">
						<v-icon small left>
							mdi-timer-sand
						</v-icon>
						Menunggu Transfer
					</v-btn>
					<v-btn small v-if="item.status==='FINISH'" class="success">
						<v-icon small left>
							mdi-check-all
						</v-icon>
						Selesai
					</v-btn>
				</template>
				</v-data-table>
			</v-container>
		</div>

		
		<Contactus/>

		<!-- form login-->

		<v-dialog
			v-model="isFetching"
			hide-overlay
			persistent
			width="300">
			<v-card
				color="primary"
				dark>
				<v-card-text>
				Memproses
				<v-progress-linear
					indeterminate
					color="white"
					class="mb-0"
				></v-progress-linear>
				</v-card-text>
			</v-card>
		</v-dialog>
		<v-dialog
            v-if="alert.modal"
			v-model="alert.modal"
			width="300">
			<v-alert
				v-model="alert.modal"
                border="top"
                color="green accent-4"
                dark
                dismissible
                type="success"
                >
                {{ alert.message }}
            </v-alert>
		</v-dialog>

		<!-- untuk popup konfirmasi delete -->
		<v-dialog v-model="dialogKonfirmasi" max-width="500px">
			<v-card>
				<v-card-title class="headline">Konfirmasi</v-card-title>
				<v-card-text>
					Apakah anda ingin melanjutkan konfirmasi ?
				</v-card-text>
				<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="blue darken-1" text @click="dialogKonfirmasi=false">Batal</v-btn>
				
				<v-btn color="blue darken-1" text @click="handelKonfirmasi">OK</v-btn>
				<v-spacer></v-spacer>
				</v-card-actions>
			</v-card>
		</v-dialog>
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
			jumlah: 0,
			isFetching:false,
			dialog: false,
			alert: {
				modal: false,
			},
			detil: {},
			dialogKonfirmasi: false,
			headers: [
				{ text: 'Tanggal', value: 'dibuat'},
				{ text: 'Alamat Dompet', value: 'alamat_idrs'},
				{ text: 'Jumlah', value: 'jumlah' },
				{ text: 'Status', value: 'status' },
				{ text: '', value: 'aksi' },
			],
			data: [],
		}
    },
	
	mounted: function(){
		this.handleGetDataTopup()
	},
	methods:{
		handleGetDataTopup: async function(){
			this.$api.$get(`api/v1/rupiah/topup/semuadata`).then((resp)=>{
				this.data	= resp.data
			})
		},
		handelKonfirmasiDialog: function(item){
			this.detil				= item			
			this.dialogKonfirmasi 	= true
		},
		handelKonfirmasi: function(){
			this.isFetching			= true
			
			const payload			= {
				id	: this.detil.id.toString()
			}

			this.$api.$post(`api/v1/rupiah/topup/ubah`, payload).then((resp)=>{
				this.dialogKonfirmasi 	= false
				this.isFetching		= false
				this.alert			= {
					modal	: true,
					message : resp.message,
					status: resp.status
				}
				if(resp.status){	
					this.dialog				= false
					this.handleGetDataTopup()
				}
			})
		}
		
	}
}
</script>
