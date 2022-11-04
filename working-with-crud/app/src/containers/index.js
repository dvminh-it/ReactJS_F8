import React from "react";
import { connect } from "react-redux";

import * as Page from '../components'
import * as actions from "../actions";
const Container = (props) => {
    React.useEffect(() => {
        props.getUser()
        props.paginateUser({ activePage: 1 });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (<>
        <Page.User user={{ ...props }} /></>
    )
}



const mapStateToProps = (state) => {
    return {
        listUsers: state.users.listUsers,
        paginateUsers: state.users.paginateUsers,
        totalPages: state.users.totalPages,
        activePage: state.users.activePage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(actions.getUser()),
        addUser: (data) => dispatch(actions.addUser(data)),
        deleteUser: (data) => dispatch(actions.deleteUser(data)),
        updateUser: (data) => dispatch(actions.updateUser(data)),
        searchUser: (data) => dispatch(actions.searchUser(data)),
        paginateUser: (data) => dispatch(actions.paginateUser(data)),
        searchPaginateUser: (data) => dispatch(actions.searchPaginateUser(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);