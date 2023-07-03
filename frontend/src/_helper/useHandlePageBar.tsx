import { useDispatch } from "react-redux";
import { sidebarPage } from "../_redux/dispatch/sidebar";

const useHandlePageBar = (page:string) => {
    const dispatch = useDispatch();    

    return sidebarPage(page, dispatch)
}

export default useHandlePageBar;

/* custom hook mới là useHandlePageBar() vì useDispatch() là 1 hook cho nên theo quy tắc của React Hook, phải tạo 1 hook mới có thẻ sử
dụng useDispatch() */