//Categories cards container that shows on home page
import CategoryItem from '../CategoryItem/CategoryItem';

import './Categories.scss';

const Categories = ({ categories }) => {

    return(
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Categories;