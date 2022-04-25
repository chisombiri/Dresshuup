import Categories from '../../components/Categories/Categories';

const Home = () => {

  const categories = [
    {
      "id": 1,
      "title": "Trainers",
      "imageUrl": "https://i.ibb.co/WBVfnYf/pexels-deybson-mallony-4914807-1.jpg"
    },
    {
      "id": 2,
      "title": "Hats",
      "imageUrl": "https://i.ibb.co/2KVxR2N/pexels-aman-jakhar-1124465.jpg"
    },
    {
      "id": 3,
      "title": "Jackets",
      "imageUrl": "https://i.ibb.co/wwB2zBM/pexels-styves-exantus-6448776-1.jpg"
    },
    {
      "id": 4,
      "title": "Men's",
      "imageUrl": "https://i.ibb.co/Yp7FDng/pexels-monstera-6311687-1.jpg"
    },
    {
      "id": 5,
      "title": "Women's",
      "imageUrl": "https://i.ibb.co/BGK3h8P/pexels-tima-miroshnichenko-8764623-1.jpg"
    }
  ]

  return (
    <Categories categories={categories}/>
  );
}

export default Home;