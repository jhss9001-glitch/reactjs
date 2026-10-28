import { useEffect, useState } from "react";
import { Menu, SunMoon } from "lucide-react";
import { NAV } from "../data.js";
import { useTheme } from "../hooks/useTheme.js";

export default function Header({ route }) {
  const { toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#/" className="brand" aria-label="K-Pharm Talk 홈">
          <span className="logo" aria-hidden="true">K<i>Rx</i></span>
          <span className="brand-name">K-Pharm Talk</span>
        </a>

        <nav
          className={`nav${open ? " open" : ""}`}
          id="nav"
          aria-label="주요 메뉴"
          onClick={(e) => { if (e.target.closest("a")) setOpen(false); }}
        >
          {NAV.map((n) => (
            <a key={n.id} href={`#/${n.id}`} aria-current={route === n.id ? "page" : undefined}>{n.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="icon-btn" aria-label="다크 모드 전환" onClick={toggle}><SunMoon aria-hidden="true" /></button>
          <a href="#/apply" className="btn btn-primary btn-sm">수강 신청</a>
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-label="메뉴 열기"
            aria-expanded={open}
            aria-controls="nav"
            onClick={() => setOpen((o) => !o)}
          ><Menu aria-hidden="true" /></button>
        </div>
      </div>
    </header>
  );
}
