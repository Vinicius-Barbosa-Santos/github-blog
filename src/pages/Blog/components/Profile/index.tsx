import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ExternalLink } from "../../../../components/ExternalLInk"
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { useCallback, useEffect, useState } from "react"
import { api } from "../../../../lib/axios"

interface ProfileData {
    login: string,
    bio: string,
    avatar_url: string,
    html_url: string,
    name: string,
    company?: string
    followers: number,
}

const username = import.meta.env.VITE_GITHUB_USERNAME

export const Profile = () => {

    const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
    const [isLoading, setIsLoading] = useState(true)

    const getProfileData = useCallback(async () => {
        try {
            const response = await api.get(`/users/${username}`)

            setProfileData(response.data)
        } finally {
            setIsLoading(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profileData])

    useEffect(() => {
        getProfileData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ProfileContainer>
            <ProfilePicture src={profileData.avatar_url} />

            <ProfileDetails>
                <header>
                    <h1>{profileData.name}</h1>

                    <ExternalLink
                        text="Github"
                        href={profileData.html_url}
                        target="_blank"
                    />
                </header>
                <p>{profileData.bio}</p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub} />
                        {profileData.login}
                    </li>
                    {profileData?.company && (
                        <li>
                            <FontAwesomeIcon icon={faBuilding} />
                            {profileData.company}
                        </li>
                    )}
                    <li>
                        <FontAwesomeIcon icon={faUserGroup} />
                        {profileData.followers}
                    </li>
                </ul>
            </ProfileDetails>
        </ProfileContainer>
    )
}