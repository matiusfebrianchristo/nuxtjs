<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3 userId">
                    <label for="userId"><strong>UserId</strong> :</label>
                    <p id="userId">{{ userId }}</p>
                </div>
                <div class="mb-3 title">
                    <label for="title"><strong>Title</strong> :</label>
                    <p id="title">{{ title }}</p>
                </div>
                <div class="mb-3 deskripsi">
                    <label for="deskripsi"><strong>Deskripsi</strong> :</label>
                    <p id="deskripsi">{{ deskripsi }}</p>
                </div>
            
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
    name: 'ModalDetail',
    data(){
        return {
            userId: null,
            title: null,
            deskripsi: null
        }
    },
    computed:{
        ...mapGetters({
            result: 'getResult'
        }),
        ...mapState({
            modal: 'isModal',
            id: 'getid'
        })
    },
    watch:{
        modal: function(newValue){
            if(newValue){
                this.userId = this.result.data[(this.$route.params.index - 1)][this.id].userId;
                this.title = this.result.data[(this.$route.params.index - 1)][this.id].title;
                this.deskripsi = this.result.data[(this.$route.params.index - 1)][this.id].body;
            }
        }
    }
}


</script>

<style>

</style>