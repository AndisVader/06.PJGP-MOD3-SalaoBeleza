import React from "react";
import './Main.css'

const Main = ({children}) =>{
    return(
        <main className="corpo">
            {children}
        </main>
    )
}
  
export default Main