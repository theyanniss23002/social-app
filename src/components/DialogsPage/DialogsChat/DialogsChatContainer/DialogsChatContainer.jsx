import {connect} from "react-redux"
import DialogsChat from "../DialogsChat";
import {sendMyMessageActionCreator,
  listenNewMyMessageActionCreator}
  from "../../../../redux/dialogsReducer";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage,
    myNewMessages: state.dialogsPage.myNewMessages,
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
