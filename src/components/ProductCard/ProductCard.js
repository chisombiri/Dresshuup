import "./ProductCard.scss";
import Button from "../Button/Button";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    return(
        <div className="product-cards-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted">Add To Cart</Button>
        </div>
    )
}

export default ProductCard;