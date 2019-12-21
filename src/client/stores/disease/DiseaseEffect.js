import { getDisease } from './DiseaseAction'

export const fetchDisease = () => dispatch => 
    fetch('/api/diseases')
        .then(res => res.json())
        .then(data => dispatch(getDisease(data)))
