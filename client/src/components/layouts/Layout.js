import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>NoticiasBuhoLoco.com  - Noticias de ultima hora sobre los buhos locos</h1>
                </div>
                <div>
                    <ul>
                        <li><Link to={'/'}>Inicio</Link></li>
                        <li><Link to={'/about'}>Quien somos?</Link></li>
                    </ul>
                </div>
                <div>
                    { this.props.children } 
                </div>
            </div>
        );
    }
}

export default Layout;
