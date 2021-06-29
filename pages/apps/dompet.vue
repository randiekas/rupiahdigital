<template>
	<div class="grey lighten-4">

		<div> 
			<v-container>
				<p class="text-h4 mb-0">Dompet</p>
				<p class="subtitle-2">Kelola Dompet IDRS Anda</p>
			</v-container>
		</div>

		<div> 
			<v-container>
				<v-alert
					v-if="getDompet().length===0"
					border="left"
					close-text="Close Alert"
					color="primary"
					dark
					dismissible>
					Anda belum memiliki dompet, silahkan buat dompet
				</v-alert>
				<v-row>
					<v-col v-for="(item, index) in getDompet()" :key="index" sm="12" md="6" cols="12">
						<v-card class="border--primary">
							<v-card-title class="pb-0">
								<v-icon left>mdi-wallet</v-icon>
								Wallet {{ index+1 }}
							</v-card-title>
							<v-card-text>
								<p>
									Alamat Solana: <br/>
									{{ item.alamat_solana }}
									<input id="alamatSolana" type="hidden" :value="item.alamat_solana"/>
								</p>
								<p>
									Alamat IDRS:
									<br/>
									{{ item.alamat_idrs||'-' }}
									<input id="alamatIDRS" type="hidden" :value="item.alamat_idrs"/>
								</p>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn 
									v-on:click="handelSalin('Solana')"
									color="primary" text :to="item.link">
									Solana
									<v-icon right dark>mdi-content-copy</v-icon>
								</v-btn>
								<v-btn 
									v-on:click="handelSalin('IDRS')"
									color="primary" text :to="item.link">
									IDRS
									<v-icon right dark>mdi-content-copy</v-icon>
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</div>

		
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
	props: ['handleGetDataDompet', 'getDompet'],
	data: function(){
		return {
			isFetching:false,
			seedTeks: '',
			sandiTeks: '',
			seedAlreadyCopy: false,
			dialog: false,
			alert: {
				modal: false,
			},
		}
    },
	methods:{
		handelSalin: function(tipe){
			// var copyText = document.getElementById(`alamat${tipe}`);

			// /* Select the text field */
			// copyText.select();
			// copyText.setSelectionRange(0, 99999); /* For mobile devices */

			// /* Copy the text inside the text field */
			// document.execCommand("copy");

			// /* Alert the copied text */
			// this.alert	= {
			// 	modal: true,
			// 	message: 'Alamat berhasil disalin'
			// };
		}
	}
}
</script>
