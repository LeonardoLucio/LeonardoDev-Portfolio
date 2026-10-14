import styled from 'styled-components';

export const Container = styled.header`
  position: sticky; top: 0; z-index: 10; height: 72px;
  border-bottom: 1px solid var(--divider); background: var(--header-background); backdrop-filter: blur(16px);
`;
export const Content = styled.div`
  width: min(1120px, calc(100% - 48px)); height: 100%; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
  .brand { color: var(--text-heading); font-size: 23px; font-weight: 800; letter-spacing: -.09em; text-decoration: none; }
  .brand span { color: var(--accent); }
  nav { display: flex; align-items: center; gap: clamp(14px, 2.6vw, 32px); }
  nav a { color: var(--text-muted); font-size: 12px; font-weight: 550; text-decoration: none; transition: color .2s; }
  nav a:hover, nav a.active { color: var(--text-heading); }
  nav a.active { position: relative; }
  nav a.active::after { position: absolute; bottom: -9px; left: 0; width: 100%; height: 2px; content: ''; background: var(--accent); }
  .theme-toggle { display: grid; flex: 0 0 36px; place-items: center; width: 36px; height: 36px; border: 1px solid var(--border-strong); border-radius: 9px; color: var(--accent); background: var(--surface); cursor: pointer; transition: background .2s, transform .2s; }
  .theme-toggle:hover { background: var(--surface-hover); transform: translateY(-1px); }
  .theme-toggle svg { width: 17px; height: 17px; }
  .contact { padding: 10px 13px; border: 1px solid var(--border-strong); border-radius: 7px; color: var(--accent); font-size: 12px; text-decoration: none; white-space: nowrap; }
  .contact span { margin-left: 7px; }
  @media (max-width: 650px) {
    width: calc(100% - 30px); gap: 12px;
    nav { justify-content: flex-end; gap: clamp(10px, 3vw, 18px); }
    nav a { font-size: 11px; }
    .brand { font-size: 20px; }
    .contact { display: none; }
  }
  @media (max-width: 400px) { nav { gap: 9px; } nav a { font-size: 10px; } }
`;
