import React from 'react';
import { BrowserRouter as Route, IndexRoute } from 'react-router-dom';


import App from './components/App';
import Greetings from './components/Greetings';

export default(
    <Route>
        path="/" component={App} />
        {/* component={Greetings} /> */}
    </Route>
)