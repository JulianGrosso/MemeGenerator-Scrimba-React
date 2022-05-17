import { useState } from "react";
import styled from "styled-components";
import memesData from "../assets/memesData";

export const MemeGen = () => {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "https://i.imgflip.com/1h7in3.jpg",
	});

	const allMemeImages = memesData;

	const getMemeImage = (e) => {
		e.preventDefault();
		const memesArray = allMemeImages.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		const { url } = memesArray[randomNumber];

		setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
	};

	const handleChange = (e) => {
		setMeme((prevMemeData) => {
			return {
				...prevMemeData,
				[e.target.name]: e.target.value,
			};
		});
	};

	return (
		<FullContainer>
			<ImgWrap>
				<MemeTopText>{meme.topText}</MemeTopText>
				<MemeBottomText>{meme.bottomText}</MemeBottomText>
				<MemeImg src={meme.randomImage} alt="Meme image" />
			</ImgWrap>
			<MemeForm>
				<InputText
					type="text"
					placeholder="Top text"
					name="topText"
					onChange={handleChange}
					value={meme.topText}
				/>
				<InputText
					type="text"
					placeholder="Bottom text"
					name="bottomText"
					onChange={handleChange}
					value={meme.bottomText}
				/>
				<Button onClick={getMemeImage}>Change meme image</Button>
			</MemeForm>
		</FullContainer>
	);
};

const FullContainer = styled.main`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	margin-top: -50px;
	padding: 50px 20px 0px 20px;
`;

const MemeForm = styled.form`
	display: grid;
	grid-template: 40px 40px / 1fr 1fr;
	gap: 14px;
`;

const InputText = styled.input`
	border: solid 1.5px #c3c3c3;
	border-radius: 10px;
	background: none;
	padding: 12px;
	font-size: 1rem;
	color: #f5f5f5;
	transition: all 150ms ease-in-out;

	&:focus {
		outline: none;
		border: 1.5px solid #e8e8e8;
	}

	&:hover {
		border: 1.5px solid #e8e8e8;
	}

	&::placeholder {
		color: #c3c3c3;
		font-size: 0.9rem;
	}
`;

const Button = styled.button`
	grid-column: 1/-1;
	letter-spacing: 0.6px;
	color: #fff;
	background-color: rgba(54, 84, 218, 0.8);
	border-radius: 10px;
	border: none;
	outline: none;
	transition: all 200ms ease-in-out;
	user-select: none;

	&:hover {
		background-color: #d03f65;
		cursor: pointer;
	}
`;

const ImgWrap = styled.div`
	height: 78%;
	width: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
	user-select: none;
	margin: 0px 10px;
`;

const MemeTopText = styled.h2`
	position: absolute;
	width: 100%;
	top: 2%;
	margin: 0px 10px;

	font-family: "Anton";
	font-size: 40px;
	font-weight: normal;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 2px;
	white-space: initial;
	color: #eee;
	text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
		-2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000,
		2px 2px 5px #000;
`;

const MemeBottomText = styled.h2`
	position: absolute;
	width: 100%;
	bottom: 2%;
	margin: 0px 10px;

	font-family: "Anton";
	font-size: 40px;
	font-weight: normal;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 2px;
	white-space: initial;
	color: #eee;
	text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
		-2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000,
		2px 2px 5px #000;
`;

const MemeImg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;
