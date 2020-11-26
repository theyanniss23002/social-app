import {connect} from 'react-redux';
import DialogsList from '../DialogsList'

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs

  }
}

const DialogsChatContainer = connect(mapStateToProps)(DialogsList);

export default DialogsChatContainer;
