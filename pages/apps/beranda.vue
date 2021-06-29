<template>
	<div>
		<!-- header -->
		<div class="primary white--text"> 
			<v-container>
				<v-row>
					<v-col xs="12" md="6">
						<h1 class="mt-4 display-2">Rp. {{ convertCurrency(getSupply()) }}</h1>
						<p class="mt-4">Total Circulating Supply</p>
					</v-col>
					<v-col xs="12" md="2" class="text-center">
						<h1 class="mt-4 display-2">100+</h1>
						<p class="mt-4">
							<v-icon left color="white">
								mdi-account-multiple-check-outline
							</v-icon>
							Users
						</p>
					</v-col>
					<v-col xs="12" md="2" class="text-center">
						<h1 class="mt-4 display-2">100+</h1>
						<p class="mt-4">
							<v-icon left color="white">
								mdi-account-supervisor-outline
							</v-icon>
							Community
						</p>
					</v-col>
					<v-col xs="12" md="2" class="text-center">
						<h1 class="mt-4 display-2">100+</h1>
						<p class="mt-4">
							<v-icon left color="white">
								mdi-storefront-outline
							</v-icon>
							Online Store
						</p>
					</v-col>
				</v-row>
			</v-container>
		</div>

		<div> 
			<v-container>
				<v-row>
					<!-- tutorial -->
					<v-col xs="12" md="5">
						<h4>
							Ikuti langkah-langkah berikut ini :
						</h4>
						<v-stepper vertical elevation="0" class="mt-4" v-model="stepAktif">
							
							<v-stepper-step step="1" :complete="stepAktif>=2">
								Membuat Akun IDRS
							</v-stepper-step>
							<v-stepper-content step="1">
								
							</v-stepper-content>


							<v-stepper-step step="2" :complete="stepAktif>=2">
								Membuat Wallet IDRS
							</v-stepper-step>
							<v-stepper-content step="2">
								<v-btn 
									to="/apps/dompet"
									color="primary" 
									small>
									<v-icon left>
										mdi-wallet-plus
									</v-icon>
									Buat Wallet
								</v-btn>
							</v-stepper-content>



							<v-stepper-step step="3" :complete="stepAktif>=4">
								Membeli Token IDRS
							</v-stepper-step>
							
							<v-stepper-content step="3">
								<v-btn color="primary" small>
									<v-icon left>
										mdi-cash-100
									</v-icon>
									Beli Token
								</v-btn>
							</v-stepper-content>
						</v-stepper>
					</v-col>
					<!-- saldo -->
					<v-col xs="12" md="7">
						<h1>Rp. {{ convertCurrency(getSaldoIDRS()) }}</h1>
						<p>Saldo Anda</p>
						<v-text-field
							id="alamatSolana"
							:value="getAkun()?getAkun().publicKey.toString():''"
							append-outer-icon="mdi-content-copy"
							label="Alamat Solana Anda"
							type="text"
							v-on:click:append-outer="handelSalin('Solana')"
							/>
						<v-text-field
							id="alamatIDRS"
							append-outer-icon="mdi-content-copy"
							label="Alamat IDRS Anda"
							type="text"
							:value="getAkunIDRS()?getAkunIDRS().pubkey.toString():''"
							v-on:click:append-outer="handelSalin('IDRS')"
							/>
							<!-- @click:append="toggleMarker"
							
							@click:prepend="changeIcon"
							@click:clear="clearMessage" -->
					</v-col>

					
				</v-row>
			</v-container>
		</div>
		<!-- tutorial -->
		<div class="grey lighten-4"> 
			<v-container class="py-16">
				<h1 class="display-1 text-center">
					How to Purchase and Sell IDRS
				</h1>
				<v-row class="mt-16">
					<v-col xs="12" md="6" class="text-center">
						<h3>
							Purchase IDRS using Rupiah
						</h3>
						<v-stepper vertical elevation="0" class="mt-4">
							
							<v-stepper-step step="1">
								You send Rupiah via our website
							</v-stepper-step>
							<v-stepper-content step="1">
							</v-stepper-content>


							<v-stepper-step step="2">
								We mint the equivalent amount of IDRS on the Solana Blockchain
							</v-stepper-step>
							<v-stepper-content step="2">
							</v-stepper-content>



							<v-stepper-step step="3">
								We send the IDRS to your IDRS wallet
							</v-stepper-step>
							
							<v-stepper-content step="3">
							</v-stepper-content>
						</v-stepper>

					</v-col>
					<v-col xs="12" md="6">
						<!-- stepper -->
						<h3>
							Withdraw IDRS back to Rupiah
						</h3>
						<v-stepper vertical elevation="0" class="mt-4">
							
							<v-stepper-step step="1">
								You send IDRS via our website
							</v-stepper-step>
							<v-stepper-content step="1">
							</v-stepper-content>


							<v-stepper-step step="2">
								We burn the IDRS from the Ethereum Blockchain to reduce total circulating supply
							</v-stepper-step>
							<v-stepper-content step="2">
							</v-stepper-content>



							<v-stepper-step step="3">
								You will receive the amount of Rupiah to your bank account
							</v-stepper-step>
							
							<v-stepper-content step="3">
							</v-stepper-content>
						</v-stepper>
							
						<!-- stepper -->
					</v-col>
				</v-row>
			</v-container>
		</div>

		<!-- banner hubungi kami -->
		<Contactus/>

		
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
	</div>
</template>
<script>
export default {
	layout:'apps',
	props: ['convertCurrency', 'getAkun', 'getAkunIDRS', 'getDompet', 'getSupply', 'getSaldoIDRS'],	
	data: function(){
		return {
			stepAktif: 3,
			alert: {
				modal: false,
			},
		}
    },
	watch: {
    // whenever question changes, this function will run
	},
	methods:{
		handelSalin: function(tipe){
			var copyText = document.getElementById(`alamat${tipe}`);

			/* Select the text field */
			copyText.select();
			copyText.setSelectionRange(0, 99999); /* For mobile devices */

			/* Copy the text inside the text field */
			document.execCommand("copy");

			/* Alert the copied text */
			this.alert	= {
				modal: true,
				message: 'Alamat berhasil disalin'
			};
		}
	}
}
</script>
