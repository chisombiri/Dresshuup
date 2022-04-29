//category cards that show on home page
import './CategoryItem.scss';

const CategoryItem = ({ category }) => {

    const { title, imageUrl } = category;

    return(
        <div className="category-item-container">
          <div 
          className="background-image" 
          style={{
            backgroundImage: `url(${imageUrl})`
          }} />
          <div className="category-item-body">
            <h2>{title}</h2>
            <p>Shop Now!</p>
          </div>
        </div>
    )
}

export default CategoryItem;