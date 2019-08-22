import React, {Component} from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Layout from './components/layouts/Layout';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                    </div>
                </Layout>
            </BrowserRouter>

        );
    }
}
export default App;
