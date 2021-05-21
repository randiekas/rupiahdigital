<template>
	<div class="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible p-5">
	<!-- content -->
	<!-- This example requires Tailwind CSS v2.0+ -->
		<div class="mt-5 md:mt-0 md:col-span-2">
		<form action="#" method="POST">
			<div class="shadow sm:rounded-md sm:overflow-hidden">
			<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
				<h1 class="text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4">Wallet</h1>
				<p class="text-xl tracking-tight mb-10 text-gray-900">Kelola SOL Wallet anda, disini anda bisa topup, transfer, hingga belanja menggunakan saldo SOL anda</p>

				<div>
				<label for="about" class="block text-sm font-medium text-gray-700">
					Saldo Wallet
				</label>
				<div class="mt-1">
					<p class="text-4xl text-gray-900">{{dompet.saldo}} SOL</p>
				</div>
				</div>

				<div class="grid grid-cols-3 gap-6">
				<div class="col-span-3 sm:col-span-2">
					<label for="company_website" class="block text-sm font-medium text-gray-700">
					Alamat Wallet
					</label>
					<div class="mt-1 flex rounded-md shadow-sm">
						<input type="text" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300" :value="dompet.pubKey">
						<button type="button" class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
							Salin
						</button>
						
					</div>
				</div>
				</div>

				<div>
				<label class="block text-sm font-medium text-gray-700">
					Keystore File
				</label>
				<div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
					<div class="space-y-1 text-center">
						
					<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text mx-auto h-12 w-12 text-gray-400"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
					<div class="flex text-sm text-gray-600">
						<label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
							<button 
								v-on:click="handleDownloadKeypair"
								class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm nuxt-link-active" type="button">
								Download File Wallet
							</button>
							<input id="file-upload" name="file-upload" type="file" class="sr-only">
						</label>
					</div>
					<p class="text-xs text-gray-500">
						JSON
					</p>
					</div>
				</div>
				</div>
			</div>
			<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
				<button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				Save
				</button>
			</div>
			</div>
		</form>
		</div>
	<!-- content -->
		
	</div>

</template>

<script>
import { Keypair, Connection, AccountInfo, PublicKey } from '@solana/web3.js';
const WALLET_URL = "https://api.devnet.solana.com"
export default {
	props: ["dompet"],
	data:() => ({
		active: 'guide'
	}),
	mounted:async ()=>{
		
	},
	methods:{
		handleDownloadKeypair: function(){
			
			//Convert JSON Array to string.
			var json = `[${this.dompet.secretKey}]`
	
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
	}
}
</script>