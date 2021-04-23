import api from './api'

class dataService{

    getAll(){
        return api.get('/meetings')
    }

    get(id) {
        return api.get(`/meetings/${id}`)
    }

    create(){
        return api.post('/meetings')
    }

    update(id){
        return api.put(`/meetings/${id}`)
    }

    delete(id){
        return api.delete(`/meetings/${id}`)
    }

}

export default dataService