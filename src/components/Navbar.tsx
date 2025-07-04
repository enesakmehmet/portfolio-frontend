import './Navbar.css';

interface NavbarProps {
  onToggleTheme: () => void;
  theme: string;
}

export default function Navbar({ onToggleTheme, theme }: NavbarProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#about">Enes Akmehmet</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">Hakkımda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projelerim</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">İletişim</a>
            </li>
          </ul>
            <button className="btn btn-sm btn-outline-light ms-3" onClick={onToggleTheme}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
    </nav>
  );
}
