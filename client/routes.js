import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import App from './components/App';
import Greetings from './components/Greetings';

export default() =>(

    <Route>
        path="/" component={App} />
        {/* component={Greetings} /> */}
    </Route>
//     <Router>
//     <div>
//       <Route path="/" component={App}/>
//       <Route path="/" component={Greetings}/>
//     </div>
//   </Router>
)