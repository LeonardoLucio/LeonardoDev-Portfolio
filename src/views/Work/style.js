import styled from 'styled-components';

export const Container = styled.section`scroll-margin-top: 90px; padding: 92px 0 54px; border-bottom: 1px solid var(--divider);`;
export const Heading = styled.div`
  margin-bottom: 30px;
  span { color: var(--accent); font-size: 10px; font-weight: 700; letter-spacing: .18em; }
  h2 { max-width: 670px; margin: 13px 0 0; color: var(--text-heading); font-size: clamp(28px, 4vw, 42px); line-height: 1.18; letter-spacing: -.04em; }
  em { color: var(--text-muted); font-style: normal; }
`;
export const Timeline = styled.div`display: grid; gap: 12px;`;
export const RoleCard = styled.article`
  padding: 21px 23px; border: 1px solid var(--border); border-radius: 11px; background: var(--surface);
  .role-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; }
  h3 { margin: 0; color: var(--text-heading); font-size: 16px; }
  p { margin: 6px 0 0; color: var(--accent); font-size: 12px; }
  time { flex-shrink: 0; color: var(--text-muted); font-size: 11px; }
  ul { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 22px; margin: 17px 0 0; padding-left: 16px; }
  li { color: var(--text-body); font-size: 12px; line-height: 1.65; }
  li::marker { color: var(--accent); }
  @media(max-width:600px) { padding: 17px; .role-head { flex-direction: column; gap: 8px; } ul { grid-template-columns: 1fr; } }
`;
