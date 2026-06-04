import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const[ account, setAccount ] = useState(null);
    const[ showAuthModal, setShowAuthModal] = useState(false);

    //Load user từ localStorage khi reload
    useEffect(() => {
        const storedAccount = localStorage.getItem("account");
        if(storedAccount) {
            setAccount(JSON.parse(storedAccount));
        }
    },[]);

    //Đăng nhập
    const login = (useData) => {
        setAccount(useData);
        localStorage.setItem("account", JSON.stringify(useData));
        setShowAuthModal(false);
    };

    //Đăng xuất
    const logout = () => {
        setAccount(null);
        localStorage.removeItem("account");
    };

    //Mở modal
    const openAuth  = () => setShowAuthModal(true);

    //Đóng modal 
    const closeAuth = () => setShowAuthModal(false);

    return (
        <AuthContext.Provider
            value={{
                account,
                login,
                logout,
                showAuthModal,
                openAuth,
                closeAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);