import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { MemeGen } from "./components/MemeGen";

function App() {
	const [translate, setTranslate] = useState(
		() => JSON.parse(localStorage.getItem("translate")) || true
	);

	useEffect(() => {
		localStorage.setItem("translate", JSON.stringify(translate));
	}, [translate]);

	const text = translate
		? {
				header: {
					appTitle: "Generador de Memes",
				},
				memeGen: {
					inputTop: "Texto superior",
					inputBottom: "Texto Inferior",
					buttonChangeMeme: "Cambiar Meme",
					buttonDownload: "Descargar",
				},
		  }
		: {
				header: {
					appTitle: "Meme Generator",
				},
				memeGen: {
					inputTop: "Top text",
					inputBottom: "Bottom text",
					buttonChangeMeme: "Change meme image",
					buttonDownload: "Download",
				},
		  };

	const changeLang = () => {
		setTranslate((prevTranslate) => !prevTranslate);
	};

	return (
		<FullContainer>
			<AppWrapper>
				<Header
					text={text.header}
					changeLang={changeLang}
					translate={translate}
				/>
				<MemeGen text={text.memeGen} />
			</AppWrapper>
		</FullContainer>
	);
}

export default App;

const FullContainer = styled.main`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 375px) {
		height: 100vh;
	}
`;

const AppWrapper = styled.div`
	min-width: 45%;
	width: auto;
	height: 90%;
	max-width: 1600px;
	max-height: 960px;
	border-radius: 8px;
	background-color: rgba(0, 160, 160, 0.15);
	backdrop-filter: blur(4px);
	margin: 20px;

	@media screen and (max-width: 375px) {
		min-width: 45%;
		width: 100%;
		height: 100%;
		margin: 0;
		border-radius: 0px;
	}
`;
