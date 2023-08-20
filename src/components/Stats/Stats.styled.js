import styled from 'styled-components';

export const Activiti = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  gap: ${props => props.theme.spacing(2)};
  margin: 0;  
  padding: ${props => props.theme.spacing(4)};
  width: calc(100% / 3);
  background-color: ${props => props.theme.colors.lightgrey};
  border: 1px solid ${props => props.theme.colors.grey};
`;

export const StatsName = styled.span`
  color: ${props => props.theme.colors.grey};
`;

export const StatsValue = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;
