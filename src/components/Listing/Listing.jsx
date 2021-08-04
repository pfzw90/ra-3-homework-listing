import propTypes from 'prop-types'

export default function Listing(props) {
    const {items} = props;
    

    return (
    <div className="item-list">
        {items.map((item) => 
        (
        <div className="item" key={item.listing_id}>
            <div className="item-image">
                <a href={item.url}>
                   <img src={{...item.MainImage}.url_570xN} alt={item.title}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">
                {String(item.title).replace(/(?<=.{50}).*/m, '…')}
                </p>
                <p className="item-price">
                    {(item.currency_code === 'EUR' && '€')
                    || (item.currency_code === 'USD' && '$')}
                    {item.price}
                    {['EUR', 'USD'].includes(item.currency_code) || item.currency_code}
                </p>
                <p className={`item-quantity ${
                    (item.quantity <= 10 && 'level-low') ||
                    (item.quantity <= 20 && 'level-medium') ||
                    (item.quantity > 20  && 'level-high')
                                                }`}>{`${item.quantity} left`}</p>
             </div>
        </div>          
        ))}
    </div>
    )


}

Listing.propTypes =  {
    items: propTypes.arrayOf(propTypes.shape({
            listing_id: propTypes.number,
            url: propTypes.string,
            MainImage: propTypes.shape({
                url_570xN : propTypes.string
            }),
            title : propTypes.string,
            currency_code: propTypes.string,
            price: propTypes.string,
            quantity: propTypes.number
        })
    )
}