<template>
	<div>
		<center>
			{{info||"Mohon tunggu ..."}}
		</center>
	</div>
</template>
<script>
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
}
</script>
<style>
body{
	font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */
}
</style>
