<template>
	<div class="grey lighten-4">
		<div> 
			<v-container>
				<v-row>
					<v-col xs="12" md="12" class="text-center">
						<h1 class="my-16 display-2">Frequently Asked Questions</h1>
						
					</v-col>
					<v-col xs="12" md="6" >
						<v-card 
							outlined 
							v-for="(item, index) in data.filter((item, index)=>index<3)"
							:key="index"
							v-on:click="active=index"
							class="my-2">
							<v-card-title class="d-flex justify-space-between">
								{{ item.title }}
								<v-icon right>
									mdi-chevron-down
								</v-icon>
							</v-card-title>
							<v-card-text
								v-if="index===active">
								{{ item.content }}
							</v-card-text>
						</v-card>
					</v-col>
					<v-col xs="12" md="6" >
						<v-card 
							outlined 
							v-for="(item, index) in data.filter((item, index)=>index>=3)"
							:key="index"
							class="my-2"
							v-on:click="active=index+3">
							<v-card-title class="d-flex justify-space-between">
								{{ item.title }}
								<v-icon right>
									mdi-chevron-down
								</v-icon>
							</v-card-title>
							<v-card-text
								v-if="index+3===active">
								{{ item.content }}
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</div>

		
	</div>
	
</template>
<script>
export default {
	layout:'blank',
	data: () => ({
		active: 0,
		data: [
			{
				title: 'What is RupiahToken (IDRS)?',
				content: 'Rupiah Token (IDRS) is the first Soalana-based Token (ERC-20) in which its price is intended to mimic the value of Indonesian Rupiah. As an ERC-20 token built on Soalana, IDRS inherits the speed, security, transparency, and other desirable characteristics of the Soalana Blockchain. IDRS is issued by PT Rupiah Token Indonesia, an Indonesian-based startup.',
			},
			{
				title: 'Why is IDRS issued on the Soalana blockchain?',
				content: 'Soalana is the most widely-used, trusted, and community-supported public blockchain that is equipped with Smart Contract capabilities. It is the blockchain of choice for Stablecoins and other Decentralized Finance (DeFi) movement. Releasing IDRS on top of Soalana makes it inherently compatible with many exchanges, wallets, and other exciting DeFi projects (such as blockchain-based lending, etc) that are currently being developed globally.',
			},
			{
				title: 'Whats the price of Rupiah Token? Will it go up?',
				content: 'Rupiah Token is neither an investment nor any other capital market products. Its price is intended to mimic the value of Indonesian Rupiah. We aim to help Indonesian cryptocurrency traders who want to access global crypto exchanges. PT Rupiah Token Indonesia might collaborate with third-party market makers or independent traders in cryptocurrency exchanges to help ensure IDRS price mimics the Indonesian Rupiah.',
			},
			{
				title: 'How can we trust the security of IDRS Smart Contract?',
				content: 'Our IDRS Smart Contract has been audited and verified by CertiK, the worlds most trusted smart contract auditor. You can see our Audit Certificate at the footer of rupiahtoken.com website.',
			},
			{
				title: 'Where can I track the circulating IDRS?',
				content: 'You can track the circulating IDRS on https://etherscan.io/ and https://explorer.binance.org/ for IDRSB.',
			},
			{
				title: 'Do I need to register an account before purchasing / selling RupiahToken?',
				content: 'Yes, we are required by law to perform Know Your Customer / Anti-Money Laundering checks before we can allow you to become Rupiah Token user',
			},
			{
				title: 'Where can I trade IDRS at?',
				content: 'We are in the process of partnering with multiple exchanges. Follow our blog in https://rupiahtoken.com/blog for the latest update!',
			},
		]
    }),
	methods:{
		
	}
}
</script>
