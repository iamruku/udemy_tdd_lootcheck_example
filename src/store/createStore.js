import reducers from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
	reducers,
	composeEnhancers(applyMiddleware(reduxThunk))
);
