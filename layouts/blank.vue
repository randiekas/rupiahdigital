<template>
    <v-app>
        <v-main>
            <v-app-bar
                elevation="0"
                dense>
                <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
                <v-toolbar-title>
                    <v-avatar>
                        <v-img src="/icon-rupiahdigital.png"/>
                    </v-avatar>
                    Rupiah Digital
                </v-toolbar-title>
                
                <v-spacer></v-spacer>
                <v-btn text to="/" class="mx-1">
                    <v-icon left>
                        mdi-home
                    </v-icon>
                    Home
                </v-btn>
                <v-btn text href="https://medium.com/rupiahdigitalidrs" class="mx-1" target="_blank">
                    <v-icon left>
                        mdi-post-outline
                    </v-icon>
                    Blog
                </v-btn>
                <v-btn text href="mailto:rupiahdigitalpartner@gmail.com" class="mx-1">
                    <v-icon left>
                        mdi-email-outline
                    </v-icon>
                    Contact
                </v-btn>
                <!-- 
                <v-btn text to="/faq" class="mx-1">
                    <v-icon left>
                        mdi-frequently-asked-questions
                    </v-icon>
                    FAQ
                </v-btn> -->
                
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