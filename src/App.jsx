import styled from "styled-components";
import Header from "./components/Header";
import { MemeGen } from "./components/MemeGen";

function App() {
	return (
		<FullContainer>
			<AppWrapper>
				<Header />
				<MemeGen />
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
	height: 80%;
	max-width: 1600px;
	max-height: 900px;
	border-radius: 8px;
	background-color: rgba(0, 160, 160, 0.15);
	backdrop-filter: blur(4px);
	margin: 20px;
`;
