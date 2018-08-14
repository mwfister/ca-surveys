import { applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export default composeWithDevTools(applyMiddleware(ReduxThunk))
