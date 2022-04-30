//Categories cards container that shows on home page
import CategoryItem from '../CategoryItem/CategoryItem';

import './categories.scss';

const categories = [
    {
        id: 1,
        title: "Sneakers",
        imageUrl: "https://i.ibb.co/WBVfnYf/pexels-deybson-mallony-4914807-1.jpg",
        route: "shop/sneakers"
    },
    {
        id: 2,
        title: "Hats",
        imageUrl: "https://i.ibb.co/2KVxR2N/pexels-aman-jakhar-1124465.jpg",
        route: "shop/hats"
    },
    {
        id: 3,
        title: "Jackets",
        imageUrl: "https://i.ibb.co/wwB2zBM/pexels-styves-exantus-6448776-1.jpg",
        route: "shop/jackets"
    },
    {
        id: 4,
        title: "Men's",
        imageUrl: "https://i.ibb.co/Yp7FDng/pexels-monstera-6311687-1.jpg",
        route: "shop/men's"
    },
    {
        id: 5,
        title: "Women's",
        imageUrl: "https://i.ibb.co/BGK3h8P/pexels-tima-miroshnichenko-8764623-1.jpg",
        route: "shop/women's"
    }
]

const Categories = () => {
    return(
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Categories;