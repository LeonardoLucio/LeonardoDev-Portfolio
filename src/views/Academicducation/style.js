import styled from 'styled-components';

export const Container = styled.section`scroll-margin-top: 90px; padding: 92px 0 54px; border-bottom: 1px solid var(--divider);`;
export const Heading = styled.div`
  margin-bottom: 26px;
  span { color: var(--accent); font-size: 10px; font-weight: 700; letter-spacing: .18em; }
  h2 { margin: 13px 0 0; color: var(--text-heading); font-size: clamp(28px, 4vw, 42px); line-height: 1.18; letter-spacing: -.04em; }
  em { color: var(--text-muted); font-style: normal; }
`;
export const Certification = styled.article`
  display: flex; align-items: center; gap: 22px; margin-bottom: 30px; padding: 22px 24px;
  border: 1px solid rgba(151, 111, 235, .32); border-radius: 12px;
  background: linear-gradient(110deg, rgba(128, 82, 216, .10), var(--surface) 62%);
  .badge { flex: 0 0 78px; display: grid; place-items: center; width: 78px; height: 78px; border-radius: 16px; color: var(--cert-badge-text); background: rgba(143, 99, 228, .16); font-size: 23px; font-weight: 750; letter-spacing: -.07em; }
  .badge span { align-self: start; margin: 18px 0 0 2px; font-size: 9px; }
  .issuer { color: var(--cert-label); font-size: 9px; font-weight: 700; letter-spacing: .16em; }
  h3 { margin: 8px 0 3px; color: var(--cert-text); font-size: 19px; }
  .details > p { margin: 0; color: var(--cert-muted); font-size: 12px; }
  .dates { display: flex; flex-wrap: wrap; gap: 8px 26px; margin-top: 15px; }
  .dates span { color: var(--cert-muted); font-size: 10px; }
  .dates strong { margin-left: 5px; color: var(--cert-date); font-weight: 600; }
  @media(max-width:500px) { gap: 14px; padding: 17px; .badge { flex-basis: 58px; width: 58px; height: 58px; border-radius: 12px; font-size: 19px; } .badge span { margin-top: 12px; } .dates { gap: 8px 14px; } }
`;
export const Subheading = styled.h3`margin: 0 0 14px; color: var(--text-body); font-size: 13px; font-weight: 600;`;
export const Cards = styled.div`display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; @media(max-width:700px){grid-template-columns:1fr;}`;
export const Card = styled.article`
  padding: 20px; border: 1px solid var(--border); border-radius: 11px; background: var(--surface);
  .period { color: var(--accent); font-size: 10px; letter-spacing: .06em; }
  h3 { margin: 13px 0 7px; color: var(--text-heading); font-size: 15px; }
  p { margin: 0; color: var(--text-body); font-size: 12px; line-height: 1.65; }
`;
