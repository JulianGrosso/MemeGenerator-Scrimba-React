import styled from "styled-components";

const Header = () => {
	return (
		<HeaderWrap>
			<PointWrapper>
				<Point color="#cb1717" />
				<Point color="#cbb017" />
				<Point color="#47cb17" />
			</PointWrapper>
			<h1>Meme Generator</h1>
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
`;

const PointWrapper = styled.div`
	position: absolute;
	left: 20px;

	display: flex;
	flex-direction: row;
	gap: 10px;
`;

const Point = styled.div`
	width: 12px;
	height: 12px;
	background-color: ${(props) => props.color};
	border-radius: 50%;
`;
