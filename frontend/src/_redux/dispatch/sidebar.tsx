import { sidebarFailed, sidebarStart, sidebarSuccess } from "../reducer/sidebarSlice"

export const sidebarPage = async(page:string, dispatch:any) => {    
    dispatch(sidebarStart());
    try {
        dispatch(sidebarSuccess(page))
    } catch (error) {
        dispatch(sidebarFailed())
    }
}