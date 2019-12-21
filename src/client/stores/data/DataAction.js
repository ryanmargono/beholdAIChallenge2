export const GET_DATA = 'GET_DATA'
export const UPDATE_DATA = 'UPDATE_DATA'

export const getData = data => ({ type: GET_DATA, data })
export const updateData = data => ({ type: UPDATE_DATA, data})