import useSwr from "swr"
import axios from "axios"

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const useCurrent = () => {
    const { data, error, isLoading, mutate } = useSwr("/api/current", fetcher)

    return {data, error, isLoading, mutate}
}

export default useCurrent