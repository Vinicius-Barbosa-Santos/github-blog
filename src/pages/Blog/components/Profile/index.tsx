import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ExternalLink } from "../../../../components/ExternalLInk"
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons"

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
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub} />
                        Vinicius-Barbosa-Santos
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBuilding} />
                        Arizona
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUserGroup} />
                        123 Seguidores
                        Arizona
                    </li>
                </ul>
            </ProfileDetails>
        </ProfileContainer>
    )
}