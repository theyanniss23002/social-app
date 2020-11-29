import {connect} from 'react-redux';
import Sidebar from '../Sidebar';

let mapStateToProps = (state) => {
  return {
    sidebar: state.sidebarBlock
  }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
