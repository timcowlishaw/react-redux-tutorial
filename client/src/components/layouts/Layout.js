import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>NoticiasBuhoLoco.com  - Noticias de ultima hora sobre los buhos locos</h1>
                </div>
                <div>
                    { this.props.children } 
                </div>
            </div>
        );
    }
}

export default Layout;
