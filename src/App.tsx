import {useEffect, useState} from "react";
import {Header} from "./components/Header/Header.tsx";
import './App.css'

function App() {
    const [isDark, setIsDark] = useState(false)
    const [langs, setLangs] = useState<'eng' | 'ru'>('eng')
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark)
    }, [isDark])
    console.log(langs)


    return (<div>
        <Header setIsDark={setIsDark} isDark={isDark} setLangs={setLangs} langs={langs}/>
        {/*<Hero/>*/}
        {/*<Stack/>;*/}
        {/*<Projects/>*/}
        {/*<Footer/>*/}

    </div>)
}

export default App
