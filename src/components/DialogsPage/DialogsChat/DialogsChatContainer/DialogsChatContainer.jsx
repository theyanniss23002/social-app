import {connect} from "react-redux"
import DialogsChat from "../DialogsChat";
import {sendMyMessageActionCreator,
  listenNewMyMessageActionCreator}
  from "../../../../redux/dialogsReducer";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
    myNewMessages: state.dialogs.myNewMessages,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMyMessage: () => {
      dispatch(sendMyMessageActionCreator())
    },
    myMessageStateChange: (newMessage) => {
      dispatch(listenNewMyMessageActionCreator(newMessage))
    }
  }
}

const DialogsChatContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsChat);

export default DialogsChatContainer;
