import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory, IndexRoute, Link, Router, Route } from 'react-router';
import { Message } from 'semantic-ui-react';
import { AppNavbar } from './navbar';

class App extends React.Component {
    render() {
        return (
            <div className="main-subcontainer">
                <AppNavbar />
                {this.props.children}
            </div>
        );
    }
}

class NotFound extends React.Component {
    render() {
        return (
            <Message
                negative
                icon='warning sign'
                header='Not Found'
                content='The content you are looking for could not be found. Please check the URL and try again.'
            />
        )
    }
}

export default function() {
    ReactDOM.render((
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    ), document.getElementById('main-container'));
}
