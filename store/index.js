import { getData } from '@/service/get'


const state = () => ({
    name: 'Matius Febrian Christo',
    get: null,
    isModal: false,
    getid: 0
})


const getters = {
    getResult: state => {
        if(state.get !== null){

            let result = [];
            const jml = state.get.length;
            let listNum = []
            let num = 0;
            for (let i = 0; i < (jml / 10) ; i++) {
                listNum.push(i)
                let temp = []
                for(let j = num; j < (i + 1 + '0'); j++) {
                    num += 1
                    temp.push(state.get[j])
                }
                result.push(temp)
            }
    
            return {
                number : listNum,
                data: result,
    
            }
        } else {
            return {
                number: [0],
                data: []
            }
        }
    }
    
}

const actions = {
    async getData({commit}){
        try {
            const response = await getData()
            commit('getData', response.data)
            return response
        } catch (error) {
            console.log(error)
        }
    },
    isModal({commit}, data){
        commit('isModal', data)
    }
}

const mutations = {
    getData(state, data){
        state.get = data
    },
    isModal(state, data){
        state.isModal = !state.isModal
        state.getid = data
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}