import { GET_DISEASE, UPDATE_DISEASE } from './DiseaseAction'

function diseaseReducer(state=[], action){
    switch(action.type){
        case GET_DISEASE:
            return action.data
        default:
            return state
    }
}

export default diseaseReducer