import { Context } from "./Context";
import { Children, useState } from "react";
function Provider({children}) {
    const [hidemenu,sethidemenu]=useState(false)
    const [icon,seticon]=useState(false)
    return <Context.Provider value={{hidemenu,sethidemenu,icon,seticon}}>
        {children}
    </Context.Provider>
}
export default Provider