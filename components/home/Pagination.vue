<template>
  <div>
    <nav aria-label="Page  navigation example ">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <p class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </p>
        </li>

        <li class="page-item " v-for="data in num.number" :key="data.id"><p class="page-link" @click="changeSlug(data+1)">{{data + 1}}</p></li>
        <li class="page-item">
          <p class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </p>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Pagination',
    data(){
        return {
            number : 1
        }
    },
    computed: {
        ...mapGetters({
            num: 'getResult'
        })
    },
    methods : {
        changeSlug(data){
            console.log(data.toString())
            this.$router.push({name:'management', params:{index: data.toString()}})
        }
    }
};
</script>

<style>
</style>