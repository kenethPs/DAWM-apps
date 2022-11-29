interface NavbarItem {
	href: string;
	text: string
}

interface Navbar {
	"site-name":string;
	"links": Array<NavbarItem>
}

export { Navbar, NavbarItem }