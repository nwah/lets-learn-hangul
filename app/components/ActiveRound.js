import { connect } from 'react-redux';
import Round from './Round';

const mapStateToProps = (state, {params}) => ({
  round: state.rounds[`${params.level}.${params.round}`]
});
const ActiveRound = connect(mapStateToProps)(Round);

export default ActiveRound;