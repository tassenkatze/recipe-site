import { useEffect, useState } from "react"

// erstellen von custom Hook um es überall zu verwenden
// speichern der functiion als const, Name muss mit 'use' beginnen
const useFetch = (url: string) => {
    const [data, setData] = useState();
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
                //console.log(data);
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

export default useFetch;