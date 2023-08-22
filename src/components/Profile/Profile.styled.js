import styled from 'styled-components'


export const Wrapper = styled.div`
   margin: 0 auto ${props => props.theme.spacing(8)};
   width: 400px;
   border-radius: ${props => props.theme.radii.md};
   background-color: ${props => props.theme.colors.white};
`

export const InfoWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: ${props => props.theme.spacing(5)};
`

export const Photo = styled.img`
   width: 200px;
   margin-bottom: 40px;
   border-radius: 50%;
`

export const Title = styled.h2`
   margin: 0 0 20px;
   font-size: 32px;
`

export const Info = styled.p`
   margin: 0 0 20px;
   color: ${props => props.theme.colors.grey};
`

export const MetaWrapper = styled.div`
   display: flex;
   padding: 0;
`