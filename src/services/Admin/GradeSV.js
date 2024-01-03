
import * as BaseAPI from '../BaseAPI'

export const getAllGrade = async () => {
    return await BaseAPI.getItems(gradeSV.getAllGrade)
}
export const addGrade = async (data) => {
    return await BaseAPI.postItem(gradeSV.addGrade, data)
}

const gradeSV = {
    getAllGrade: '/Grade',
    addGrade: '/Grade/add'
}




