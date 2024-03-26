import { ComponentProps } from "react"
import { ExternalLinkContainer } from "./styles"

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
    text: string
}

export const ExternalLink = ({ text, ...rest }: ExternalLinkProps) => {
    return (
        <ExternalLinkContainer {...rest}>
            {text}
        </ExternalLinkContainer>
    )
}