import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { 
    NavigationMenu, 
    NavigationMenuList, 
    NavigationMenuItem, 
    NavigationMenuLink, 
    navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu"

export function NavBar() {
    //div for bar
    //logo
    //nav-menu
        // home button
        // create res
        // res calendar
        //  sign-in/profile

    const isDisabled = true;
    return (
        <header className='border-b'>
            <div className='container flex h-16 items-center p-4'>
                <a className='text-xl font-bold m-2' href='/'>SPD</a>
                <NavigationMenu>
                    <NavigationMenuList className={'p-3'}>
                        <NavigationMenuItem className={'flex items-center gap-3'}>
                            <Button 
                                asChild 
                                className={`bg-sky-400 ${isDisabled ? 'pointer-events-none opacity-50' : ''}`} 
                            >
                                <Link to={isDisabled ? '#' : '/reservations/create'}>Create Res</Link>
                            </Button>
                            <Button 
                                asChild
                                className={'bg-sky-400'}
                            >
                                <Link to={'available-nums'}>View Uniform Numbers</Link>
                            </Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}