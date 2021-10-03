<template>
	<div>

		<div> 
			<v-container>
				<p class="text-h4 mb-0">Transfer</p>
				<p class="subtitle-2">Transfer between IDRS Users</p>
			</v-container>
		</div>

		<div> 
			<v-container>
				
				<v-row>
					<v-col sm="12" md="6" cols="12">
						<h1>Rp. {{ convertCurrency(getSaldoIDRS()) }}</h1>
						<p>Saldo Anda</p>
						<v-text-field
							dense
							class="mt-4"
							outlined
							v-model="alamatTujuan"
							label="Alamat IDRS Tujuan"
							hint="Masukkan alamat IDRS tujuan"
							required/>
						<v-text-field
							dense
							class="mt-4"
							outlined
							v-model.number="jumlah"
							label="Jumlah"
							hint="Masukkan jumlah yang akan dikirim"
							type="number"
							required
							:max="getSaldoIDRS()"/>
						<div class="text-right">
							<v-btn
								class="px-8"
								color="primary"
								v-on:click="handelTransfer"
								:disabled="!isValid()">
								Kirim
							</v-btn>
						</div>
					</v-col>
					
				</v-row>
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
			alamatTujuan: '',
			jumlah: 0
		}
    },
	methods:{
		isValid: function(){
			return this.alamatTujuan!="" && this.jumlah<=this.getSaldoIDRS() && this.jumlah!=0 && this.isFetching===false
		},
		handelTransfer:async function (){
			try {
				this.isFetching		= true
				const akun			= this.getAkun()
				const keys = [
					{ pubkey: new PublicKey(this.getAkunIDRS().pubkey.toString()), isSigner: false, isWritable: true },
					{ pubkey: new PublicKey(this.alamatTujuan), isSigner: false, isWritable: true },
					{ pubkey: akun.publicKey, isSigner: true, isWritable: false },
				];
				const transaction = new Transaction().add(
					new TransactionInstruction({
						keys,
						data: this.encodeTokenInstructionData({
							transfer: { amount:this.jumlah },
						}),
						programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
					}),	
				);
				console.log("mengirim")
				const signers			= [akun]
				const signedTransaksi	= await sendAndConfirmTransaction(this.getKoneksi(), transaction, signers)
				
				this.isFetching			= false
				this.alert	= {
					modal: true,
					message: 'Saldo berhasil dikirim'
				};

				this.handelUpdateSaldoIDRS()
				this.alamatTujuan	= '',
				this.jumlah			= 0
			
			}
			catch(err) {
				this.isFetching		= false
				alert(err)
			}
			

			

			
		},
		encodeTokenInstructionData: function(instruction) {
			const LAYOUT = BufferLayout.union(BufferLayout.u8('instruction'));
			LAYOUT.addVariant(
			0,
			BufferLayout.struct([
				BufferLayout.u8('decimals'),
				BufferLayout.blob(32, 'mintAuthority'),
				BufferLayout.u8('freezeAuthorityOption'),
				BufferLayout.blob(32, 'freezeAuthority'),
			]),
			'initializeMint',
			);
			LAYOUT.addVariant(1, BufferLayout.struct([]), 'initializeAccount');
			LAYOUT.addVariant(3, BufferLayout.struct([BufferLayout.nu64('amount')]), 'transfer');
			LAYOUT.addVariant(7, BufferLayout.struct([BufferLayout.nu64('amount')]), 'mintTo');
			LAYOUT.addVariant(8, BufferLayout.struct([BufferLayout.nu64('amount')]), 'burn');
			LAYOUT.addVariant(9, BufferLayout.struct([]), 'closeAccount');

			const instructionMaxSpan = Math.max(...Object.values(LAYOUT.registry).map((r) => r.span));
			const b = Buffer.alloc(instructionMaxSpan);
			const span = LAYOUT.encode(instruction, b);
			return b.slice(0, span);
		}
	}
}
</script>
