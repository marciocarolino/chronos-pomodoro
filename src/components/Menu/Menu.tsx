import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './style.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChnge(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); // Não segue o Link

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    return() => {
      
    }
  }, [theme]);

  return (
    <>
      <nav className={styles.menu}>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Ir para a Home"
          title="Home"
        >
          <HouseIcon />
        </a>

        <a
          className={styles.menuLink}
          href="#"
          aria-label="Ver Histórico"
          title="Histórico"
        >
          <HistoryIcon />
        </a>

        <a
          className={styles.menuLink}
          href="#"
          aria-label="Configurações"
          title="Configurações"
        >
          <SettingsIcon />
        </a>

        <a
          className={styles.menuLink}
          href="#"
          aria-label="Mudar Temas"
          onClick={handleThemeChnge}
          title="Mudar Temas"
        >
          <SunIcon />
        </a>
      </nav>
    </>
  );
}
