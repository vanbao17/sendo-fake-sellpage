import { Context } from "./Context";
import { useEffect, useState } from "react";
function Provider({children}) {
    const [hidemenu,sethidemenu]=useState(false)
    const [icon,seticon]=useState(false)
    const [menufix,setmenufix]=useState(false)
    useEffect(()=> {
        const fixedMenu = () => {
            if(document.documentElement.scrollTop > 50 ) {
                setmenufix(true)
            }
            else {
                setmenufix(false)
            }
            console.log(document.documentElement.scrollTop);
        }
        window.addEventListener('scroll',fixedMenu)
        return () => {
            window.removeEventListener('scroll', fixedMenu);
        };
    })
    return <Context.Provider value={{hidemenu,sethidemenu,icon,seticon,menufix,setmenufix}}>
        {children}
    </Context.Provider>
}
export default Provider