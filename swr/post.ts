import useSwr from "swr"
import axios from "axios"

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const usePost = () => {
    const { data, error, isLoading, mutate } = useSwr("/api/post/all", fetcher)

    return {data, error, isLoading, mutate}
}

export default usePost