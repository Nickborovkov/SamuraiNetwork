import React from "react";
import Profile from "./profile";
import {compose} from "redux";
import {connect} from "react-redux";
import {addNewPost, setUserProfile, setUserStatus, updateUserStatus} from "../../redux/profileReducer";
import Preloader from "../../common/preloader/preloader";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthRedirect";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.authorisedUserId
            if(!userId){
                this.props.history.push('/users')
            }
        }
        this.props.setUserProfile(userId)
        this.props.setUserStatus(userId)
    }
    render() {
        return <>
            {!this.props.profile ? <Preloader /> : <Profile {...this.props}
                                                            addNewPost={this.props.addNewPost}
                                                            updateUserStatus = {this.props.updateUserStatus}/>}
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        userStatus: state.profilePage.userStatus,
        authorisedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {addNewPost, setUserProfile, setUserStatus, updateUserStatus}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)