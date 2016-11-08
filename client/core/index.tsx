import { Echo } from './echo.js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory, Link, Router, Route } from 'react-router';
import { Dropdown, Menu, Message } from 'semantic-ui-react';

class TopNavbar extends React.Component<{}, {}> {
    render() {
        return (
            <Menu inverted attached size='large'>
                <Menu.Item header as={Link} to='/'>IRIS</Menu.Item> 
                <Dropdown className='link item' text="Apps">
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/consoles'>Consoles</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/dashboards'>Dashboards</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='link item' text="Admin">
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/admin/consoles'>Consoles</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/admin/dashboards'>Dashboards</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Menu position='right'>
                    <Dropdown className='link item' icon='user'>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to='/logout'>Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
        )
    }
}

class Home extends React.Component<{}, {}> {
    render() {
        return (
            <div className="subcontainer">
                <TopNavbar />
                {this.props.children}
            </div>
        );
    }
}

class NotFound extends React.Component<{}, {}> {
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
            <Route path='/' component={Home}>
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    ), document.getElementById('main-container'));
}
