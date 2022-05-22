import styled from "styled-components";
import flagESP from "../assets/flag-esp.png";
import flagENG from "../assets/flag-eng.png";

const Header = (props) => {
	const text = props.text;

	return (
		<HeaderWrap>
			<PointWrapper>
				<Point color="#cb1717" />
				<Point color="#cbb017" />
				<Point color="#47cb17" />
			</PointWrapper>
			<h1>{text.appTitle}</h1>
			<LangSelector onClick={props.changeLang}>
				{props.translate ? (
					<img src={flagESP} alt="Idioma Español" />
				) : (
					<img src={flagENG} alt="Language English" />
				)}
			</LangSelector>
		</HeaderWrap>
	);
};

export default Header;

const HeaderWrap = styled.div`
	width: 100%;
	height: 50px;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: relative;

	color: #ccc;
	border-radius: 8px 8px 0 0;

	background-color: rgb(18, 18, 18);

	h1 {
		font-size: 18px;
		user-select: none;
	}

	@media screen and (max-width: 600px) {
		border-radius: 0;
	}
`;

const PointWrapper = styled.div`
	position: absolute;
	left: 20px;

	display: flex;
	flex-direction: row;
	gap: 10px;

	@media screen and (max-width: 600px) {
		display: none;
	}
`;

const Point = styled.div`
	width: 12px;
	height: 12px;
	background-color: ${(props) => props.color};
	border-radius: 50%;
`;

const LangSelector = styled.a`
	position: absolute;
	right: 15px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 25px;
		height: 25px;
		user-select: none;
	}

	@media screen and (max-width: 600px) {
		right: 8px;

		-webkit-tap-highlight-color: transparent;
	}
`;
