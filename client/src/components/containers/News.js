import React, {Component} from 'react';
import NewsItemListing from '../presentation/NewsItemListing';
import { connect } from 'react-redux';

class News extends Component {

    render() {
        const newsItems = this.props.news.map( (news, i) => {
            return ( <li key={i}><NewsItemListing data={news} /></li> );
        });

        return (
            <div>
                <h2> Las Noticias </h2>
                <ul>
                    { newsItems }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        news: state.news.news
    };
}

export default connect(mapStateToProps)(News);
