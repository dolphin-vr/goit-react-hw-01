import styled from 'styled-components'


export const Wrapper = styled.div`
   margin: 0 auto;
   width: 400px;
   border-radius: ${props => props.theme.radii.md};
   background-color: ${props => props.theme.colors.white};
   /* display: flex;
   flex-direction: column;
   align-items: center;
   padding: ${props => props.theme.spacing(5)}; */
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
   font-size: 34px;
`

export const Info = styled.p`
   margin: 0 0 20px;
   color: ${props => props.theme.colors.grey};
   /* font-size: 34px; */
`

export const MetaWrapper = styled.div`
   display: flex;
   /* column-gap: -1px; */
   padding: 0;
`