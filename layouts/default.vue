<template>
	<div class="lg:flex">
		<!-- modal intro -->
		<Modal v-if="step==='intro'">
			<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
				<div class="sm:flex sm:items-start">
				<div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
					<!-- Heroicon name: outline/exclamation -->
					<svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
					</svg>
				</div>
				<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
					<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
					Selamat datang di IDRS
					</h3>
					<div class="mt-2">
					<p class="text-sm text-gray-500">
						Apa itu <b>IDRS</b> ? <br/>
						IDRS adalah crypto wallet untuk solana.<br/>
						mulai dari membuat wallet solana, topup, transfer hingga membelanjakan solana wallet kamu.
					</p>
					</div>
				</div>
				</div>
			</div>
			<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
				<nuxt-link to="/" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
				Batal
				</nuxt-link>
				<button 
					v-on:click="step='masukAkun'"
					type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
					Masuk Wallet
				</button>
				<button 
					v-on:click="step='buatAkun'"
					type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
					Buat Wallet
				</button>
			</div>
		</Modal>
		<!-- modal create -->
		<Modal v-if="step==='buatAkun'">
			<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
				<div class="sm:flex sm:items-start">
				<div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
					<!-- Heroicon name: outline/exclamation -->
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-plus h-6 w-6 text-green-600"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
					
				</div>
				<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
					<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
					Membuat IDRS Wallet
					</h3>
					<div class="mt-2">
					<p class="text-sm text-gray-500">
						Setelah membuat wallet, anda akan mendapatkan file untuk mengakses wallet, pastikan anda menyimpanya dengan baik. <br/><br/>
						Jika anda lupa password atau kehilangan file nya, maka tidak ada seorangpun yang dapat mengembalikan wallet anda.
					</p>
					<div class="mt-2" v-if="akun && !memproses">
						<label for="company_website" class="block text-sm font-medium text-gray-700">
						File Wallet
						</label>
						<div class="mt-1">
							<button 
								v-on:click="handleDownloadKeypair"
								class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm nuxt-link-active" type="button">
								Download File Wallet
							</button>
						</div>
					</div>

					</div>
				</div>
				</div>
			</div>
			<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
				<nuxt-link to="/" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
					Batal
				</nuxt-link>
				<button 
					v-if="akun===false"
					v-on:click="handleBuatWallet"
					type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
					Buat Wallet
				</button>
				<button 
					v-else-if="memproses===true"
					type="button" 
					class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm ..." disabled>
					<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader animate-spin h-5 w-5 mr-3"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>	
					Memproes ...
				</button>
				<button 
					v-else
					v-on:click="step='masukAkun'"
					type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
					Masuk
				</button>
			</div>
		</Modal>
		<!-- modal masuk -->
		<Modal v-if="step==='masukAkun'">
			<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
				<div class="sm:flex sm:items-start">
				<div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
					<!-- Heroicon name: outline/exclamation -->
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-plus h-6 w-6 text-green-600"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
					
				</div>
				<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
					<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
					Masuk IDRS Wallet
					</h3>
					<div class="mt-2">
					<p class="text-sm text-gray-500">
						Masuk wallet menggunakan file wallet yang sudah dibuat sebelumnya
					</p>
					
					<div class="mt-2">
						<label for="company_website" class="block text-sm font-medium text-gray-700">
						File Wallet
						</label>
						<div class="mt-1">
							<button 
								onclick='document.getElementById("secretKey").click()'
								class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm nuxt-link-active" 
								type="file">
								Pilih File
							</button>
							<input v-on:change="handleOnChangeFile" type="file" class="hidden" id="secretKey" accept=".json"/>
						</div>
					</div>

					<div class="mt-2">
						<label for="company_website" class="block text-sm font-medium text-gray-700">
						Alamat Wallet
						</label>
						<div class="mt-1 flex rounded-md shadow-sm">
							<input readonly type="text" v-model="akunIDRS" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full  rounded-md sm:text-sm border-gray-300">
						</div>
					</div>
					

					</div>
				</div>
				</div>
			</div>
			<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
				<nuxt-link to="/" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
				Batal
				</nuxt-link>
				<button 
					v-on:click="step='selesai'"
					v-if="pubKey!='' && memproses==false"
					type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
					Lanjutkan
				</button>
				<button 
					v-else-if="memproses===true && pubKey!=''"
					type="button" 
					class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm ..." disabled>
					<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader animate-spin h-5 w-5 mr-3"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>	
					Memproes ...
				</button>
			</div>
		</Modal>
		<!-- navigasi -->
		<div class="fixed z-40 flex-none h-full w-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden ">
			
			<div class="min-w-0 flex sm:px-3 xl:px-5 mt-6">
				<svg fill="none" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg" class="h-8 w-auto">
					<path fill="#4f46e5" d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z"/>
					<path fill="#4f46e5" d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"/>
				</svg>

				<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate ml-3">
				SOL ID
				</h2>
			</div>
			<nav class="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)" id="nav">
				<ul class="nav">
					<li>
						<nuxt-link to="beranda">
						<div class="mr-3 rounded-md bg-gradient-to-br from-pink-500 to-pink-700">
							<svg class="h-6 w-6" viewbox="0 0 24 24">
							<path clip-rule="evenodd" d="M9 6C10.0929 6 11.1175 6.29218 12 6.80269V16.8027C11.1175 16.2922 10.0929 16 9 16C7.90714 16 6.88252 16.2922 6 16.8027V6.80269C6.88252 6.29218 7.90714 6 9 6Z" fill="#FFF1F2" fill-rule="evenodd"></path>
							<path clip-rule="evenodd" d="M15 6C16.0929 6 17.1175 6.29218 18 6.80269V16.8027C17.1175 16.2922 16.0929 16 15 16C13.9071 16 12.8825 16.2922 12 16.8027V6.80269C12.8825 6.29218 13.9071 6 15 6Z" fill="#FECDD3" fill-rule="evenodd"></path></svg>
						</div>Wallet
						</nuxt-link>
					</li>
					<li>
						<nuxt-link to="transfer">
						<div class="mr-3 rounded-md bg-gradient-to-br from-purple-500 to-indigo-500">
							<svg class="h-6 w-6" viewbox="0 0 24 24">
							<path d="M6 9l6-3 6 3v6l-6 3-6-3V9z" fill="#F5F3FF"></path>
							<path d="M6 9l6 3v6l-6-3V9z" fill="#DDD6FE"></path>
							<path d="M18 9l-6 3v6l6-3V9z" fill="#C4B5FD"></path></svg>
						</div>Transfer
						</nuxt-link>
					</li>
					<li>
						<nuxt-link to="topup">
						<div class="mr-3 rounded-md bg-gradient-to-br from-yellow-400 to-yellow-700">
							<svg class="h-6 w-6" viewbox="0 0 24 24">
							<path clip-rule="evenodd" d="M13.196 6.02a1 1 0 01.785 1.176l-2 10a1 1 0 01-1.961-.392l2-10a1 1 0 011.176-.784z" fill="#FDE68A" fill-rule="evenodd"></path>
							<path clip-rule="evenodd" d="M15.293 9.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L16.586 12l-1.293-1.293a1 1 0 010-1.414zM8.707 9.293a1 1 0 010 1.414L7.414 12l1.293 1.293a1 1 0 11-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0z" fill="#FDF4FF" fill-rule="evenodd"></path></svg>
						</div>Topup
						</nuxt-link>
					</li>
					<li>
						<nuxt-link to="marketplace">
						<div class="mr-3 rounded-md bg-gradient-to-br from-purple-400 to-purple-600">
							<svg class="h-6 w-6" viewBox="0 0 24 24">
								<path d="M17 13a1 1 0 011 1v3a1 1 0 01-1 1H8.5a2.5 2.5 0 010-5H17z" fill="#93C5FD"></path>
								<path d="M12.743 7.722a1 1 0 011.414 0l2.122 2.121a1 1 0 010 1.414l-6.01 6.01a2.5 2.5 0 11-3.536-3.536l6.01-6.01z" fill="#BFDBFE"></path>
								<path d="M6 7a1 1 0 011-1h3a1 1 0 011 1v8.5a2.5 2.5 0 01-5 0V7z" fill="#EFF6FF"></path>
								<path d="M9.5 15.5a1 1 0 11-2 0 1 1 0 012 0z" fill="#60A5FA"></path>
							</svg>
						</div>Marketplace
						</nuxt-link>
					</li>
					<li>
						<nuxt-link to="donasi">
						<div class="mr-3 rounded-md bg-gradient-to-br from-blue-400 to-indigo-600">
							<svg class="h-6 w-6" viewBox="0 0 24 24">
								<circle cx="12" cy="12" r="7" fill="#F3E8FF"></circle>
								<path d="M14.52 11.136a1 1 0 010 1.728l-3.016 1.759A1 1 0 0110 13.759v-3.518a1 1 0 011.504-.864l3.015 1.76z" fill="#C084FC"></path>
							</svg>
						</div>Donasi
						</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/">
						<div class="mr-3 rounded-md bg-gradient-to-br from-green-400 to-green-500">
							<svg class="h-6 w-6" viewbox="0 0 24 24">
							<path d="M8 9a1 1 0 011-1h8a1 1 0 011 1v7.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 018 16.5V9z" fill="#6EE7B7"></path>
							<path d="M15 7a1 1 0 00-1-1H7a1 1 0 00-1 1v9.5A1.5 1.5 0 007.5 18H16v-.085a1.5 1.5 0 01-1-1.415V7z" fill="#ECFDF5"></path>
							<path d="M8 8h5v4H8zM8 14h5v2H8z" fill="#A7F3D0"></path></svg>
						</div>Keluar
						</nuxt-link>
					</li>
					
				</ul>
			</nav>
		</div>
		<!-- konten -->
		<nuxt-child 
			:dompet="dompet"
			:koneksi="koneksi"
			:handleReloadSaldo="handleReloadSaldo"/>
	</div>
</template>
<script>
import * as BufferLayout from 'buffer-layout';
import { Keypair, Connection, PublicKey, SYSVAR_RENT_PUBKEY, TransactionInstruction, sendAndConfirmTransaction, Account, Transaction, SystemProgram } from '@solana/web3.js';
const WALLET_URL = "https://api.devnet.solana.com"
export default {
	data:() => ({
		memproses: false,
		akun: false,
		akunIDRS: '',
		pubKey:'',
		step:'intro', // intro, buatAkun, masukAkun, selesai
		tokenIDRS: "BSPBtfc6z9DC5XseYfG4xcvYqyRTTvvCWGD3k1xWKXem",
		dompet:{
			akunIDRS:'',
			pubKey:'',
			secretKey:'',
			saldo:0,
			saldoSupply:0,
		},
		koneksi: false
	}),
	mounted:async ()=>{
		
	},
	methods:{
		handleBuatWallet: async function(){
			this.memproses	= true
			const akun		= Keypair.generate()
			this.akun		= akun
			let koneksi		= new Connection(WALLET_URL)
			await koneksi.requestAirdrop(akun.publicKey, 1000000000)
			koneksi			= new Connection(WALLET_URL)
			await new Promise(r => setTimeout(r, 10000));
			this.memproses	= false
			// console.log(akun.publicKey.toString())
			// console.log(akun.secretKey)
		},
		handleDownloadKeypair: function(){
			//Convert JSON Array to string.
			var json = `[${this.akun.secretKey.toString()}]`
	
			//Convert JSON string to BLOB.
			json = [json];
			var blob1 = new Blob(json, { type: "text/json;charset=utf-8" });
	
			//Check the Browser.
			var isIE = false || !!document.documentMode;
			if (isIE) {
				window.navigator.msSaveBlob(blob1, "wallet.json");
			} else {
				var url = window.URL || window.webkitURL;
				const link = url.createObjectURL(blob1);
				var a = document.createElement("a");
				a.download = "wallet.json";
				a.href = link;
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			}
		},
		handleOnChangeFile: async function(e){
			if(e.target.files.length===0){
				return false
			}
			const reader = new FileReader()
			reader.onload = async (event) => {
				// const akun 		= Keypair.fromSecretKey(new Uint8Array([35,12,242,240,11,17,70,44,97,128,120,182,157,17,194,22,1,74,169,157,98,196,193,160,250,179,152,219,26,64,254,57,144,112,26,144,239,169,227,98,88,117,81,168,184,72,140,152,41,230,112,79,33,102,17,164,212,25,108,85,100,40,242,170]))
				const keypair		= Keypair.fromSecretKey(new Uint8Array(JSON.parse(event.target.result)))
				const akun 			= new PublicKey(keypair.publicKey.toString())
				const tokenIDRS		= new PublicKey(this.tokenIDRS) // menggunakan token metadata
				this.akun			= akun
				this.pubKey			= keypair.publicKey.toString()

				const koneksi		= new Connection(WALLET_URL)
				this.koneksi		= koneksi

				let saldoSupply		= await koneksi.getTokenSupply(tokenIDRS)
				let listWallet		= await koneksi.getParsedTokenAccountsByOwner(akun, {mint:tokenIDRS})
				let akunIDRS		= {}
				if(listWallet.value.length){
					akunIDRS 		= listWallet.value[0].pubkey
				}else{
					console.log("akun tidak ada");
					this.memproses	= true
					const ACCOUNT_LAYOUT 	= BufferLayout.struct([
						BufferLayout.blob(32, 'mint'),
						BufferLayout.blob(32, 'owner'),
						BufferLayout.nu64('amount'),
						BufferLayout.blob(93),
					]);
					const transaction 	= new Transaction()
					const akun_baru		= new Account()
					const lam			= await koneksi.getMinimumBalanceForRentExemption(ACCOUNT_LAYOUT.span)

					transaction.add(
						SystemProgram.createAccount({
							fromPubkey: akun,
							newAccountPubkey: akun_baru.publicKey,
							lamports: lam,
							space: ACCOUNT_LAYOUT.span,
							programId: (new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")),
						}),
					);

					const keys = [
						{ pubkey: akun_baru.publicKey, isSigner: false, isWritable: true },
						{ pubkey: (new PublicKey(this.tokenIDRS)), isSigner: false, isWritable: false },
						{ pubkey: akun, isSigner: false, isWritable: false },
						{ pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
					];

					transaction.add(
						new TransactionInstruction({
							keys,
							data: this.encodeTokenInstructionData({
								initializeAccount: {},
							}),
							programId: (new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")),
						})
					);
					
					const akunSigner		= new Account(new Uint8Array(JSON.parse(event.target.result)))
					const signers			= [akunSigner, akun_baru]
					console.log("mendaftar")
					const signedTransaksi	= await sendAndConfirmTransaction(koneksi, transaction, signers)
					console.log("mendaftar selesai")
					listWallet		= await koneksi.getParsedTokenAccountsByOwner(akun, {mint:tokenIDRS})
					akunIDRS 		= listWallet.value[0].pubkey
					console.log(signedTransaksi)
					this.memproses	= false
					
				}
				
				// let saldoSupply		= await koneksi.getTokenAccountBalance(akunIDRS)
				// let saldoSupply		= await koneksi.getTokenLargestAccounts(tokenIDRS)

				// set data
				this.akunIDRS		= akunIDRS
				
				this.dompet			= {
					akunIDRS: akunIDRS.toString(),
					pubKey: keypair.publicKey.toString(),
					secretKey: keypair.secretKey.toString(),
					saldo: 0,
					saldoSupply: saldoSupply.value.amount
				}
				this.handleReloadSaldo()

				
			}
			reader.readAsText(e.target.files[0])
		},
		handleReloadSaldo: async function(){
			const saldo 			= (await this.koneksi.getTokenAccountBalance(this.akunIDRS)).value.amount
			this.dompet.saldo		= saldo
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
<style>
body, html{
	background-color: #f3f4f6;
}
</style>
<style lang="postcss" scoped>
.nav li a{
	@apply flex items-center px-3 duration-200 py-2 text-gray-900 rounded-md cursor-pointer;
	&:hover {
		@apply bg-gray-200 text-blue-600 transition-colors;
	}
	&.nuxt-link-exact-active {
		@apply bg-gray-200 text-blue-600 transition-colors;
	}
}
</style>
