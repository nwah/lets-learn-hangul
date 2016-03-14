import { connect } from 'react-redux';
import Level from './Level';

const mapStateToProps = (state, {params}) => ({
  level: state.levels[params.level]
});
const ActiveLevel = connect(mapStateToProps)(Level);

export default ActiveLevel;