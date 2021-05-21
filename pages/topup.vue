<template>
	<div class="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible p-5">
	<!-- content -->
	<!-- This example requires Tailwind CSS v2.0+ -->
		<div class="mt-5 md:mt-0 md:col-span-2">
		<form action="#" method="POST">
			<div class="shadow sm:rounded-md sm:overflow-hidden">
			<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
				<h1 class="text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4">Topup</h1>
				<p class="text-xl tracking-tight mb-10 text-gray-900">Kamu bisa topup saldo sol dengan menggunakan berbagai pembayaran</p>

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
					Jumlah Transfer
					</label>
					<div class="mt-1 flex rounded-md shadow-sm">
						<input type="text" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full  rounded-md sm:text-sm border-gray-300" value="0839829783278">
					</div>
				</div>
				</div>

				<div class="grid grid-cols-3 gap-6">
				<div class="col-span-3 sm:col-span-2">
					<label for="company_website" class="block text-sm font-medium text-gray-700">
					Metode Pembayaran
					</label>
					<select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
						<option>Alfamart</option>
						<option>Gopay</option>
						<option>Shopee Pay</option>
					</select>
				</div>
				</div>

				<div>
				</div>
			</div>
			<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
				<button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				Lanjutkan
				</button>
			</div>
			</div>
		</form>
		</div>
	<!-- content -->
		
	</div>

</template>

<script>
export default {
	props: ['dompet'],
	data:() => ({
		active: 'guide'
	}),
	mounted:async ()=>{
		
	}
}
</script>

<style>