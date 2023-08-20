import { Stats } from "../Stats/Stats"
import { Wrapper, Info, InfoWrapper, MetaWrapper, Photo, Title } from "./Profile.styled"

export const Profile = ({user: {username, tag, location, avatar, stats}}) =>{
   return (
      <Wrapper>
         <InfoWrapper>
            <Photo src={avatar} alt={username}/>
            <Title>{username}</Title>
            <Info>@{tag}</Info>
            <Info>{location}</Info>
         </InfoWrapper>
         <MetaWrapper>
            <Stats activiti={{name: "Followers", value: stats.followers}} />
            <Stats activiti={{name: "Views", value: stats.views}} />
            <Stats activiti={{name: "Likes", value: stats.likes}} />
         </MetaWrapper>         
      </Wrapper>
   )
}