import {connect} from 'react-redux';
import DialogsList from '../DialogsList'

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage

  }
}

const DialogsChatContainer = connect(mapStateToProps)(DialogsList);

export default DialogsChatContainer;
