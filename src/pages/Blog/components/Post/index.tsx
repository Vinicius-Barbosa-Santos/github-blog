import { PostContainer } from "./styles"

export const Post = () => {
    return (
        <PostContainer to={'/post/1'}>
            <div>
                <strong>JavaScript data types and data structures</strong>
                <span>Há 1 dia</span>
            </div>

            <p>
                Programming languages all have built-in data structures, but these often differ from one language to another. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatem totam ratione libero ab labore molestias alias in? Minima nemo quaerat veritatis ipsa modi hic error accusamus quo aspernatur vero!
            </p>
        </PostContainer>
    )
}