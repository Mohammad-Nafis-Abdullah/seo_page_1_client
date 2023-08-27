import { useEffect, useState } from "react";
import { DataSchema } from "../schemas/dataSchema";
import axios from "axios";


export default function useFetchData(url:string){
    const [state, setState] = useState([] as DataSchema[]);
    const [refetcher, setRefetcher] = useState(false);

    useEffect(()=> {
        axios.get(url).then(({data})=>setState(data));
    },[refetcher,url])


    return {data:state,refetch:function(){setRefetcher(prev=>!prev)}}
}