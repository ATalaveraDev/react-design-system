import { Outlet } from 'react-router-dom';
import Sidebar from '../UI/Sidebar/Sidebar';

const Root = () => {
  return <>
    <aside>
      <Sidebar />
    </aside>
    <main>
      <Outlet  />
    </main>
  </>
};

export default Root;