import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 1.5em;
`;

export const Option = styled.span`
  font-weight: 100;
  opacity: 50%;
  margin-right: 1.5em;
  cursor: pointer;
`;

export const Selected = styled(Option)`
  font-weight: 900;
  opacity: 100%;
`;
