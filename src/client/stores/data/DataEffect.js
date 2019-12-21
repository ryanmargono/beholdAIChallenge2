import { getData, updateData } from './DataAction'

export const fetchData = () => dispatch => 
    fetch('/api/images')
        .then(res => res.json())
        .then(data => dispatch(getData(data)))

export const postData = data => dispatch => 
    fetch('/api/images/',{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => dispatch(updateData(data)))