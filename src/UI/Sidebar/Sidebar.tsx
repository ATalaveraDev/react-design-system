const Sidebar = () => {
  const elements = [
    { id: 'buttons', label: 'Buttons', path: '' }
  ];

  return <aside>
    <ol>
      {elements.map(element => <li key={element.id}>{element.label}</li>)}
    </ol>
  </aside>
};

export default Sidebar;