<template>
  <div>
    <Navbar />
    <div class="content">
      <Content1 />
      <!-- Content 2 -->
      <div class="content-2">
        <div class="container">
          <h3 class="p-md-3">Mengapa <span class="nuxt">Nuxt<span>Js</span></span> ?</h3>
          <div class="row">
            <div class="col-md-4">
              <div class="card text-center shadow">
                <img src="../assets/img/seo.svg" class="card-img-top" alt="" />
                <div class="card-body">
                  <h4 class="card-title">SEO</h4>
                  <p class="card-text text-start">
                    Nuxtjs memungkinkan pengembang untuk membangun aplikasi
                    Server Side Rendered di mana sebuah Node. Server js akan
                    mengirimkan HTML ke klien berdasarkan komponen Vue Anda
                    (daripada menjalankan JavaScript di sisi klien). Ini akan
                    memungkinkan SEO yang lebih baik daripada SPA tradisional
                    yang dibuat menggunakan Vue
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center shadow">
                <img src="../assets/img/kinerja.svg" class="card-img-top" alt="" />
                <div class="card-body">
                  <h4 class="card-title">KINERJA</h4>
                  <p class="card-text text-start">
                    Dengan Nuxt.js, aplikasi Anda akan dioptimalkan secara
                    otomatis. Kami melakukan yang terbaik untuk membangun
                    aplikasi yang efisien dengan memanfaatkan praktik terbaik
                    Vue.js dan Node.js. Untuk membuang setiap bagian yang tidak
                    perlu dari aplikasi Anda, Nuxt menyertakan penganalisa
                    bundel dan banyak peluang untuk menyempurnakan aplikasi Anda
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center shadow">
                <img src="../assets/img/senang.svg" class="card-img-top" alt="" />
                <div class="card-body">
                  <h4 class="card-title">MENYENANGKAN</h4>
                  <p class="card-text text-start">
                    Fokus utama nuxtjs adalah pengalaman pengembang. Nuxt terus
                    meningkatkan kerangka kerja ini sehingga Anda juga akan
                    menyukainya! Harapkan solusi yang menarik, pesan kesalahan
                    deskriptif, standar kuat dan dokumentasi terperinci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content 3 -->
      <div class="content-3">
        <div class="container">
          <h3>Fitur</h3>
          <div class="row">
            <div class="col-md-4">
              <img src="../assets/img/data.svg" class="img" alt="">
            </div>
            <div class="col-md-8 fitur">
              <p><strong>GET</strong>: mengambil data dari API lalu di tampilkan kedalam DOM.</p>
              <p><strong>POST</strong>: Mengupload atau mengirim data ke API dimana menjadi wadah penyimpanan data.</p>
              <p><strong>DELETE</strong>: Menghapus data yang terpilih.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Content 4 -->
      <div class="content-4">
        <div class="container">
          <h3 class="p-md-3">System Rendering</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="card text-center shadow">
                <img src="../assets/img/serverside.svg" class="card-img-top" alt="" />
                <div class="card-body">
                  <h4 class="card-title">SERVER SIDE RENDERED</h4>
                  <p class="card-text text-start">
                    Mode paling populer untuk Nuxt. Dengan SSR, juga disebut mode "universal" atau "isomorphic", server Node.js akan digunakan untuk mengirimkan HTML berdasarkan komponen Vue Anda ke klien alih-alih JavaScript murni. Menggunakan SSR membawa keuntungan besar seperti peningkatan SEO, UX yang lebih baik, dan lebih banyak peluang (dibandingkan dengan Vue SPA tradisional). Dikarenakan menerapkan SSR dari awal bisa jadi sangat menjemukan, Nuxt.js sudah memiliki dukungan penuh untuk SSR dan dirancang untuk terhindar dari kesulitan-kesulitan tersembunyi yang umum terjadi. System ini yang digunakan pada Website ini.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card text-center shadow">
                <img src="../assets/img/serverside.svg" class="card-img-top" alt="" />
                <div class="card-body">
                  <h4 class="card-title">GENERATE SECARA STATIS</h4>
                  <p class="card-text text-start">
                    Static Site Generation (alias JAMStack) adalah topik yang banyak dibicarakan saat ini. Nuxt.js mendukung pembuatan situs web statis berdasarkan aplikasi Vue Anda. Ini adalah "yang terbaik dari kedua dunia" karena Anda tidak memerlukan server tetapi masih memiliki manfaat SEO karena Nuxt akan melakukan pra-render terhadap semua halaman Anda dan menyertakan HTML yang diperlukan. Anda juga dapat men-deploy halaman yang dihasilkan dengan mudah ke Netlify atau GitHub.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <!-- Footer -->
    <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Content1 from "@/components/home/Content1";


export default {
  components: {
    Navbar,
    Content1,
    Footer
  },
};
</script>

<style>
</style>
