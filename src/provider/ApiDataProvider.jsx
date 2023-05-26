import { createContext, useContext, useEffect, useState } from "react";

const ApiContext = createContext()

const ApiDataProvider = ({children}) => {
    const [chefs, setChefs] = useState([])
    const getChefs = async () => {
        const res = await fetch("https://feans-chefs-api.vercel.app/")
        const data = await res.json()
        setChefs(data)
    }
    useEffect(() => {
        getChefs()
    },[])

    const apiDatas = {
        chefs,

    }
    return (
        <ApiContext.Provider value={apiDatas}>
            {children}
        </ApiContext.Provider>
    )
}

const useApiData = () => {
    return useContext(ApiContext)
}

export {
    ApiDataProvider,
    useApiData
}