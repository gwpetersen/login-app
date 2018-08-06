import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import App from './components/App';




render(<Router routes = {routes} />, document.getElementById('app'));

render(<App/>, document.getElementById('app'));