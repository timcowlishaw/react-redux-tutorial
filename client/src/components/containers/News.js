import React, {Component} from 'react';
import NewsItemListing from '../presentation/NewsItemListing';

class News extends Component {
    render() {
        return (
            <div>
                <h2> Las Noticias </h2>
                <ul>
                <li><NewsItemListing id="1" title="Buho Loco Tortura a Conductores" teaser="Se ha visto un buho que caza a los coches en Zaragoza" /></li>
                <li><NewsItemListing id="1" title="Buho Roba Cartas" teaser="Unas cartas han desaparecido en Tarragona -  Un buho es sospechoso." /></li>
                </ul>
            </div>
        );
    }
}

export default News;
