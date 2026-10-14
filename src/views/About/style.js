import styled from 'styled-components';

export const Container = styled.section`scroll-margin-top: 90px; padding: 92px 0 54px; border-bottom: 1px solid var(--divider);`;
export const Heading = styled.div`
  margin-bottom: 28px;
  span { color: var(--accent); font-size: 10px; font-weight: 700; letter-spacing: .18em; }
  h2 { margin: 13px 0 0; color: var(--text-heading); font-size: clamp(28px, 4vw, 42px); line-height: 1.18; letter-spacing: -.04em; }
  em { color: var(--text-muted); font-style: normal; }
`;
export const Content = styled.div`display: grid; grid-template-columns: 1.15fr .85fr; gap: 42px; @media(max-width:700px){grid-template-columns:1fr;gap:24px;}`;
export const About = styled.div`
  p { margin: 0 0 16px; color: var(--text-body); font-size: 14px; line-height: 1.85; }
`;
export const Stacks = styled.div`padding: 21px; border: 1px solid var(--border); border-radius: 12px; background: var(--surface);`;
export const Title = styled.div`
  h3 { margin: 0 0 18px; color: var(--text-heading); font-size: 14px; font-weight: 600; }
`;
