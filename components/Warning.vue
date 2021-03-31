<template>
  <div class="container">
      <div class="d-none d-md-block">
        <div class="container">
          <div class="row px-3 py-7">
              <div class="col-md">
              <img
                src="../assets/img/warning.svg"
                alt="Image Hero"
                width="100%"
              />
            </div>
            <div class="col-md">
              <div class="d-flex h-100">
                <div class="justify-content-center align-self-center">
                  <h2 class="heading-content1"><strong>Page ini belum selesai</strong></h2>
                  <p>
                    Mohon maaf, untuk sementara page ini tidak dapat diakses karena masih dalam perbaikan atau pengembang. 
                  </p>
                  <button class="nuxt-link" @click.prevent="to">back</button>
                </div>
              </div>
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
                src="../assets/img/warning.svg"
                alt="Image Hero"
                width="95%"
              />
            </div>
            <div class="col-md">
              <div class="d-flex h-100">
                <div class="justify-content-center align-self-center">
                  <h2 class="heading-content1"><strong>Page ini belum selesai</strong></h2>
                  <p>
                    Mohon maaf, untuk sementara page ini tidak dapat diakses karena masih dalam perbaikan atau pengembang. 
                  </p>
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
    name: 'warning',
    methods:{
        to() {
        this.$router.go(-1);
      }
    }
}
</script>

<style>

</style>