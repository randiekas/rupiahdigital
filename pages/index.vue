<template>
	<div>
		<div> 
			<v-container>
				<v-row>
					<v-col xs="12" md="5">
						<h1 class="mt-16 display-2">Rupiah Digital - Your Gateway to Access Digital Assets using Indonesian Rupiah Stablecoin</h1>
						<p class="mt-4">Rupiah Digital (IDRS) is a stablecoin powered by Solana Blockchain (SOL). By using Solana we provide the most scalable and cheapest Indonesian Rupiah Stablecoin that can be used as a gateway to access digital assets.</p>
						<v-btn
							color="primary"
							v-on:click="handleSubmit">
							<v-icon left>
								mdi-google
							</v-icon>
							Get IDRS Now
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
				<v-row class="mt-4 mb-4">
					<v-col md="2">
						<h1 class="display-2">Sponsor</h1>
					</v-col>
					<v-col md="5" class="text-center">
						<a
							href="https://solana.com"
							target="_blank">
							<v-img 
								src="/sponsor-solana.svg"/>
						</a>
					</v-col>
					<v-col md="5">
						<v-btn 
							x-large
							href="https://projectserum.com"
							target="_blank">
							<v-avatar left>
								<v-img 
									src="/sponsor-serum.svg"/>
							</v-avatar>
							Project Serum
						</v-btn>
						
					</v-col>
				</v-row>
			</v-container>
		</div>

		<div> 
			<v-container>
				<h1 class="mt-16 display-2 text-center">
					Our Values
				</h1>
				<v-row class="mt-16">
					<v-col xs="12" md="4">
						<v-icon size="48">
								mdi-clock-fast
							</v-icon>
						<h1 class="mt-4 display-1">Fast Settlement</h1>
						<p class="mt-4">Get instant confirmation when purchase, send, or withdraw IDRS</p>
					</v-col>
					<v-col xs="12" md="4">
						<v-icon size="48">
							mdi-speedometer-slow
						</v-icon>
						<h1 class="mt-4 display-1">Cheap Cost</h1>
						<p class="mt-4">Almost zero cost when purchase, send, or withdraw IDRS</p>
					</v-col>
					<v-col xs="12" md="4">
						<v-icon size="48">
							mdi-cash-multiple
						</v-icon>
						<h1 class="mt-4 display-1">Scalable Solution</h1>
						<p class="mt-4">Suitable for business purpose with huge number of transactions</p>
					</v-col>
					
				</v-row>
			</v-container>
		</div>

		<div class=""> 
			<v-container class="py-16">
				<h1 class="display-2 text-center">
					How to Purchase and Sell IDRS
				</h1>
				<v-row class="mt-16">
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

						
					</v-col>
					<v-col xs="12" md="6">
						
						<h3>
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
							v-on:click="handleSubmit">
							<v-icon left>
								mdi-google
							</v-icon>
							Get IDRS Now
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
			
			let user = this.$auth.user
			let tipe = this.$auth.$storage.getUniversal("loginType")
			if(!user){
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
			}else{
				this.$router.push(`/apps/beranda`) 
			}
			
		}
	}
}
</script>
