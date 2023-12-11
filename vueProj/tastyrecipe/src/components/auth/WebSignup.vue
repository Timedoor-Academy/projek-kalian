<!-- ---- auth > WebSignup.vue ---- -->
<template>
    <div class="container-fluid py-5" style="background-color: #f5f5f5">
        <div style="background-color: #ffffff" class="p-5 m-auto signup-form">
            <div class="text-center">
                <img src="../../assets/images/Logo.png" alt="Logo" />
                <h2 class="mt-4">Create your account</h2>
                <p>Enter your details to use all the app features.</p>
            </div>
            <form class="mt-3">
                <div class="row">
                    <div class="my-6 text-center">
                        <BaseInput type="file" identity="recipeImage" label="Profile Photo" isImage="true">
                            <div>
                                <div class="border p-1 mt-2 rounded-circle">
                                    <img src="../../assets/images/user.png" class="rounded-circle" width="140" height="150"
                                        style="object-fit: cover" />
                                </div>
                                <div class="text-center" style="transform: translateY(-24px)">
                                    <i class="fa-solid fa-camera fs-5 p-2 rounded-circle bg-white"></i>
                                </div>
                            </div>
                        </BaseInput>
                    </div>
                    <div class="col-md-6">
                        <BaseInput type="text" identity="firstname" placeholder="Ex: Jack" label="Firstname" />
                    </div>
                    <div class="col-md-6">
                        <BaseInput type="text" identity="lastname" placeholder="Ex: Daniel" label="Lastname" />
                    </div>
                </div>
                <div class="my-4">
                    <BaseInput type="text" identity="username" placeholder="Your Username" label="Username" />
                </div>
                <div class="my-4">
                    <BaseInput type="email" identity="email" placeholder="Your Email Address" label="Email" />
                </div>
                <div class="my-4">
                    <BaseInput type="password" identity="password" placeholder="Your Password" label="Password" />
                </div>
                <div class="my-4">
                    <BaseInput type="password" identity="confirmationPassword" placeholder="Same With Password"
                        label="Confirmation Password" />
                </div>
                <BaseButton class="login w-100 my-3">Register</BaseButton>
            </form>
            <div class="text-center mt-4">
                <p class="fw-semibold">
                    Already have account?<span style="color: #4c4ddc"><RouterLink to="/login" class="text-decoration-none"> Login</RouterLink></span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseInput from '../ui/BaseInput.vue';
import BaseButton from '../ui/BaseButton.vue';
</script>