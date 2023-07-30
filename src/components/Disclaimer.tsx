import {Card, Text} from "@nextui-org/react";
import {NavBar} from "./NavBar.tsx";

export function Disclaimer() {
	return (
		<>
			<NavBar/>
			<Card css={{p: '25px', margin: '25px', width: '1000px'}}>
				<Card.Header>
					<Text b>Disclaimer: YouTube to MP3 Converter</Text>
				</Card.Header>
				<Card.Body>
					This website provides a YouTube to MP3 conversion service solely for educational and learning purposes. The tool is intended to allow users to explore the process of data conversion and understand the technical aspects of audio extraction from videos.

					Important Legal Notice:

					Copyrighted Content: Converting or downloading copyrighted material from YouTube without the explicit permission of the copyright holder may violate copyright laws and YouTube's terms of service. We do not encourage or endorse any unauthorized use of copyrighted content.

					Fair Use: While some uses of copyrighted material might fall under the doctrine of "fair use" in certain jurisdictions, it is essential for users to understand the limitations and interpretations of fair use laws in their respective countries. As the website owner, we do not make any claims regarding the applicability of fair use to your specific use case.

					Responsibility: Users are solely responsible for any content they choose to convert or download using this service. We shall not be held liable for any misuse, copyright infringement, or violation of terms and conditions committed by users.

					Terms of Service: By using this website and its services, you agree to abide by the Terms of Service and all applicable laws and regulations.

					Protecting Copyright Holders:

					We respect the rights of copyright holders and encourage our users to do the same. If you believe that your copyrighted material is being used without authorization, please contact us, and we will take appropriate action.

					Final Words:

					We urge users to familiarize themselves with copyright laws and to use this service responsibly and legally. Remember that unauthorized downloading or distribution of copyrighted material is against the law and can have serious consequences.
				</Card.Body>
			</Card>
		</>
	)
}
