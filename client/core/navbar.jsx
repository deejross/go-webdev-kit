import * as React from 'react';
import { Link } from 'react-router';
import { Dropdown, Menu } from 'semantic-ui-react';

export class AppNavbar extends React.Component {
    render() {
        return (
            <Menu inverted attached size='large'>
                <Menu.Item header as={Link} to='/'>Go Webdev Kit</Menu.Item> 
                <Dropdown className='link item' text="Apps">
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/app1'>App 1</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/app2'>App 2</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='link item' text="Admin">
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/admin/app1'>App 1</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/admin/dashboards'>App 2</Dropdown.Item>
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