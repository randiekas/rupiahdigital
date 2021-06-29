<template>
	<div>
		<div> 
			<v-container>
				<v-row>
					<v-col xs="12" md="5">
						<h1 class="mt-16 display-2">The Most Adopted Indonesian Rupiah Stablecoin</h1>
						<p class="mt-4">Rupiah Token (IDRS) enables you to use Indonesian Rupiah directly on top of Ethereum & Binance Chain. You can use IDRS to trade on our Crypto-Exchange Partners</p>
						<v-btn
							color="primary"
							v-on:click="handleSubmit">
							<v-icon left>
								mdi-google
							</v-icon>
							Mulai Sekarang
						</v-btn>
					</v-col>
					<v-col xs="12" md="7">
						<!-- <lottie-animation
							path="/home-banner.json"/> -->
						<lottie-animation
							path="home-banner.json"
							:loop="true"
							:autoPlay="true"
							:speed="1"
							:width="350"
							:height="350"/>
						<!-- <v-img width="400" class="float-right" src="https://rupiahtoken.com/static/images/illustrations/hero-home.svg"/> -->
					</v-col>
				</v-row>
			</v-container>
		</div>

		<div class="primary white--text mt-16"> 
			<v-container>
				<v-row>
					<v-col xs="12" md="6">
						<h1 class="mt-4 display-2">Rp. 1.000.000</h1>
						<p class="mt-4">Total Circulating Supply</p>
					</v-col>
					<v-col xs="12" md="2" class="text-center">
						<h1 class="mt-4 display-2">100+</h1>
						<p class="mt-4">
							<v-icon left color="white">
								mdi-account-multiple-check-outline
							</v-icon>
							Registered Users
						</p>
					</v-col>
					<v-col xs="12" md="2" class="text-center">
						<h1 class="mt-4 display-2">100+</h1>
						<p class="mt-4">
							<v-icon left color="white">
								mdi-account-supervisor-outline
							</v-icon>
							Community
						</p>
					</v-col>
					<v-col xs="12" md="2" class="text-center">
						<h1 class="mt-4 display-2">100+</h1>
						<p class="mt-4">
							<v-icon left color="white">
								mdi-storefront-outline
							</v-icon>
							Online Store
						</p>
					</v-col>
				</v-row>
			</v-container>
		</div>

		<div> 
			<v-container>
				<h1 class="mt-16 display-2 text-center">
					100++ orang telah memilih <br/> Rupiah Digital inilah alasannya
				</h1>
				<v-row class="mt-16">
					<v-col xs="12" md="4">
						<v-icon size="48">
								mdi-scale-balance
							</v-icon>
						<h1 class="mt-4 display-1">Stable</h1>
						<p class="mt-4">IDRS is the first crypto-asset which price is intended to mimic the value of Indonesian Rupiah.</p>
					</v-col>
					<v-col xs="12" md="4">
						<v-icon size="48">
							mdi-bank-check
						</v-icon>
						<h1 class="mt-4 display-1">Reliable</h1>
						<p class="mt-4">IDRS leverages the world-renowned security and transparency of major public Blockchains</p>
					</v-col>
					<v-col xs="12" md="4">
						<v-icon size="48">
							mdi-lock-check
						</v-icon>
						<h1 class="mt-4 display-1">Secure</h1>
						<p class="mt-4">Our IDRS Smart Contract has been audited by CertiK. You can find our certificate at the bottom of this website</p>
					</v-col>
					<v-col xs="12" md="4">
						<v-icon size="48">
							mdi-bank-transfer
						</v-icon>
						<h1 class="mt-4 display-1">Fast & Borderless</h1>
						<p class="mt-4">You can send IDRS to anyone, anytime, and anywhere within minutes, thanks to the power of Blockchain</p>
					</v-col>
					<v-col xs="12" md="4">
						<v-icon size="48">
							mdi-certificate-outline
						</v-icon>
						<h1 class="mt-4 display-1">Trusted</h1>
						<p class="mt-4">The circulating IDRS token is regularly audited by an independent auditor</p>
					</v-col>
					
				</v-row>
			</v-container>
		</div>

		<div class="grey lighten-4"> 
			<v-container class="py-16">
				<h1 class="display-2 text-center">
					How to Purchase and Sell IDRS
				</h1>
				<v-row class="mt-16">
					<v-col xs="12" md="6" class="text-center">
						<v-img width="80%" src="/purchase-sell.svg"/>
					</v-col>
					<v-col xs="12" md="6">
						<!-- stepper -->
						<h3>
							Purchase IDRS using Rupiah
						</h3>
						<v-stepper vertical elevation="0" class="mt-4">
							
							<v-stepper-step step="1">
								You send Rupiah via our website
							</v-stepper-step>
							<v-stepper-content step="1">
							</v-stepper-content>


							<v-stepper-step step="2">
								We mint the equivalent amount of IDRS on the Solana Blockchain
							</v-stepper-step>
							<v-stepper-content step="2">
							</v-stepper-content>



							<v-stepper-step step="3">
								We send the IDRS to your IDRS wallet
							</v-stepper-step>
							
							<v-stepper-content step="3">
							</v-stepper-content>
						</v-stepper>

						
						<h3 class="mt-8">
							Withdraw IDRS back to Rupiah
						</h3>
						<v-stepper vertical elevation="0" class="mt-4">
							
							<v-stepper-step step="1">
								You send IDRS via our website
							</v-stepper-step>
							<v-stepper-content step="1">
							</v-stepper-content>


							<v-stepper-step step="2">
								We burn the IDRS from the Ethereum Blockchain to reduce total circulating supply
							</v-stepper-step>
							<v-stepper-content step="2">
							</v-stepper-content>



							<v-stepper-step step="3">
								You will receive the amount of Rupiah to your bank account
							</v-stepper-step>
							
							<v-stepper-content step="3">
							</v-stepper-content>
						</v-stepper>
							
						<!-- stepper -->
					</v-col>
				</v-row>
			</v-container>
		</div>
		<div class="primary white--text px-16"> 
			<v-container class="px-16">
				<v-row>
					<v-col xs="12" md="8">
						<h1 class="mt-4 display-2">Ready to Get Started?</h1>
						<p class="mt-4">Create account to convert your Rupiah into IDRS, or IDRS into Rupiah.</p>
					</v-col>
					<v-col xs="12" md="4" class="text-center justify-center align-center d-flex">
						<v-btn
							color="white"
							v-on:click="handleSubmit">
							<v-icon left>
								mdi-google
							</v-icon>
							Mulai Sekarang
						</v-btn>
					</v-col>
					
				</v-row>
			</v-container>
		</div>

	</div>
	<!-- <div class="d-flex" style="height:100vh;">
	<v-col class="mx-auto my-auto" xs="12" md="8" style="justify-content:center">
		<v-card elevation="4">
			<v-row no-gutters>
			<v-col xs="12" md="5" class="primary d-flex py-4" cols="12">
				<div class="mx-auto my-auto text-center">
					<v-icon color="white" size="64">mdi-school</v-icon>
					<p class="display-1 white--text">IDISI</p>
					<p class="subtitle-2 white--text">Sistem Informasi Sekolah</p>
				</div>
			</v-col>
			<v-col xs="12" md="7">
				<v-card-title>Masuk</v-card-title>
				<v-card-subtitle class="pb-0">Gunakan akun email untuk melanjutkan</v-card-subtitle>
				<v-card-text>
					<v-radio-group v-model="roleDipilih">
						<v-radio
							v-for="(item, index) in role"
							:key="index"
							:label="item"
							:value="item.replace('calon siswa', 'calon')"
						></v-radio>
					</v-radio-group>
					<div class="text-right">
							<v-btn 
								v-on:click="handleSubmit"
								color="primary">
								<v-icon left>mdi-google</v-icon>
								Masuk
							</v-btn>
						</div>
				</v-card-text>
			</v-col>
			</v-row>
		</v-card>
	</v-col>
	</div> -->
</template>
<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs
export default {
	layout:'blank',
	components: {
		LottieAnimation
	},
	data: () => ({
		
    }),
	methods:{
		handleSubmit:function(){
			// if(this.roleDipilih!="calon" && this.roleDipilih!="sekolah"){
			// 	alert("Maaf, hari ini akses tersebut belum tersedia. akan tersedia besok")
			// 	return false
			// }
			this.error = null
			this.$auth.$storage.setUniversal("loginType", 'member')
			return this.$auth
				.loginWith('google')
				.catch((err) => {
					// eslint-disable-next-line no-console
					console.error(err)
					this.error = err.response?.data
				})
		}
	}
}
</script>
