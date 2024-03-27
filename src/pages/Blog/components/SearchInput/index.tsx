import { useForm } from "react-hook-form";
import { SearchInputContainer } from "./styles";

import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchInputProps {
    getPosts: (query?: string) => Promise<void>
}

export const SearchInput = ({ getPosts }: SearchInputProps) => {

    const { register, handleSubmit } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema)
    })

    const handleSearchPosts = async (data: SearchFormInput) => {
        await getPosts(data.query)
    }

    return (
        <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
            <header>
                <h3>Publicações</h3>
                <span>3 publicações</span>
            </header>

            <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
        </SearchInputContainer>
    );
}
