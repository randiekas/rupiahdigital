<template>
	
	<div class="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible p-5">
		<!-- modal berhasil -->
		<Modal v-if="popup">
			<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
				<div class="sm:flex sm:items-start">
				<div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
					<!-- Heroicon name: outline/exclamation -->
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-plus h-6 w-6 text-green-600"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
					
				</div>
				<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
					<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
					Transfer Berhasil
					</h3>
					<div class="mt-2">
					<p class="text-sm text-gray-500">
						Kamu berhasil mengirim salo sol
					</p>
					

					</div>
				</div>
				</div>
			</div>
			<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
				<button 
					v-on:click="handleTutupPopup"
					type="button" to="/" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
					Ok
				</button>
			</div>
		</Modal>
		<!-- modal memproses transaksi-->
		<Modal v-if="processing">
			<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
				<div class="sm:flex sm:items-start">
				<div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
					<!-- Heroicon name: outline/exclamation -->
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader h-6 w-6 text-green-600"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
					
				</div>
				<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
					<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
						Mohon Tunggu
					</h3>
					<div class="mt-2">
					<p class="text-sm text-gray-500">
						Sedang mengirim saldo ...
					</p>
					

					</div>
				</div>
				</div>
			</div>
		</Modal>
	<!-- content -->
	<!-- This example requires Tailwind CSS v2.0+ -->
		<div class="mt-5 md:mt-0 md:col-span-2">
		<form action="#" method="POST">
			<div class="shadow sm:rounded-md sm:overflow-hidden">
			<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
				<h1 class="text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4">Transfer</h1>
				<p class="text-xl tracking-tight mb-10 text-gray-900">Transfer sesama saldo sol anda</p>

				<div>
				<label for="about" class="block text-sm font-medium text-gray-700">
					Saldo Wallet
				</label>
				<div class="mt-1">
					<p class="text-4xl text-gray-900">{{ dompet.saldo }} SOL</p>
				</div>
				</div>

				<div class="grid grid-cols-3 gap-6">
				<div class="col-span-3 sm:col-span-2">
					<label for="company_website" class="block text-sm font-medium text-gray-700">
					Alamat Wallet Tujuan
					</label>
					<div class="mt-1 flex rounded-md shadow-sm">
						<input v-model="destPubKey" type="text" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full  rounded-md sm:text-sm border-gray-300">
					</div>
				</div>
				</div>

				<div class="grid grid-cols-3 gap-6">
				<div class="col-span-3 sm:col-span-2">
					<label for="company_website" class="block text-sm font-medium text-gray-700">
					Jumlah Transfer
					</label>
					<div class="mt-1 flex rounded-md shadow-sm">
						<input v-model.number="jumlah_transfer" type="text" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full  rounded-md sm:text-sm border-gray-300">
					</div>
				</div>
				</div>

				<div>
				</div>
			</div>
			<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
				<button 
					v-on:click="handleTransfer"
					type="button" 
					class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					Kirim
				</button>
			</div>
			</div>
		</form>
		</div>
	<!-- content -->
		
	</div>

</template>

<script>
import { Account, PublicKey, Transaction, SystemProgram, sendAndConfirmTransaction } from '@solana/web3.js';
const WALLET_URL = "https://api.devnet.solana.com"
export default {
	props: ['dompet', 'koneksi', 'handleReloadSaldo'],
	data:() => ({
		popup:false,
		processing:false,
		destPubKey: '',
		jumlah_transfer:0,
		active: 'guide'
	}),
	mounted:async ()=>{
		
	},
	methods:{
		handleTransfer:async function (){
			this.processing		= true
			const transaction = new Transaction().add(
				SystemProgram.transfer({
					fromPubkey: new PublicKey(this.dompet.pubKey),
					toPubkey: new PublicKey(this.destPubKey),
					lamports:this.jumlah_transfer*1000000000,
				}),
				
			);
			console.log("mengirim")
			const akun		= new Account(new Uint8Array(JSON.parse(`[${this.dompet.secretKey}]`)))
			console.log(akun.publicKey.toString())
			const signers			= [akun]
			const signedTransaksi	= await sendAndConfirmTransaction(this.koneksi, transaction, signers)
			// const signedTransaksi	= (await this.koneksi.sendTransaction(transaction, signers))
			console.log(signedTransaksi)
			this.processing			= false
			this.popup				= true
			// const transaksi		= SystemProgram.transfer({
			// 	fromPubkey: this.dompet.pubKey,
			// 	toPubkey: destinationAddress,
			// 	lamports: sendAmount
			// });
			// console.log(transaksi)
		},
		handleTutupPopup: function(){
			this.handleReloadSaldo()
			this.popup				= false
		}
	}
}
</script>
