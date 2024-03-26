import { SearchInputContainer } from "./styles";

export const SearchInput = () => {
    return (
        <SearchInputContainer>
            <header>
                <h3>Publicações</h3>
                <span>3 publicações</span>
            </header>

            <input type="text" placeholder="Buscar conteúdo" />
        </SearchInputContainer>
    );
}
