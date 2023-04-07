import useSwr from "swr"
import axios from "axios"

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const useContacts = () => {
    const { data, error, isLoading, mutate } = useSwr("/api/contacts/all", fetcher)

    return {data, error, isLoading, mutate}
}

export default useContacts