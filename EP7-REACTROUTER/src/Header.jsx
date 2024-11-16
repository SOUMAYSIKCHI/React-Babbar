import React from "react";
import { Route, Routes,Link,NavLink, Outlet } from "react-router-dom";

function Header(){
    return(
        <div>
            <Outlet/>
        </div>
    )
}

export default Header