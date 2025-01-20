<template>
    <div>
      <main>
        <Navbar />
        <NuxtPage /> 
        <SupportButton /> 
      </main>
    </div>
  </template>
  <script setup>
  import Navbar from "@/components/Navbar.vue";
  import SupportButton from "@/components/SupportButton.vue";
  </script>