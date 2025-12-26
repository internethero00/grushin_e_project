import {Globe, Moon, Sun} from 'lucide-react';
import styles from './Header.module.scss'
import {headerNav} from "@/shared/config/header-nav.ts";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select.tsx";


interface HeaderProps {
    setIsDark: (mode: boolean) => void
    isDark: boolean
    langs: 'eng' | 'ru',
    setLangs: (langs: 'eng' | 'ru') => void
}

export function Header({setIsDark, isDark, langs, setLangs}: HeaderProps) {

    return (
        <header className={styles.header}>
            <h1 className='text-2xl'>Egor Grushin</h1>
            <nav>
                <ul className="flex items-center gap-x-[30px] sm:gap-x-10">
                    {headerNav.map(nav => (
                        <li className="text-sm hover:underline cursor-pointer" key={nav}>{nav}</li>
                    ))}
                </ul>
            </nav>
            <div className="flex items-center gap-x-10">
                <div>
                    <Select value={langs} onValueChange={setLangs}>
                        <SelectTrigger className='border-none'>
                            <Globe />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className='bg-background text-text_color'>
                                <SelectItem value="eng">eng</SelectItem>
                                <SelectItem value="ru">ru</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className={styles.icon}>
                    {isDark ? <div onClick={() => setIsDark(false)}><Sun/></div>
                        : <div onClick={() => setIsDark(true)}><Moon/></div>}
                </div>
            </div>
        </header>)

}