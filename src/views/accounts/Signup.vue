<template>
   <section>
       <div class="container flex ">
           <div class="py-4  md:m-auto" >
               <i class="material-icons text-my-purple">wifi</i>
               <div class="py-4">
                   <h3 class="text-xl font-bold tracking-normal">Sign Up</h3>
                   <p class="py-2 font-thin text-sm">See your growth and get community support</p> 
               </div>
               <button type="button" class="w-full block bg-white border-gray-300 hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-full border py-2 px-4">
                  <div class="flex items-center justify-center">
                   <svg width="15" height="15" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
                    <span class="ml-2">
                        Sign in with Google
                    </span>
                  </div>
               </button>
               <div class="flex items-center justify-center mt-4">
                   <hr class="flex-auto border-none h-0.5 bg-gray-200">
                   <span class="text-xs font-thin ml-2 mr-2">or Sign in with Email</span>
                   <hr class="flex-auto">
               </div>
               <div class="mt-4">
                       <label for="name" class="font-medium">Name*</label>
                       <br>
                       <input type="name" class='w-full block bg-white border rounded-full px-3 py-2 mt-2' id="name" name="name" placeholder="Name"/>
                </div>
               <div class="mt-4">
                       <label for="email" class="font-medium">Email*</label>
                       <br>
                       <input type="email" class='w-full block bg-white border rounded-full px-3 py-2 mt-2' id="email" name="email" placeholder="mail@website.com"/>
                </div>
                 <div class="mt-4">
                       <label for="password" class="font-medium">Password*</label>
                       <br>
                       <input type="password" class='w-full block bg-white border rounded-full px-3 py-2 mt-2' id="password" name="password" minlength="8" placeholder="Min. 8 characters"/>
                </div>
                  <div class="mt-4 flex justify-between">
                       <div class="flex items-center">
                           <input type="checkbox" id="rememberMe" name="rememberMe"/>
                           <label for="rememberMe" class="text-xs ml-1 font-medium" > I agree to the <span class="cursor-pointer text-my-purple">Terms & conditions</span></label>
                       </div>
                </div>
                    <button type="button" class="w-full border bg-my-purple py-2 px-auto rounded-full text-white mt-4"> Sign Up</button>
                    <p class="mt-4 text-xs font-medium">Already have an account?<span class="cursor-pointer text-my-purple ml-1">Sign in</span></p>

                    <p class="mt-14 font-thin text-xs ">@2022 Adwoa All rights reserved.</p>
           </div>
           <div class="hidden md:flex m-auto ml-14 flex-1  ">
               <img src="../../assets/side.jpg"/>
           </div>
       </div>
   </section>
</template>


<script>
export default {
    name: 'SignupPage'
}
</script>