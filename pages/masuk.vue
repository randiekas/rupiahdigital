<template>
	<div>
		<center>
			Mohon tunggu ...
		</center>
	</div>
</template>
<script>
import { pbkdf2 } from "crypto"
import { randomBytes, secretbox } from "tweetnacl"
import * as BufferLayout from 'buffer-layout';
import { Keypair, Connection, PublicKey, SYSVAR_RENT_PUBKEY, TransactionInstruction, sendAndConfirmTransaction, Account, Transaction, SystemProgram } from '@solana/web3.js';
import * as bip39 from 'bip39';	
import bs58 from "bs58"

const WALLET_URL = "https://api.devnet.solana.com"

export default {
	layout:'blank',
	mounted:async ()=>{
		// const tes 			= await PublicKey.createWithSeed("sajdfn fjkhdsk asdf fdasas fdsdf asdf fd asdf fds")
		// console.log(tes)
		// console.log("hehe")
	},
	async asyncData({ $axios, $auth, redirect }) {
		
		let info			= false
		const queryString 	= window.location.href;
		const urlParams 	= new URLSearchParams(queryString)
		const token 		= `Bearer ${urlParams.get('access_token')}`
		const tipe			= $auth.$storage.getUniversal("loginType")

		
		await $axios.$post(`api/v1/akun/masuk_google`,{
			token:token,
			tipe:tipe,
			device:2,
			token_device:'',
		}).then((resp)=>{
			if(resp.status){	
				$auth.$storage.setUniversal("authToken", resp.data)
				$auth.$storage.setUniversal("_token.google", token)
				// redirect('/apps/beranda')
				window.location.href='/apps/beranda'
			}else{
				info	= resp.message
			}
		})
		return {
			info
		}
	},
	methods: {
		deriveEncryptionKey: async function(password,salt,iterations,digest){
			return new Promise((resolve, reject) =>
				pbkdf2(password, salt, iterations, secretbox.keyLength, digest, (err, key) =>
				err ? reject(err) : resolve(key)
				)
			)
		},
		handelSimpanPassword: async function(){
			const mnemonic	= "salon bulb between exclude genre pumpkin believe mystery swing oyster since angry west cook gold job place bridge lava drift annual doll credit garbage"
			const seed 		= await bip39.mnemonicToSeed(mnemonic)
			const plaintext = JSON.stringify({ mnemonic, seed })
			const password 	= "abcd1234"
			// const salt 		= new Buffer(randomBytes(16))
			// const kdf 		= "pbkdf2"
			// const iterations = 100000
			// const digest	= "sha256"
			// const key 		=  await this.deriveEncryptionKey(password, salt, iterations, digest)

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
		}
	}
}
</script>
<style>
body{
	font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */
}
</style>
