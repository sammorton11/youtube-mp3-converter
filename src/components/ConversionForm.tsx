import {Grid, Button, Text, Input, StyledCard, Link} from "@nextui-org/react";
import axios, {AxiosRequestConfig} from "axios";
import {useRef, useState} from "react";


export function ConversionForm() {

	const inputUrlRef = useRef<HTMLInputElement>(null);

	const [urlResult, setUrlResult] = useState('');
	const [title, setTitle] = useState('');

	const rapidUrl: string = 'https://youtube-mp36.p.rapidapi.com/dl'
	const rapidHostFreeVersion: string = 'youtube-mp3-download1.p.rapidapi.com'


	function youtube_parser(url: string | undefined){
		const regExp: RegExp=
			/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
		const match = url?.match(regExp);
		return (match&&match[7].length==11)? match[7] : false;
	}

	const handleSubmit = () => {
		const youtubeID = youtube_parser(inputUrlRef?.current?.value);

		const options: AxiosRequestConfig = {
			method: 'GET',
			url: rapidUrl,
			params: {id: youtubeID},
			headers: {
				'X-RapidAPI-Key': 'fc2ffd02bdmsh3898ad4fbf241b4p1705bfjsn4713291ea8aa',
				'X-RapidAPI-Host': rapidHostFreeVersion
			}
		};

		axios(options)
			.then((res) => {
				setUrlResult(res.data.link)
				setTitle(res.data.title)
			})
			.catch((err) => console.log(err));
	};

	return (
		<>

			<Grid.Container gap={2} justify="center" css={{margin: '15px'}}>
				<Grid>
					<StyledCard css={{p: '25px'}}>
						<Grid>
							<Text h3 css={{fontSize: '45px', font: ''}}>YouTube to MP3 Converter</Text>
							<Input
								ref={inputUrlRef}
								css={{
									w: '625px'
								}}
								placeholder={"Type in YouTube Url..."}>
							</Input>
						</Grid>
						<Grid>
							<Button color='warning' css={{ p: '15px'}} onPress={handleSubmit}>Convert MP3</Button>
						</Grid>
						<Grid>
							{urlResult !== "" && (
								<StyledCard css={{backgroundColor: 'blanchedalmond', padding: '15px'}}>
									<Link
										isExternal
										underline
										to={urlResult}
										target="_blank"
										color = "azure"
										rel="noopener noreferrer">
										{title}
									</Link>
									<a href={urlResult} target="_blank" color = "azure" rel="noopener noreferrer">{title}</a>
								</StyledCard>
							)}
						</Grid>
					</StyledCard>
				</Grid>
			</Grid.Container>
		</>
	);
}
