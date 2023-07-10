import { showSidebarFailed, showSidebarStart, showSidebarSuccess, sidebarFailed, sidebarStart, sidebarSuccess } from "../reducer/sidebarSlice"

export const sidebarPage = async(page:string, dispatch:any) => {    
    dispatch(sidebarStart());
    try {
        dispatch(sidebarSuccess(page))
    } catch (error) {
        dispatch(sidebarFailed())
    }
}

export const showSideBar = async(isShow:boolean, dispatch:any) => {
    dispatch(showSidebarStart());
    try {
        dispatch(showSidebarSuccess(isShow))
    } catch (error) {
        dispatch(showSidebarFailed())
    }
}