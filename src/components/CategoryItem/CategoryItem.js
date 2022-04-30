//category cards that show on home page
import {CategoryItemContainer, Body, BackgroundImage} from './CategoryItem-Style.js';

const CategoryItem = ({ category }) => {

    const { title, imageUrl } = category;

    return(
        <CategoryItemContainer>
          <BackgroundImage imageUrl={imageUrl} />
          <Body>
            <h2>{title}</h2>
            <p>Shop Now!</p>
          </Body>
        </CategoryItemContainer>
    )
}

export default CategoryItem;