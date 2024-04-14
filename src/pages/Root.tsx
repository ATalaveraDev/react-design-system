import { Outlet, useLocation } from 'react-router-dom';

import Sidebar from '../UI/Sidebar/Sidebar';
import ContentNav from '../UI/ContentNav/ContentNav';

const Root = () => {
  const router = useLocation();

  return <div className="main-wrapper">
    <aside className="left-sidebar">
      <Sidebar />
    </aside>
    <main>
      <Outlet  />
    </main>
    {router.pathname !== '/' && <aside className="right-sidebar">
      <ContentNav />
    </aside>}
  </div>
};

export default Root;