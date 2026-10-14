import styled from 'styled-components';

export const Container = styled.div``;
export const Content = styled.div`
  display: flex; flex-wrap: wrap; gap: 9px;
  span { display: inline-flex; align-items: center; gap: 7px; padding: 8px 10px; border: 1px solid var(--border-strong); border-radius: 7px; color: var(--text-body); font-size: 11px; }
  svg { color: var(--accent); font-size: 14px; }
`;
