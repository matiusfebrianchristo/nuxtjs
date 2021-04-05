<template>
  <div class="management">
    <Navbar />

    <Modals />
    <!-- Content -->
    <div class="content">
      <div class="container">
        <h3>Data</h3>
        <div class="list-data justify-content-center">
          <div class="row">
            <div class="col-md-4 my-2" v-for="(data, index) in result.data[($route.params.index - 1)]" :key="data.id">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{{ getTitle(data.title) }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ data.userId }}</h6>
                  <p class="card-text">
                    {{ getText(data.body) }}
                  </p>
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="isModal(index)" >
                    Detail
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Warning from "@/components/Warning";
import Pagination from "@/components/home/Pagination";
import Modals from '@/components/modals/ModalDetail';
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Navbar,
    Footer,
    Warning,
    Pagination,
    Modals
  },
  computed:{
    ...mapGetters({
      result: 'getResult'
    })
  },
  methods: {
    ...mapActions({
      get: "getData",
      isModal: "isModal"
    }),
    getTitle(data){
      const title = data.split(' ').splice(0, 1).join('')
      return title
    },
    getText(data){
      const text = data.split('')
      if(text.length > 100){
        return text.splice(0, 100).join('') + '....'
      } else {
        return data
      }
    }
  },
  mounted() {
    this.get();
  },
};
</script>

<style>
</style>