<template>
	<div>

		<div> 
			<v-container>
				<p class="text-h4 mb-0">Withdraw</p>
				<p class="subtitle-2">Tarik saldo IDRS menjadi rupiah</p>
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
						Riwayat Penarikan
					</v-card-title>
				</template>
				</v-data-table>
			</v-container>
		</div>

		
		<Contactus/>

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
	</div>
</template>
<script>
import { Account, PublicKey, Transaction, SystemProgram, sendAndConfirmTransaction, TransactionInstruction } from '@solana/web3.js';
import * as BufferLayout from 'buffer-layout';

export default {
	layout:'apps',
	props: ['convertCurrency', 'getAkun', 'getAkunIDRS', 'getDompet', 'getSupply', 'getSaldoIDRS', 'getKoneksi', 'handelUpdateSaldoIDRS'],	
	data: function(){
		return {
			isFetching:false,
			dialog: false,
			alert: {
				modal: false,
			},
			headers: [
				{ text: 'Tanggal', value: 'dibuat'},
				{ text: 'Jumlah', value: 'jumlah' },
				{ text: 'Status', value: 'status' },
			],
			data: [],
		}
    },
	methods:{
		isValid: function(){
			return false
		},
		
	}
}
</script>
