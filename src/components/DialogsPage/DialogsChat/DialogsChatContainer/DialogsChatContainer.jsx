import {connect} from "react-redux"
import DialogsChat from "../DialogsChat";
import {sendMyMessageActionCreator,
  }
  from "../../../../redux/dialogsReducer";

// listenNewMyMessageActionCreator

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage,
    // myNewMessages: state.dialogsPage.myNewMessages,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMyMessage: (data) => {
      dispatch(sendMyMessageActionCreator(data))
    },
    // myMessageStateChange: (newMessage) => {
    //   dispatch(listenNewMyMessageActionCreator(newMessage))
    // }
  }
}

const DialogsChatContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsChat);

export default DialogsChatContainer;
