import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ExternalLink } from "../../../../components/ExternalLInk"
import { PostHeaderContainer } from "./styles"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

export const PostHeader = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <PostHeaderContainer>
            <header>
                <ExternalLink
                    as="button"
                    onClick={goBack}
                    icon={<FontAwesomeIcon icon={faChevronLeft} />}
                    text="Voltar"
                    variant="iconLeft"
                />
                <ExternalLink text="ver  no Github" href="#" target="_blank" />
            </header>

            <h1>JavaScript data types and data structures</h1>

            <ul>
                <li>
                    <FontAwesomeIcon icon={faGithub} />
                    cameronwll
                </li>
                <li>
                    <FontAwesomeIcon icon={faCalendar} />
                    Há um dia
                </li>
                <li>
                    <FontAwesomeIcon icon={faComment} />
                    5 comentários
                </li>
            </ul>
        </PostHeaderContainer>
    )
}