import Category from '../../components/Directory/Directory.component';
import { Outlet } from 'react-router-dom';

const Home= () => {
     
    return (
      <div>
        <Outlet />
        <Category/>
      </div>
    );
  }
  
  export default Home;
  