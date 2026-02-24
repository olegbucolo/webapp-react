import { Outlet } from "react-router-dom";
import HeaderMain from "./HeaderMain";

export function MainLayout() {
    return (
        <>
            <HeaderMain />
            <Outlet />
        </>
    )
}