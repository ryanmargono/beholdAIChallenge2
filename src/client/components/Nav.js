import React from 'react'
import { Navbar, NavbarBrand, NavLink, NavItem, Nav, Row, Col } from 'shards-react'

const NavBar = () => (
    <Navbar type="dark" theme="info" expand="md">
        <Row>
            <Col sm="2"> <NavbarBrand href="#">Behold.AI </NavbarBrand> </Col>
            <Col sm="10">  
            <Nav>
            <NavItem>
                <NavLink href="#" disabled>
                    Annotation Tool
                </NavLink>
                </NavItem> 
            </Nav>           
            </Col>
        </Row> 
    </Navbar>
)

export default NavBar