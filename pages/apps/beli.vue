<template>
	<div>

		<div> 
			<v-container>
				<div :class="`mt-6 text-h6 d-flex justify-space-between`">
					<div>
						<p class="text-h4 mb-0">Buy</p>
						<p class="subtitle-2">Buy your IDRS Token</p>
					</div>
					<div>
						<v-btn 
							v-on:click="dialog=true"
							small 
							class="d-xs-none">
							<v-icon left>mdi-plus-circle</v-icon>
							Topup
						</v-btn>
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
						Transaction History
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

		<!-- form wallet -->
		<v-dialog
			v-model="dialog"
			persistent
			max-width="600px">
			<v-card>
				<v-card-title>
				<span class="text-h5">Topup IDRS</span>
				</v-card-title>
				<v-card-text>
				<v-container>
					<v-text-field
						class="mt-4"
						outlined
						v-model.number="jumlah"
						label="Nominal Topup"
						hint="Minimal popup adalah Rp. 10.000"
						type="number"
						persistent-hint
						required/>
				</v-container>
				</v-card-text>
				<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
					text
					@click="dialog = false"
					:disabled="isFetching">
					Batal
				</v-btn>
				<v-btn
					class="px-8"
					color="primary"
					@click="handelTopup"
					:disabled="jumlah<10000 || isFetching">
					{{ isFetching?'memproses':'Simpan'}}
				</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
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
			width="350">
			<v-alert
				v-model="alert.modal"
                border="top"
                color="green accent-4"
                dark
                >
                <v-btn block>
					Lanjutkan ke pembayaran
				</v-btn>
            </v-alert>
		</v-dialog>
	</div>
</template>
<script>
export default {
	layout:'apps',
	props: ['convertCurrency', 'getAkunIDRS', 'getAkun'],	
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
			headers: [
				{ text: 'Date', value: 'dibuat'},
				{ text: 'Wallet Address', value: 'alamat_idrs'},
				{ text: 'Amount', value: 'jumlah' },
				{ text: 'Status', value: 'status' },
			],
			data: [],
		}
    },
	
	mounted: function(){
		this.handleGetDataTopup()
	},
	methods:{
		handleGetDataTopup: async function(){
			this.$api.$get(`api/v1/rupiah/topup/data`).then((resp)=>{
				this.data	= resp.data
			})
		},
		handelTopup: function(){
			this.isFetching			= true
			
			const payload			= {
				alamat_idrs: this.getAkun()?this.getAkun().publicKey.toString():'',
				jumlah: this.jumlah,
				email: this.user.email,
				nama: this.user.name,
				nama_depan: this.user.given_name,
				nama_belakang: this.user.family_name,
				call_back_url: `${process.env.API_URL}/api/v1/rupiah/topup/konfirmasi`,
				return_url: `${process.env.FRONTEND_URL}/apps/beranda`,
			}

			this.$api.$post(`api/v1/rupiah/topup/buat`, payload).then(async (resp)=>{
				// this.alert			= {
				// 	modal	: true,
				// 	message : resp.message,
				// 	status: resp.status
				// }
				
				if(resp.status){	
					this.dialog				= false
					this.handleGetDataTopup()
					// const initParams = {
					// 	redirect_url: `${process.env.FRONTEND_URL}/apps/checkpembelian`,
					// 	environment: "production",
					// 	locale: "id",
					// 	access_key: resp.data.data.access_token,
					// 	site_name: "test.com",
					// 	order_id: resp.data.data.id,
					// 	customer_id: resp.data.data.customer_id,
					// 	order_info: {
					// 		id: resp.data.data.id,
					// 		customer_info: {
					// 			id: resp.data.data.customer_id,
					// 			email: this.user.email,
					// 			name: this.user.name,
					// 		}
					// 	},
					// 	onSuccess: function(response) {
					// 		// this happens after the payment is completed successfully
					// 		var paymentId = response.payment_id;
					// 		alert('Payment complete! Payment Id: ' + paymentId);
					// 		// Make an AJAX call to your server with the reference to verify the transaction
					// 	},
					// 	onFailure: function() {
					// 		alert('Transaction was not completed, transaction failed!');
					// 	},
					// }
					// console.log(JSON.stringify(initParams))
					// const dpay = Durianpay.init(initParams);

					// dpay.checkout();

					
					const initParams = {
						// redirect_url: `${process.env.FRONTEND_URL}/apps/checkpembelian`,
						redirect_url: `${process.env.FRONTEND_URL}/apps/beli-berhasil`,
						environment: "production",
						locale: "id",
						access_key: resp.data.data.access_token,
						site_name: "rupiahdigital.com",
						order_id: resp.data.data.id,
						customer_id: resp.data.data.customer_id,
						order_info: {
							id: resp.data.data.id,
							customer_info: {
								id: resp.data.data.customer_id,
								email: this.user.email,
								name: this.user.name,
							}
						},
						onSuccess: function(response) {
							// this happens after the payment is completed successfully
							// Make an AJAX call to your server with the reference to verify the transaction
						},
						onFailure: function() {
							alert('Transaction was not completed, transaction failed!');
						},
					}
					// const initParams = {
					// 	"redirect_url": "https://localhost:3000/apps/checkpembelian",
					// 	"environment": "production",
					// 	"locale": "id",
					// 	"access_key": "d1ec13250e452a6c55c2c77613dfb584b3bb1e65c8c938b9344f426b984be75f",
					// 	"site_name": "test.com",
					// 	"order_id": "ord_qwvcQnNXQl0581",
					// 	"customer_id": "cus_zY83DSxK2I2639",
					// 	"order_info": {
					// 		"id": "ord_qwvcQnNXQl0581",
					// 		"customer_info": {
					// 			"id": "cus_zY83DSxK2I2639",
					// 			"email": "randiekas@gmail.com",
					// 			"name": "Randi Eka Setiawan"
					// 		}
					// 	}
					// }
					// console.log(JSON.stringify(initParams))
					const dpay = Durianpay.init(initParams).checkout();
					console.log(dpay)
					setTimeout(()=>{
						
						this.isFetching			= false
					}, 5000)
					
					
				}
			})
		}
		
	}
}
</script>
