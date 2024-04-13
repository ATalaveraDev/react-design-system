import { Outlet } from 'react-router-dom';
import Sidebar from '../UI/Sidebar/Sidebar';
import ContentNav from '../UI/ContentNav/ContentNav';

const Root = () => {
  return <>
    <aside>
      <Sidebar />
    </aside>
    <main>
      <div className="main-left">
        <Outlet  />
      </div>
      <div className="main-right">
        <ContentNav />
      </div>
    </main>
  </>
};

export default Root;