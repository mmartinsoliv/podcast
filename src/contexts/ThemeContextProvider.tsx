import {
   useContext,
   createContext,
   useState,
   useEffect,
   ReactNode
} from 'react'

type ThemeContextData = {
   isDarkMode: boolean;
   switchTheme: (isDarkMode: boolean) => void
}

const ThemeContext = createContext({} as ThemeContextData)

type ThemeProps = {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProps) => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    useEffect(() => {
        const currentTheme = localStorage.getItem('@podcastrnext/theme')

        if(currentTheme) {
            switchTheme(currentTheme === 'darkTheme')
        }
    }, [])

    const switchTheme = (isDarkMode: boolean) => {
        if(isDarkMode) {
           localStorage.setItem('@podcastrnext/theme', 'darkTheme')
           document.body.classList.add('darkMode')
           setIsDarkMode(true)
        } else {
            localStorage.setItem('@podcastrnext/theme', 'lightTheme');
            document.body.classList.remove('darkMode')
            setIsDarkMode(false)
        }
    }

    return (
        <ThemeContext.Provider value={{isDarkMode, switchTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if(!context) throw new Error('ThemeContext does not exists')

    return context
}