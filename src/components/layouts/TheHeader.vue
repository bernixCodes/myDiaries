<template>
    <header>
        <nav class="container flex items-center py-4 mt-4 sm:mt-12">
            <div class="py-1">
                <img src="../../assets/logo.svg"/>
            </div>
            <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 text-my-blue uppercase text-xs">
                <li class="cursor-pointer">
                    <router-link :to="{ name: 'HomeView'}"> Home</router-link>
                </li>
                <li class="cursor-pointer">
                    <router-link :to="{ name: 'SignupPage'}">Sign Up</router-link>
                </li>
                <router-link :to="{name: 'LoginPage' }" type="button" class="bg-my-red text-white rounded-md px-7 py-3 uppercase">Login</router-link>
            </ul>
            <div class="flex sm:hidden flex-1 justify-end">
                <i class="material-icons text-2xl">menu</i>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>