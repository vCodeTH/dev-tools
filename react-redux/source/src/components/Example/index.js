import { connect } from 'react-redux'
import Example from './component'
import { increaseNumber } from '../../actions/example'

const mapStateToProps = state => ({
  number: state.example.number
})
const mapDispatchToProps = { increaseNumber }

export default connect(mapStateToProps, mapDispatchToProps)(Example)