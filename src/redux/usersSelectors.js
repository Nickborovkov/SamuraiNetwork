import {createSelector} from "reselect";



let getUsersSelector = (state) => {
    return state.usersPage.users
}

// export const getAllUsersSelector = (state) => {
//     return getUsersSelector(state).filter(u => true)
// }

export const getUsersSuperSelector = createSelector(getUsersSelector,
    (users) => {
    return users.filter(u => true)
} )




export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingProgress = (state) => {
    return state.usersPage.followingProgress
}