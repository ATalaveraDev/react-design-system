import { Outlet } from 'react-router-dom';
import Sidebar from '../UI/Sidebar/Sidebar';
import ContentNav from '../UI/ContentNav/ContentNav';

const Root = () => {
  return <div className="main-wrapper">
    <aside className="left-sidebar">
      <Sidebar />
    </aside>
    <main>
      <Outlet  />
    </main>
    <aside className="right-sidebar">
      <ContentNav />
    </aside>
  </div>
};

export default Root;