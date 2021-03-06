import { PAGE_SIZE } from '../constants';
import request from '../../../utils/request';

export function fetch({ page }) {
    return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
}

export function remove(id){
    return request(`/api/users/${id}`,{
        method:'DELETE',
    })
}

export function patch(id,values){
    return request(`api/users/${id}`,{
        metch:'PATCH',
        body:JSON.stringify(values),
    })
}

export function create(values){
    return request(`/api/users/`,{
        method:'POST',
        body:JSON.stringify(values),
    })
}
