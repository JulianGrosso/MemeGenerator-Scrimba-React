import styled from "styled-components";
import Header from "./components/Header";
import { MemeGen } from "./components/MemeGen";

function App() {
	const textHeader = {
		appTitle: "Meme Generator",
	};

	const textMemeGen = {
		inputTop: "Top text",
		inputBottom: "Bottom text",
		buttonChangeMeme: "Change meme image",
		buttonDownload: "Download",
	};

	return (
		<FullContainer>
			<AppWrapper>
				<Header text={textHeader} />
				<MemeGen text={textMemeGen} />
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
`;
