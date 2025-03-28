
export const checkValidData = (email,password) =>{
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email) ;
    const isPasswordValid=/(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/.test(password);
    if(!isEmailValid){
        return "Email Entered Is Invalid";
    }
    if(!isPasswordValid){
        return "Password Entered Is Invalid";
    }
    return null;
}