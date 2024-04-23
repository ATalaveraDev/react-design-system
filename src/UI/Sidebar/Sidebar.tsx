import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '/engine.svg'

const Sidebar = () => {
  const elements = [
    { id: 'buttons', label: 'Buttons', path: '/buttons' },
    { id: 'selects', label: 'Selects', path: '/selects' },
    { id: 'tooltips', label: 'Tooltips', path: '/tooltips' },
    { id: 'circles', label: 'Circles', path: '/circles' },
    { id: 'charts', label: 'Charts', path: '/charts' }
  ];

  return <>
    <div className="sidebar-header">
      <img src={logo} className="logo" alt="Vite logo" />
      <h2>Elements</h2>
    </div>
    <ol className="links">
      {elements.map(element => <li key={element.id}><Link to={element.path}>{element.label}</Link></li>)}
    </ol>
  </>;
};

export default Sidebar;