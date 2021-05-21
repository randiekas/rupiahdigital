<template>
	<div>
	<div class="relative bg-white overflow-hidden">
		<div class="max-w-7xl mx-auto">
			<div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
			<svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
				<polygon points="50,0 100,0 50,100 0,100" />
			</svg>

			<div>
				<div class="relative pt-6 px-4 sm:px-6 lg:px-8">
				<nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
					<div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
					<div class="flex items-center justify-between w-full md:w-auto">
						<a href="#">
						<span class="sr-only">Workflow</span>
						<img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg">
						</a>
						<div class="-mr-2 flex items-center md:hidden">
						<button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
							<span class="sr-only">Open main menu</span>
							<!-- Heroicon name: outline/menu -->
							<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
						</div>
					</div>
					</div>
					<div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
					<a href="#" class="font-medium text-gray-500 hover:text-gray-900">Beranda</a>

					<a href="#" class="font-medium text-gray-500 hover:text-gray-900">Tentang</a>
					
					<nuxt-link to="beranda" class="font-medium text-indigo-600 hover:text-indigo-500">Buat</nuxt-link>
					<nuxt-link to="beranda" class="font-medium text-indigo-600 hover:text-indigo-500">Masuk</nuxt-link>
					</div>
				</nav>
				</div>

				<!--
				Mobile menu, show/hide based on menu open state.

				Entering: "duration-150 ease-out"
					From: "opacity-0 scale-95"
					To: "opacity-100 scale-100"
				Leaving: "duration-100 ease-in"
					From: "opacity-100 scale-100"
					To: "opacity-0 scale-95"
				-->
				<div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
				<div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
					<div class="px-5 pt-4 flex items-center justify-between">
					<div>
						<svg fill="none" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg" class="h-8 w-auto">
							<path fill="#4f46e5" d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z"/>
							<path fill="#4f46e5" d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"/>
						</svg>
					</div>
					<div class="-mr-2">
						<button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
						<span class="sr-only">Close main menu</span>
						<!-- Heroicon name: outline/x -->
						<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
						</button>
					</div>
					</div>
					<div class="px-2 pt-2 pb-3 space-y-1">
					<a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Product</a>

					<a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Features</a>

					<a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Marketplace</a>

					<a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Company</a>
					</div>
					<a href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
					Log in
					</a>
				</div>
				</div>
			</div>

			<main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
				<div class="sm:text-center lg:text-left">
				<h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
					<span class="block xl:inline">SOL ID</span> <br/>
					<span class="block text-indigo-600 xl:inline">Wallet</span>
				</h1>
				<p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
					Kelola dana wallet anda di platform ini
				</p>
				<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
					<div class="rounded-md shadow">
					<nuxt-link to="beranda" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
						Buat Wallet
					</nuxt-link>
					</div>
					<div class="mt-3 sm:mt-0 sm:ml-3">
					<nuxt-link to="beranda" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
						Masuk Wallet
					</nuxt-link>
					</div>
				</div>
				</div>
			</main>
			</div>
		</div>
		<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
			<img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="">
		</div>

		</div>

		<!-- This example requires Tailwind CSS v2.0+ -->
		<div class="bg-gray-50">
			<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
				<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
				<span class="block">Ready to dive in?</span>
				<span class="block text-indigo-600">Start your free trial today.</span>
				</h2>
				<div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
				<div class="inline-flex rounded-md shadow">
					<a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
					Get started
					</a>
				</div>
				<div class="ml-3 inline-flex rounded-md shadow">
					<a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
					Learn more
					</a>
				</div>
				</div>
			</div>
		</div>

		<div class="py-12 bg-white">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="lg:text-center">
				<h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
				<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
					A better way to send money
				</p>
				<p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
					Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
				</p>
				</div>

				<div class="mt-10">
				<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
					<div class="relative">
					<dt>
						<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
						<!-- Heroicon name: outline/globe-alt -->
						<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
						</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">Competitive exchange rates</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
					</dd>
					</div>

					<div class="relative">
					<dt>
						<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
						<!-- Heroicon name: outline/scale -->
						<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
						</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">No hidden fees</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
					</dd>
					</div>

					<div class="relative">
					<dt>
						<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
						<!-- Heroicon name: outline/lightning-bolt -->
						<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">Transfers are instant</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
					</dd>
					</div>

					<div class="relative">
					<dt>
						<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
						<!-- Heroicon name: outline/annotation -->
						<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
						</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">Mobile notifications</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
					</dd>
					</div>
				</dl>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import { Keypair, Connection, AccountInfo, PublicKey } from '@solana/web3.js';
// const WALLET_URL = "https://api.devnet.solana.com"
export default {
	layout: 'landing',
	data:() => ({
		active: 'guide'
	}),
	mounted:async ()=>{
		
	}
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
