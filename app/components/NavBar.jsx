import NavItem from "./NavItem"

const navItems = [
    {
    label: 'Why Cypress?',
    path: '/',
    datatest: 'nav-why-cypress'
    },
    {
    label: 'Overview',
    path: '/overview',
    datatest: 'overview'
    },
    {
    label: 'Fundamentals',
    path: '/fundamentals',
    datatest: 'fundamentals'
    },
    {
        label: 'Forms',
        path: '/forms',
        datatest: 'forms'

    },
    {
        label: 'Examples',
        path: '/examples',
        datatest: 'Examples' 
    },
    {
        label: 'Component',
        path: '/component',
        datatest: 'component' 
    },
    {
        label: 'Best Practices',
        path: '/best-practices',
        datatest: 'best-practices'
    },
]

export default function NavBar(){
    return (
        <ul className="nav-bar">
            {
                navItems.map((item)=> (
                    <NavItem 
                    key={item.label} 
                    label={item.label}
                     path={item.path}
                     dataTest={item.dataTest} />
                ))
            }
        </ul>
    )
}