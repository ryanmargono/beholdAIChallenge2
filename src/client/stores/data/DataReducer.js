import { GET_DATA, UPDATE_DATA } from './DataAction'

function dataReducer(state={}, action){
    let newState
    switch(action.type){
        case GET_DATA:
            newState = {}
            action.data.forEach(data => newState[data.Metadata.SOPInstanceUID] = data)
            return newState 
        case UPDATE_DATA:
            newState = {...state}
            newState[action.data.Metadata.SOPInstanceUID] = action.data
            return newState
        default:
            return state
    }
}

export default dataReducer