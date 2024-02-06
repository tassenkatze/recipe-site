import { useEffect, useState } from "react"
import jsonData from "../data/data.json";

// erstellen von custom Hook um es überall zu verwenden
// speichern der function als const, Name muss mit 'use' beginnen

export const useFetch = (source: string) => {

    // // for JSON
    const { data, error, isPending } = useFetchJsonFile()

    // for API
    // const { data , error, isPending } = useFetchAPI(url)

    return { data, isPending, error }
}

export const useFetchWithKey = (source: string, key?: string) => {

    // // for JSON
    const { data, error, isPending } = useFetchJsonFile()
    const objectData: Recipe = data.filter(i => i.key === key)[0]

    // for API
    // const url = source + "?key=" + key
    // const { data : objectData, error, isPending } = useFetchAPI(url)

    return { objectData, isPending, error }
}

export const useFetchAPI = (url: string) => {
    const [data, setData] = useState<RecipeData>([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // getting data from json-server
        fetch(url)
            // then: only starts when kast task is finished
            .then(res => {
                // throwing error (with own message) if response.ok is false
                if (!res.ok) {
                    throw Error('Could not fetch data')
                }
                // makes typescript array out of response object (res)
                return res.json();
            })
            .then((fetchedData => {
                //use data from response
                //console.log(fetchedData);
                setData(fetchedData);
                setIsPending(false);
                setError(null);
            }))
            // catching error
            .catch((e) => {
                setIsPending(false);
                setError(e.message);
            })
        // hook depends on url --> code is rerun, when url changes
    }, [url])

    return { data, isPending, error }
}

export const useFetchJsonFile = () => {
    const [data, setData] = useState<Recipe[]>([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let objectData: Recipe[] = jsonData.recipies;

        setData(objectData);
        setIsPending(false);
        setError(null);
    })

    return { data, isPending, error }
}
