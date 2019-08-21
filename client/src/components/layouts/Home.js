import React, {Component} from 'react';
import News from '../containers/News.js';
class Home extends Component {
    render() {
        return (
            <div>
                <div> Bienvenido a NoticiasBuhoLoco.com </div>
                <div>
                    <News />
                </div>
            </div>
        );
    }
}

export default Home;
