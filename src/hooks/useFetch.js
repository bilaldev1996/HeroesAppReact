import { useEffect, useRef, useState } from "react";

//Custom hook para realiar una peticion con FETCH

const useFetch = ( url , method , body ) => {

    if(!url){
        throw new Error('No url provided');
    }

    const [data, setData] = useState({data:null, loading:true, error:null});

    const isMounted = useRef(true);


    useEffect(() => {

        return () => {
            isMounted.current = false;
        }

    }, []);

    useEffect(() => {
        if(method === 'GET'){
            setData({data:null, loading:true, error:null});
            
                //Condicionar la peticion si el elemento esta desmontado
                isMounted.current && fetch(url)
                .then(response => response.json())
                .then(data => {
                    setData({data, loading:false, error:null});
                })
            }else if(method === 'POST'){
                setData({data:null, loading:true, error:null});
                isMounted.current && fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                    setData({data, loading:false, error:null});
                })
            }
        }, [url]);

    return data;

}

export default useFetch