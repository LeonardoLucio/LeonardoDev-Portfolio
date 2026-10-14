import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  color: var(--text-primary);
  background: var(--page-background);
  transition: background 460ms ease, color 340ms ease;
`;

export const Content = styled.div`
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
  padding: 72px 0 36px;
  @media (max-width: 700px) { width: min(100% - 36px, 540px); padding-top: 42px; }
`;

export const Hero = styled.section`
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  align-items: center;
  gap: 42px;
  min-height: 510px;
  @media (max-width: 760px) { grid-template-columns: 1fr; gap: 50px; }
`;

export const Intro = styled.div`max-width: 660px;`;
export const Availability = styled.div`
  display: inline-flex; align-items: center; gap: 9px; padding: 9px 13px;
  border: 1px solid color-mix(in srgb, var(--accent) 24%, transparent); border-radius: 99px;
  background: color-mix(in srgb, var(--accent) 7%, transparent); color: var(--text-body); font-size: 12px; letter-spacing: .02em;
  span { width: 7px; height: 7px; border-radius: 50%; background: var(--accent-strong); box-shadow: 0 0 12px var(--accent-strong); }
`;
export const Eyebrow = styled.p`
  margin: 36px 0 13px; color: var(--accent); font-size: 11px; font-weight: 700; letter-spacing: .2em;
`;
export const Title = styled.h1`
  margin: 0; font-size: clamp(42px, 6.5vw, 76px); line-height: 1.04; letter-spacing: -.055em; font-weight: 650;
  em { color: var(--accent); font-style: normal; }
`;
export const Role = styled.p`
  margin: 22px 0 0; color: var(--text-body); font-size: clamp(17px, 2.2vw, 22px); font-weight: 500;
  span { margin: 0 8px; color: var(--accent); }
`;
export const Summary = styled.p`
  max-width: 560px; margin: 19px 0 0; color: var(--text-body); font-size: 16px; line-height: 1.8;
`;
export const Actions = styled.div`
  display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px;
  a { display: inline-flex; align-items: center; gap: 12px; padding: 13px 17px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: 650; transition: transform .2s, background .2s; }
  a:hover { transform: translateY(-2px); }
  .primary { color: var(--accent-contrast); background: var(--accent); }
  .primary:hover { filter: brightness(1.08); }
  .secondary { color: var(--text-heading); border: 1px solid var(--border-strong); }
  .secondary:hover { background: var(--surface-hover); }
`;
export const Social = styled.div`
  display: flex; align-items: center; gap: 14px; margin-top: 35px;
  > span { color: var(--text-muted); font-size: 10px; letter-spacing: .17em; font-weight: 700; }
`;
export const Profile = styled.aside`
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  .portrait-wrap { position: relative; width: min(310px, 72vw); aspect-ratio: 1; display: grid; place-items: center; }
  img { position: relative; z-index: 2; width: 76%; aspect-ratio: 1; object-fit: cover; border-radius: 50%; border: 5px solid var(--border); box-shadow: 0 18px 70px rgba(0,0,0,.22); }
  .orbit { position: absolute; border: 1px solid rgba(115,216,192,.23); border-radius: 50%; }
  .orbit-one { inset: 1%; } .orbit-two { inset: 10%; border-style: dashed; opacity: .55; }
  .profile-tag { position: absolute; z-index: 3; right: -4%; bottom: 12%; display: flex; align-items: center; gap: 10px; padding: 12px 15px; border: 1px solid var(--border-strong); border-radius: 12px; color: var(--text-heading); background: var(--surface-raised); box-shadow: 0 14px 40px rgba(0,0,0,.18); }
  .profile-tag > span { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 8px; color: var(--accent); background: color-mix(in srgb, var(--accent) 12%, transparent); font-size: 19px; }
  .profile-tag strong, .profile-tag small { display: block; }
  .profile-tag strong { color: var(--text-heading); font-size: 12px; } .profile-tag small { margin-top: 3px; color: var(--text-muted); font-size: 10px; }
  > p { margin: 24px 0 0; color: var(--text-muted); font-size: 13px; line-height: 1.7; text-align: center; }
  > p strong { color: var(--text-body); font-weight: 500; }
`;
export const Highlights = styled.section`
  display: grid; grid-template-columns: repeat(3, 1fr) auto; gap: 22px; align-items: center;
  margin-top: 64px; padding: 22px 0; border-top: 1px solid var(--divider); border-bottom: 1px solid var(--divider);
  div strong, div span { display: block; }
  div strong { color: var(--text-heading); font-size: 13px; font-weight: 600; }
  div span { margin-top: 5px; color: var(--text-muted); font-size: 11px; }
  > a { color: var(--accent); font-size: 12px; text-decoration: none; white-space: nowrap; }
  > a span { margin-left: 6px; }
  @media (max-width: 700px) { grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 42px; > a { white-space: normal; } }
`;
export const Footer = styled.footer`
  display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap;
  margin-top: 28px; padding: 20px 0 8px; color: var(--text-muted); font-size: 11px;
  span:first-child { color: var(--text-body); font-weight: 600; }
  a { color: var(--accent); text-decoration: none; }
`;
