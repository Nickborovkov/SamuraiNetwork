import axios from "axios";

let instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY" : "634816f8-105c-4a9b-ae6b-0aaab45555f9"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => { return response.data })
        )
    },
    getProfile(userId) {
        return (
            instance.get(`profile/${userId}`).then(response => { return response.data })
        )
    },
    followUser(userId) {
        return (
            instance.post(`follow/${userId}`).then(response => { return response.data})
        )
    },
    unFollowUser(userId) {
        return (
            instance.delete(`follow/${userId}`).then(response => { return response.data})
        )
    },
    authUser(){
        return (
            instance.get(`auth/me`).then(response => { return response.data })
        )
    }
}