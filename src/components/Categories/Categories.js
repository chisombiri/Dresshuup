import CategoryItem from '../CategoryItem/CategoryItem';

import './categories.scss';

const Categories = () => {

    const categories = [
        {
          "id": 1,
          "title": "trainers",
          "imageUrl": "https://i.ibb.co/WBVfnYf/pexels-deybson-mallony-4914807-1.jpg"
        },
        {
          "id": 2,
          "title": "hats",
          "imageUrl": "https://i.ibb.co/2KVxR2N/pexels-aman-jakhar-1124465.jpg"
        },
        {
          "id": 3,
          "title": "jackets",
          "imageUrl": "https://i.ibb.co/wwB2zBM/pexels-styves-exantus-6448776-1.jpg"
        },
        {
          "id": 4,
          "title": "men's",
          "imageUrl": "https://i.ibb.co/Yp7FDng/pexels-monstera-6311687-1.jpg"
        },
        {
          "id": 5,
          "title": "women's",
          "imageUrl": "https://i.ibb.co/BGK3h8P/pexels-tima-miroshnichenko-8764623-1.jpg"
        }
      ]

    return(
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Categories;