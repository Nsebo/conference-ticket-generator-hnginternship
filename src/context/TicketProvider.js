import { useState } from "react"

import { TicketContext } from "./TicketContext"

const TicketContextProvider=({children})=>{
    const [data,setData]=useState('')
    return (
        <TicketContext.Provider  value={{ data, setState }}>
            {children}
        </TicketContext.Provider>
    )
}
export default TicketContextProvider