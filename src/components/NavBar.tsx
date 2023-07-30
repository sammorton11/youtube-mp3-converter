import { Navbar, Text } from "@nextui-org/react";
import {Component} from "react";

export class NavBar extends Component {
	render() {
		return (
			<Navbar
				css={{
					background: 'lightslategrey'
				}}
				isBordered
				variant="floating"
			>
				<Navbar.Brand>
					<Text b color="inherit" hideIn="xs">
						Sam Morton
					</Text>
				</Navbar.Brand>
				<Navbar.Content>
					<Navbar.Link color="inherit" href="/">
						Home
					</Navbar.Link>
					<Navbar.Link color="inherit" href="https://www.linkedin.com/in/samuel-morton-a7b82a232/">
						LinkedIn
					</Navbar.Link>
					<Navbar.Link color="inherit" href="https://github.com/sammorton11">
						GitHub
					</Navbar.Link>
					<Navbar.Link href="/about">
						About
					</Navbar.Link>
				</Navbar.Content>
			</Navbar>
		)
	}
}
