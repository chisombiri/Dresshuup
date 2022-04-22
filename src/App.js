import './categories.scss';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Trainers'
    },
    {
      id: 2,
      title: 'Jackets'
    },
    {
      id: 3,
      title: 'Hats'
    },
    {
      id: 4,
      title: 'Men\'s'
    },
    {
      id: 5,
      title: 'Women\'s'
    },
  ]

  return (
    <div className="categories-container">
      {categories.map(({id, title}) => (
        <div key={id} className="category-container">
          <div className="background-image" />
          <div className="category-body">
            <h2>{title}</h2>
            <p>Shop Now!</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

