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
								<p>Alamat Solana: <br/>{{ item.alamat_solana }}</p>
								<p>Alamat IDRS: <br/>{{ item.alamat_idrs||'-' }}</p>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="primary" text :to="item.link">
									Solana
									<v-icon right dark>mdi-content-copy</v-icon>
								</v-btn>
								<v-btn color="primary" text :to="item.link">
									IDRS
									<v-icon right dark>mdi-content-copy</v-icon>
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col 
						sm="12" 
						md="3" 
						cols="12"
						v-if="getDompet().length===0">
						<v-card 
							class="border--primary" 
							hover
							v-on:click="handleOpenPopup">
							<v-card-text class="text-center my-8">
								<v-icon left color="primary">mdi-wallet-plus</v-icon>
								<v-btn color="primary" text>
									Tambah Dompet
								</v-btn>
								<!-- <div>{{item.deskripsi}}</div> -->
							</v-card-text>
							<!-- <v-card-actions>
								<v-spacer></v-spacer>
								
							</v-card-actions> -->
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</div>

		
		<Contactus/>

		<v-dialog
			v-model="dialog"
			persistent
			max-width="600px">
			<v-card>
				<v-card-title>
				<span class="text-h5">Buat/Import Dompet</span>
				</v-card-title>
				<v-card-text>
				<v-container>
					<small>
						Please save following twenty four words and keep them in a safe place
					</small>
					<v-textarea
						class="mt-4"
						outlined
						v-model="seedTeks"
						label="Masukkan Seed"
						hint="Please enter a valid BIP 39 seed phrase."
						required
						persistent-hint/>
					<v-text-field
						class="mt-4"
						outlined
						v-model="sandiTeks"
						label="Masukkan Sandi"
						hint="Please enter a password."
						type="password"
						required/>
					<v-checkbox
						v-model="seedAlreadyCopy"
						:label="`I have saved these words in a safe place.`"/>
				</v-container>
				</v-card-text>
				<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
					text
					@click="dialog = false">
					Batal
				</v-btn>
				<v-btn
					v-if="!seedAlreadyCopy"
					class="px-8"
					color="primary"
					@click="dialog = false"
					disabled>
					Simpan
				</v-btn>
				<v-btn
					v-else
					class="px-8"
					color="primary"
					@click="handleBuatDompet"
					:disabled="isValid() && seedAlreadyCopy">
					Simpan
				</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
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
import * as bip39 from 'bip39';
import { derivePath } from 'ed25519-hd-key';
import { Keypair } from '@solana/web3.js';
import { pbkdf2 } from "crypto"
import { randomBytes, secretbox } from "tweetnacl"
import bs58 from "bs58"

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
		deriveEncryptionKey: async function(password,salt,iterations,digest){
			return new Promise((resolve, reject) =>
				pbkdf2(password, salt, iterations, secretbox.keyLength, digest, (err, key) =>
				err ? reject(err) : resolve(key)
				)
			)
		},
		handleOpenPopup: function(){
			this.dialog				= true
			this.handleGenerateSeed()
		},
		handleBuatDompet:async function(){
			this.isFetching			= true
			

			const mnemonic	= this.seedTeks
			const seed 		= await bip39.mnemonicToSeed(mnemonic)
			const plaintext = JSON.stringify({ mnemonic, seed })
			const password 	= this.sandiTeks

			const salt 		= new Buffer(randomBytes(16))
			const kdf 		= "pbkdf2"
			const iterations = 100000
			const digest 	= "sha256"
			const key 		= await this.deriveEncryptionKey(password, salt, iterations, digest)
			const nonce 	= randomBytes(secretbox.nonceLength)
			const encrypted = secretbox(Buffer.from(plaintext), nonce, key)
			const locked	= JSON.stringify({
									encrypted: bs58.encode(encrypted),
									nonce: bs58.encode(nonce),
									kdf,
									salt: bs58.encode(salt),
									iterations,
									digest,
								})
			localStorage.setItem("locked", locked)


			const derivedSeed 		= derivePath(`m/44'/501'/0'/0'`, seed).key
			const akun				= Keypair.fromSeed(derivedSeed)
			const payload			= {
				nama: `Wallet ${this.getDompet().length+1}`,
				alamat_solana: akun.publicKey.toString(),
				alamat_idrs: '',
			}

			this.$api.$post(`api/v1/rupiah/dompet/buat`, payload).then((resp)=>{
				this.isFetching		= false
				this.alert			= {
					modal	: true,
					message : resp.message,
					status: resp.status
				}
				if(resp.status){	
					this.dialog				= false
					this.handleGetDataDompet()
					// redirect('/apps/beranda')
				}
			})
		},
		handleGenerateSeed: function(){
			this.seedTeks	= bip39.generateMnemonic(256)
		},
		
		isValid: function(){
			
			return !bip39.validateMnemonic(this.seedTeks) && sandiTeks!=""
		}
	}
}
</script>
