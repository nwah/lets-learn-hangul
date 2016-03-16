import { connect } from 'react-redux';
import LearnResponseForm from '../components/LearnResponseForm';

const mapStateToProps = ({session}) => ({session});
const LearnResponseFormContainer = connect(mapStateToProps)(LearnResponseForm);

export default LearnResponseFormContainer;