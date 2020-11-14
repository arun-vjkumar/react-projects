import React from "react"
import { DescriptionContainer, ImageContainer, NameAndImageContainer, NameDesignationTitle, PageContainer, ProfileContainer, ProfileTitle, ThankyouContainer } from "../styles"

export const Profile = () => {
    return (
        <PageContainer>
            <ProfileContainer>
                <ProfileTitle>About Me</ProfileTitle>
                <NameAndImageContainer>
                    <NameDesignationTitle>
                        Hi, I am Arun V
                </NameDesignationTitle>
                    <ImageContainer src="profile_pic.jpeg"></ImageContainer>
                </NameAndImageContainer>
                <DescriptionContainer>
                    <p>I am a Software Developer, interested in FullStack Development, Data Engineering and Software Architecture.</p>
                    <p> I have worked on technologies like Java(Spring), Python(Flask, Django, Tornado, Dash), Typescript(Nest), Javascript,
                    GoLang(Gin), React, Vue, AWS etc.,. I had been mostly working on development of Back-End system but currently trying to
                    work mostly on Front-End projects along with mobile app development using flutter. Sometimes i do some small UI/UX stuff
                        using <a href="https://www.figma.com/">Figma</a>, <a href="http://pencil.evolus.vn/Downloads.html">Pencil</a>, <a href="https://www.designer.io/en/">Gravit Designer</a>.
                    </p>
                    <p> I have worked with fields related to Finance(fintech), Travel and Security. I have been mostly working on development of fintech
                    related systems and integration but as a passion i do side projects related to travel, weather and news etc.
                    </p>
                    <br />
                    My <a href="https://github.com/Arunv-Rvce" target="_blank">Github</a>,
                    &nbsp;<a href="https://www.linkedin.com/in/arunv-rvce" target="_blank">LinkedIn</a> or
                    &nbsp;<a href="mailto: arunvrvce@gmail.com">Send Mail</a>
                </DescriptionContainer>
                <ThankyouContainer>
                    <p> Thank You  </p>
                </ThankyouContainer>
            </ProfileContainer>
        </PageContainer>
    )
}