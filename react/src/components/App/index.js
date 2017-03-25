import { connect } from 'react-redux'
import App from './App'
import { increaseNumber } from '../../actions/example'

const mapStateToProps = state => ({
  number: state.example.number
})

const mapDispatchToProps = { increaseNumber }

export default connect(mapStateToProps, mapDispatchToProps)(App)