import styled from 'styled-components';

export const Container = styled.div`width: auto; height: auto;`;
export const Content = styled.div`
  display: flex; align-items: center; gap: 14px;
  a { display: grid; place-items: center; color: var(--text-muted); transition: color .2s, transform .2s; }
  a:hover { color: var(--accent); transform: translateY(-2px); }
  svg { font-size: 1.35rem; }
`;
