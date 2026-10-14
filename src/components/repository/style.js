import styled from 'styled-components';

export const Grid = styled.div`display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; @media(max-width:760px){grid-template-columns:repeat(2,minmax(0,1fr));} @media(max-width:520px){grid-template-columns:1fr;}`;
export const Card = styled.article`
  min-width: 0; padding: 18px; border: 1px solid var(--border); border-radius: 11px; background: var(--surface); transition: border-color .2s, transform .2s;
  &:hover { border-color: var(--accent); transform: translateY(-2px); }
  .card-top { display: flex; justify-content: space-between; align-items: center; }
  .repo-icon { color: var(--accent); font-size: 20px; }
  .card-top > a { color: var(--text-muted); text-decoration: none; }
  h3 { margin: 14px 0 8px; overflow-wrap: anywhere; font-size: 14px; }
  h3 a { color: var(--text-heading); text-decoration: none; }
  p { min-height: 40px; margin: 0; color: var(--text-body); font-size: 11px; line-height: 1.7; }
  .meta { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 18px; color: var(--text-muted); font-size: 10px; }
  .meta span { display: inline-flex; align-items: center; gap: 5px; }
  .meta i { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); }
`;
export const Message = styled.p`
  margin: 0; padding: 20px; border: 1px solid var(--border); border-radius: 10px; color: var(--text-body); background: var(--surface); font-size: 13px;
  a { margin-left: 8px; color: var(--accent); text-decoration: none; }
`;
