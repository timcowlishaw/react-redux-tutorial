import React, {Component} from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Layout from './components/layouts/Layout';
import NewsItemDetail from './components/presentation/NewsItemDetail.js';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path='/news/:id'  component={NewsItemDetail} />
                    </div>
                </Layout>
            </BrowserRouter>

        );
    }
}
export default App;
