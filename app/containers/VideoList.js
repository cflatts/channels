import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as activeVideoActions from '../actions/activeVideo';
import * as videosActions from '../actions/videos';
import VideoList from '../components/VideoList';
import { getVideos } from '../reducers/index';

function mapStateToProps(state, ownProps) {
  return {
    videos: getVideos(state),
    pageToken: state.videos.pageToken,
    isFetching: state.videos.isFetching,
    error: state.videos.error,
    activeChannelId: ownProps.activeChannelId
  };
}

const actions = {
  ...activeVideoActions,
  ...videosActions
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
