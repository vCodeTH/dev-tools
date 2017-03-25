import { connect } from 'react-redux'
import Example from './Example'
import { increaseNumber } from '../../actions/example'

const mapStateToProps = state => ({
  number: state.example.number
})
const mapDispatchToProps = { increaseNumber }

export default connect(mapStateToProps, mapDispatchToProps)(Example)