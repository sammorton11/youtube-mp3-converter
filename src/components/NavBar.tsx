import { Navbar, Text } from "@nextui-org/react";
import {Component} from "react";

export class NavBar extends Component {
	render() {
		return (
			<Navbar
				css={{
					borderRadius: '100px', // Adjust the value as needed	
					backgroundColor: '#99A2A8',
					$$navbarBackgroundColor: "#99A2A8",
  					$$navbarBlurBackgroundColor: "#99A2A8",
					boxShadow: '8px 12px 15px rgba(0, 0, 0, 0.2)',
				}}
				isBordered
				position=""
				disableAnimation
				isBlurred={true}
			>
				<Navbar.Brand>
					<Text b hideIn="xs">
						Sam Morton
					</Text>
				</Navbar.Brand>
				<Navbar.Content>
					<Navbar.Link href="/">
						Home
					</Navbar.Link>
					<Navbar.Link href="https://www.linkedin.com/in/samuel-morton-a7b82a232/">
						LinkedIn
					</Navbar.Link>
					<Navbar.Link href="https://github.com/sammorton11">
						GitHub
					</Navbar.Link>
					<Navbar.Link href="/about">
						About
					</Navbar.Link>
					<Navbar.Link href="https://samuel-morton.netlify.app">
						My Website
					</Navbar.Link>
				</Navbar.Content>
			</Navbar>
		)
	}
}
