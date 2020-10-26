import React from 'react';
import "./DisplayQuotes.css"

function DisplayQuotes({quote}) {
    return (
        <figure className="QuoteCard">
            <img src={quote.image} alt={quote.character} />
            <figcaption>
                <blockquote>{quote.quote}</blockquote>
                <cite>{quote.character}</cite>
            </figcaption>
        </figure>
    );
};

export default DisplayQuotes;
