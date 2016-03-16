import { connect } from 'react-redux';
import Round from '../components/Round';

const mapStateToProps = (state, {params}) => ({
  level: state.levels[params.level],
  round: state.rounds[`${params.level}.${params.round}`],
  shapes: state.shapes
});
const ActiveRound = connect(mapStateToProps)(Round);

export default ActiveRound;