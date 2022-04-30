import Categories from '../../components/Categories/Categories';
import { ReactComponent as Copyright } from "../../assets/copyright.svg";

const Home = () => {
  return (
    <div>
      <Categories />
      <div style={{textAlign: "center"}}><Copyright/> 2022, Chisombiri Nlewedim</div>
    </div>
  );
};

export default Home;