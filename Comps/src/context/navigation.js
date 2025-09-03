import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopstate = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handlePopstate);

        return () => {
            window.removeEventListener('popstate', handlePopstate);
        }
    }, []);
    
    const navigate = (to) => {
        window.history.pushState({}, '', to)
        setCurrentPath(to);
    }

    return (
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {children}
        </NavigationContext.Provider>
    )
}

export { NavigationProvider };
export default NavigationContext;
