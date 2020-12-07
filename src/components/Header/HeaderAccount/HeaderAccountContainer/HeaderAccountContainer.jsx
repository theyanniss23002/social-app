import React from 'react'
import HeaderAccount from "../HeaderAccount"
import {connect} from "react-redux"
import {setAuthUserThunkCreator} from '../../../../redux/authReducer'

class HeaderAccountContainer extends React.Component {

  componentDidMount() {
    this.props.setAuthUserData()
  }

  render() {
    return <HeaderAccount {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

export default connect(mapStateToProps, {
  setAuthUserData: setAuthUserThunkCreator
})(HeaderAccountContainer)
