import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ExternalLink } from "../../../../components/ExternalLInk"
import { PostHeaderContainer } from "./styles"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faCalendar, faComment } from "@fortawesome/free-solid-svg-icons"

export const PostHeader = () => {
    return (
        <PostHeaderContainer>
            <header>
                <ExternalLink text="voltar" href="#" />
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