<template>
	<div>

		<div> 
			<v-container>
				
				<v-row>
					<!-- saldo -->
					<v-col xs="12" md="7">
						<h1>Rp. {{ convertCurrency(getSaldoIDRS()) }}</h1>
						<p>Your balance</p>
						<v-text-field
							id="alamatSolana"
							:value="getAkun()?getAkun().publicKey.toString():''"
							append-outer-icon="mdi-content-copy"
							label="Your Solana Address"
							type="text"
							v-on:click:append-outer="handelSalin('Solana')"
							readonly
							/>
						<v-text-field
							id="alamatIDRS"
							append-outer-icon="mdi-content-copy"
							label="Alamat IDRS Anda"
							type="text"
							:value="getAkunIDRS()?getAkunIDRS().pubkey.toString():'Plese topup your wallet to get your Address of IDRS Wallet'"
							readonly
							v-on:click:append-outer="handelSalin('IDRS')"
							/>
							<!-- @click:append="toggleMarker"
							
							@click:prepend="changeIcon"
							@click:clear="clearMessage" -->
					</v-col>
	
					<v-col xs="12" md="5" class="align-content-center d-flex row">
						<v-btn
							to="/apps/beli"
							class="mb-2"
							block>
							<v-icon 
								left>
								mdi-cash-multiple
							</v-icon>
							Buy IDRS
						</v-btn>
						<v-btn
							to="/apps/transfer"
							class="mb-2"
							block>
							<v-icon 
								left>
								mdi-bank-transfer
							</v-icon>
							Transfer IDRS
						</v-btn>
						<v-btn
							v-on:click="handelUpdateSaldoIDRS()"
							block
							class="mb-2">
							<v-icon 
								left>
								mdi-reload
							</v-icon>
							Refresh Balance
						</v-btn>
						<v-btn
							:href="`https://explorer.solana.com/address/BWe1ReuW5KjaUMZTdq3yPxUAkoBbvm6kaFG4cCvapX9p`"
							target="_blank"
							block>
							<v-icon 
								left>
								mdi-history
							</v-icon>
							History
						</v-btn>
					</v-col>

				</v-row>
				
			</v-container>
		</div>
		<!-- tutorial -->
		<div> 
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
								We send the IDRS to your Solana wallet
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
								We burn the IDRS from the Solana Blockchain to reduce total circulating supply
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
	props: ['convertCurrency', 'getAkun', 'getAkunIDRS', 'getDompet', 'getSupply', 'getSaldoIDRS', 'handelUpdateSaldoIDRS'],	
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
