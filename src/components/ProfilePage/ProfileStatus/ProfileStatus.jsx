import React from 'react'
import style from './ProfileStatus.module.scss'

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateProfileStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.state.status
      })
    }
  }

  render() {
    return (
      <div className={style.status}>
        {!this.state.editMode && <span onDoubleClick={this.activateEditMode}>{this.state.status || 'Добавьте статус'}</span>}
        {this.state.editMode && <input onChange={this.onStatusChange}
                                       value={this.state.status}
                                       autoFocus={true}
                                       onBlur={this.deactivateEditMode}
        />}
      </div>
    )
  }

}

export default ProfileStatus
