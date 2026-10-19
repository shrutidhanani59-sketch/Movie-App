export function ProtectedRoute({children}){

    if(!localStorage.getItem("token")){
        location.href =  "/";
        return;
    }
    return children;

} 