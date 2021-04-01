<template>
  <div class="about">
    <Navbar />

    <!-- Content -->
    <div class="content">
        <Warning />
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Warning from "@/components/Warning";


export default {
    components:{
        Navbar,
        Footer,
        Warning
    },

}
</script>

<style>

</style>