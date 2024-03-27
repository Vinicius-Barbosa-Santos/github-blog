import { useCallback, useEffect, useState } from "react"
import { PostHeader } from "./components/PostHeader"
import { IPost } from "../Blog"
import { api } from "../../lib/axios"
import { useParams } from "react-router-dom"
import { PostContent } from "./components/PostContent"

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export const Post = () => {
    const [postData, setPostData] = useState<IPost>({} as IPost)
    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams()

    const getPostDetails = useCallback(async () => {
        try {
            setIsLoading(true)
            const response = await api.get(`/repos/${username}/${repoName}/issues/${id}`)

            setPostData(response.data)

        } finally {
            setIsLoading(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postData])

    useEffect(() => {
        getPostDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <PostHeader isLoading={isLoading} postData={postData} />
            {!isLoading && <PostContent content={postData.body} />}
        </>
    )
}