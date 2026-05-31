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
    return (
        <header className='border-b'>
            <div className='container flex h-16 items-center p-4'>
                <a className='text-xl font-bold m-2' href='/'>SPD</a>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink href='/' className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button asChild className='bg-sky-400'>
                                <Link to='/reservations/create'>Create Res</Link>
                            </Button>   
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}