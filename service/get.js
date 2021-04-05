import axios from 'axios'
import { api } from '@/api/index.js'

const accept = 'application/json'

export const getData = async () => {
    try {
        const response = await axios(api, {
            headers:{
                'Content-type': accept
            }
        })
        return response
    } catch (error) {
        console.log(err)
    }
}

