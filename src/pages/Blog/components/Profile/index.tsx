import { ExternalLink } from "../../../../components/ExternalLInk"
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles"

export const Profile = () => {
    return (
        <ProfileContainer>
            <ProfilePicture src={'https://avatars.githubusercontent.com/u/41848606?v=4'} />

            <ProfileDetails>
                <header>
                    <h1>Vinícius</h1>

                    <ExternalLink
                        text="Github"
                        href={'#'}
                        target="_blank"
                    />
                </header>
                <p>Dev</p>
            </ProfileDetails>
        </ProfileContainer>
    )
}