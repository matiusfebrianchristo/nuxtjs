<template>
  <div class="content-1">
    <div class="container">
      <!-- =================== -->
      <div class="d-none d-md-block">
        <div class="container">
          <div class="row px-3 py-7">
            <div class="col-md">
              <div class="d-flex h-100">
                <div class="justify-content-center align-self-center">
                  <h2 class="heading-content1"><strong>Pengolahan Data dengan Nuxt<span>Js</span></strong></h2>
                  <p>
                    <strong>Nuxt</strong> atau <strong>NuxtJs</strong> adalah sebuah framework yang dapat kita digunakan untuk membuat <i>Universal VueJS Application</i>. Pada dasarnya ketika kita membuat sebuah aplikasi menggunakan framework/library javascript semacam Vue, React atau Angular kita akan mendapatkan kendala dari sisi <i>Search Engine Optimization</i>.
                  </p>
                  <nuxt-link to="/management" class="nuxt-link">Mulai</nuxt-link>
                </div>
              </div>
            </div>
            <div class="col-md">
              <img
                src="../../assets/img/nuxtjs.svg"
                alt="Image Hero"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Android -->
      <div class="d-sm-block d-md-none">
        <div class="container">
          <div class="row px-3 py-6">
            <div class="col-md mb-3">
              <img
                src="../../assets/img/nuxtjs.svg"
                alt="Image Hero"
                width="95%"
              />
            </div>
            <div class="col-md">
              <div class="d-flex h-100">
                <div class="justify-content-center align-self-center">
                  <h2 class="heading-content1"><strong>Pengolahan Data dengan Nuxt<span>Js</span></strong></h2>
                  <p>
                    <strong>Nuxt</strong> atau <strong>NuxtJs</strong> adalah sebuah framework yang dapat kita digunakan untuk membuat <i>Universal VueJS Application</i>. Pada dasarnya ketika kita membuat sebuah aplikasi menggunakan framework/library javascript semacam Vue, React atau Angular kita akan mendapatkan kendala dari sisi <i>Search Engine Optimization</i>.
                  </p>
                  <nuxt-link to="/management" class="nuxt-link">Mulai</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content1",
};
</script>

<style>
</style>