const navItems = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "skills", label: "Skills" },
  { key: "project", label: "Project" },
  { key: "contact", label: "Contact" }
];

function Header({ onNavClick }) {

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <header className="nav-header">
          <a href="#" className="brand-logo font-heading">
            <span className="brand-text" id="brand-name">Portfolio</span>
          </a>
          <nav className="navbar">
            <ul className="nav-menu font-body" id="nav-menu">
              {navItems.map((item) => (
                <li key={item.key} className="nav-item">
                  <button
                    className="nav-link"
                    onClick={() => onNavClick(item.key)}
                    aria-label={item.label}
                  >
                    <span id={`${item.key}-text`}>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <button className="burgerMenu" onClick={() => alert('TODO')}>&#9776;</button>
        </header>
      </div>
    </div>
  );
}

export default Header;
