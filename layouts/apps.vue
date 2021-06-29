<template>
	<v-app>
		<v-navigation-drawer
			permanent
			app>

			<v-list>
				<v-list-item class="px-2">
					<v-list-item-avatar>
					<v-img :src="user.picture"></v-img>
					</v-list-item-avatar>
				</v-list-item>

				<v-list-item link>
					<v-list-item-content>
					<v-list-item-title class="title">
						{{ user.name }}
					</v-list-item-title>
					<v-list-item-subtitle>{{ tipe }}</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</v-list>

			<v-divider></v-divider>

			<v-list>
				<v-list-item
					color="primary"
					to="/apps/beranda">
					<v-list-item-action>
						<v-icon>mdi-apps</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="'Beranda'" />
					</v-list-item-content>
				</v-list-item>
				<v-list-item
					v-for="(item, i) in apps[tipe]"
					:key="i"
					:to="item.link"
					color="primary">
					<v-list-item-action>
						<v-icon>{{ item.ikon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="item.nama" />
					</v-list-item-content>
				</v-list-item>
				<v-list-item
					color="primary"
					href="/">
					<v-list-item-action>
						<v-icon>mdi-logout</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="'Keluar'" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-main>
			
			<nuxt-child
				:getAkun="getAkun"
				:getAkunIDRS="getAkunIDRS"
				:getDompet="getDompet"
				:getSupply="getSupply"
				:getSaldoIDRS="getSaldoIDRS"
				:getKoneksi="getKoneksi"
				:handleGetDataDompet="handleGetDataDompet"
				:handelUpdateSaldoIDRS="handelUpdateSaldoIDRS"
				:convertCurrency="convertCurrency"/>
			
		</v-main>

		<!-- form wallet -->
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
					:disabled="isValid()">
					Simpan
				</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<!-- form login-->
		<v-dialog
			v-if="dompet.length>0 && akun===false"
			v-model="formMasuk"
			persistent
			max-width="600px">
			<v-card>
				<v-card-title>
				<span class="text-h5">Masuk</span>
				</v-card-title>
				<v-card-text>
				<v-container>
					<v-text-field
						class="mt-4"
						outlined
						v-model="sandiTeks"
						label="Masukkan Sandi"
						hint="Please enter a password."
						type="password"
						required
						v-on:keyup.enter="handelMasuk"/>
				</v-container>
				</v-card-text>
				<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
					text
					to="/">
					Batal
				</v-btn>
				<v-btn
					class="px-8"
					color="primary"
					@click="handelMasuk">
					Masuk
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
	</v-app>
</template>

<script>
import * as bip39 from 'bip39';
import { derivePath } from 'ed25519-hd-key';
import { Keypair } from '@solana/web3.js';
import { pbkdf2 } from "crypto"
import { randomBytes, secretbox } from "tweetnacl"
import bs58 from "bs58"


import { Connection, PublicKey } from '@solana/web3.js';
const WALLET_URL 	= "https://api.devnet.solana.com"
const TOKEN_IDRS	= "BSPBtfc6z9DC5XseYfG4xcvYqyRTTvvCWGD3k1xWKXem"
export default {
	beforeMount: async function (){
		const koneksi	= new Connection(WALLET_URL)
		const publicKeyTokenIDRS	= new PublicKey(TOKEN_IDRS)
		this.supply		= (await koneksi.getTokenSupply(publicKeyTokenIDRS)).value.amount
		this.handleGetDataDompet()
		this.koneksi	= koneksi
	},
	data () {
		let user = this.$auth.user
		let tipe = this.$auth.$storage.getUniversal("loginType")
		if(!user){
			this.$router.push(`/`) 
		}
		return {
			user,
			clipped: false,
			fixed: false,
			right: true,
			rightDrawer: false,
			title: 'IDISI',
			tipe,
			apps:{
				'member': [
					{
						"ikon": "mdi-wallet",
						"nama":"Wallet",
						"deskripsi":"Sistem Pengelolaan Penerimaan Peserta Didik Baru",
						"link":"/apps/dompet"
					},
					{
						"ikon": "mdi-cash-100",
						"nama":"Beli Token",
						"deskripsi":"Sistem Pengelolaan Data Akademik Terpadu",
						"link":"/apps/beli"
					},
					{
						"ikon": "mdi-cash-multiple",
						"nama":"Transfer Token",
						"deskripsi":"Sistem Pengelolaan Data Akademik Terpadu",
						"link":"/apps/transfer"
					},
					{
						"ikon": "mdi-bank-transfer",
						"nama":"Withdraw",
						"deskripsi":"Sistem Pengelolaan Data Keuangan Terpadu",
						"link":"/apps/withdraw"
					},
				],
			},
			koneksi: false,
			dompet: [],
			supply: 0,
			akun:false,
			akunIDRS:false,
			saldoIDRS:0,
			formMasuk:true,


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
		convertCurrency(numberValue) {
			numberValue = Math.ceil(numberValue)
			let rupiahValue = ''
			let angkaRev = numberValue.toString().split('').reverse().join('')
			for (let i = 0; i < angkaRev.length; i++) if (i % 3 === 0) rupiahValue += angkaRev.substr(i, 3) + '.'
			return rupiahValue.split('', rupiahValue.length - 1).reverse().join('') + ''
		},
		handleGetDataDompet: async function(){
			this.$api.$get(`api/v1/rupiah/dompet/data`).then((resp)=>{
				if(resp.status){	
					this.$auth.$storage.setUniversal("dompet", JSON.stringify(resp.data))
					this.dompet	= resp.data
					if(this.dompet.length===0){
						this.handelBukaFormDompet()
					}
					// redirect('/apps/beranda')
				}
			})
		},
		getAkun: function(){
			return this.akun
		},
		getAkunIDRS: function(){
			return this.akunIDRS
		},
		getDompet: function(){
			// console.log(this.dompet)
			return this.dompet
		},
		getSupply: function(){
			// console.log(this.dompet)
			return this.supply
		},
		getSaldoIDRS: function(){
			// console.log(this.dompet)
			return this.saldoIDRS
		},
		getKoneksi: function(){
			return this.koneksi 
		},
		isValid: function(){
			
			return !bip39.validateMnemonic(this.seedTeks) && sandiTeks!="" && seedAlreadyCopy
		},
		handelBukaFormDompet: function(){
			this.seedTeks	= bip39.generateMnemonic(256)
			this.dialog		= true
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
		handelMasuk: async function(){
			
			const lockedData = localStorage.getItem("locked")
			const {
				encrypted: encodedEncrypted,
				nonce: encodedNonce,
				salt: encodedSalt,
				iterations,
				digest,
			} = JSON.parse(lockedData)
			const encrypted = bs58.decode(encodedEncrypted)
			const nonce = bs58.decode(encodedNonce)
			const salt = bs58.decode(encodedSalt)
			const key = await this.deriveEncryptionKey(this.sandiTeks, salt, iterations, digest)
			const plaintext = secretbox.open(encrypted, nonce, key)
			if (!plaintext) {
				alert("Incorrect password")
				return ;
			}
			const decodedPlaintext = new Buffer(plaintext).toString()
			const { mnemonic, seed } = JSON.parse(decodedPlaintext)
			
			const derivedSeed 		= derivePath(`m/44'/501'/0'/0'`, seed).key
			const akun				= Keypair.fromSeed(derivedSeed)
			this.akun				= akun

			const publicKeyTokenIDRS	= new PublicKey(TOKEN_IDRS)
			
			let listWallet		= await this.koneksi.getParsedTokenAccountsByOwner(this.akun.publicKey, {mint:publicKeyTokenIDRS})
			if(listWallet.value.length){
				this.akunIDRS	= listWallet.value[0]
				this.handelUpdateSaldoIDRS()

				const payload		= Object.assign({}, this.dompet[0])
				payload.alamat_idrs	= this.akunIDRS.pubkey.toString()
				this.$api.$post(`api/v1/rupiah/dompet/ubah`, payload).then((resp)=>{
					if(resp.status){	
						this.dialog				= false
						this.handleGetDataDompet()
					}
				})
			}
			
		},
		deriveEncryptionKey: async function(password,salt,iterations,digest){
			return new Promise((resolve, reject) =>
				pbkdf2(password, salt, iterations, secretbox.keyLength, digest, (err, key) =>
				err ? reject(err) : resolve(key)
				)
			)
		},
		handelUpdateSaldoIDRS: async function(){
			const saldo 	= (await this.koneksi.getTokenAccountBalance(this.akunIDRS.pubkey)).value.amount
			this.saldoIDRS	= saldo
		}
	}
}
</script>
<style>
.border--primary{
	border: 1px solid #4268F6!important
}
.border--success{
	border: 1px solid #4caf50!important
}
.border--error{
	border: 1px solid #ff5252!important
}
</style>