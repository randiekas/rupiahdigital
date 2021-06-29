<template>
    <v-app>
        <v-main>
            <v-app-bar
                color="white"
                elevation="0"
                dense>
                <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
                <v-toolbar-title>
                    <v-icon left color="primary">
                        mdi-cash-100
                    </v-icon>
                    Rupiah Digital
                </v-toolbar-title>
                
                <v-spacer></v-spacer>
                <v-btn text to="/" color="primary" class="mx-1">
                    <v-icon left>
                        mdi-home
                    </v-icon>
                    Beranda
                </v-btn>
                <v-btn text to="/blog" color="primary" class="mx-1">
                    <v-icon left>
                        mdi-post-outline
                    </v-icon>
                    Blog
                </v-btn>
                <v-btn text to="/faq" color="primary" class="mx-1">
                    <v-icon left>
                        mdi-frequently-asked-questions
                    </v-icon>
                    FAQ
                </v-btn>
                
            </v-app-bar>
            <nuxt/>
        </v-main>
    <!-- 
        <v-main>
            <v-container>
                <nuxt />
            </v-container>
        </v-main>
    -->
    </v-app>
</template>
<style>
.border--primary{
	border: 1px solid #4268F6!important
}
.border--success{
	border: 1px solid #4caf50!important
}
.border--error{
	border: 1px solid #ff5252!important
}
</style>