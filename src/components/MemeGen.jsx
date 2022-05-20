import React, { useState, useCallback, useRef } from "react";
import styled from "styled-components";
import memesData from "../assets/memesData";
import { toPng } from "html-to-image";

export const MemeGen = (props) => {
	const text = props.text;

	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "https://i.imgflip.com/26br.jpg",
	});

	const allMemeImages = memesData;

	const getMemeImage = (e) => {
		e.preventDefault();
		const memesArray = allMemeImages.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		const { url } = memesArray[randomNumber];

		setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
	};

	const handleTextChange = (e) => {
		setMeme((prevMemeData) => {
			return {
				...prevMemeData,
				[e.target.name]: e.target.value,
			};
		});
	};

	const ref = useRef(null);

	const dowloadImgPNG = useCallback(
		(e) => {
			e.preventDefault();

			if (ref.current === null) {
				return;
			}

			toPng(ref.current, {
				cacheBust: true,
				pixelRatio: 1.5,
			})
				.then((dataUrl) => {
					const link = document.createElement("a");
					link.download = "memegenerator.png";
					link.href = dataUrl;
					link.click();
				})
				.catch((err) => {
					console.log(err);
				});
		},
		[ref]
	);

	return (
		<FullContainer>
			<ImgWrap ref={ref}>
				<MemeTopText>{meme.topText}</MemeTopText>
				<MemeBottomText>{meme.bottomText}</MemeBottomText>
				<MemeImg src={meme.randomImage} alt="Meme image" />
			</ImgWrap>
			<MemeForm>
				<InputText
					type="text"
					placeholder={text.inputTop}
					name="topText"
					onChange={handleTextChange}
					value={meme.topText}
				/>
				<InputText
					type="text"
					placeholder={text.inputBottom}
					name="bottomText"
					onChange={handleTextChange}
					value={meme.bottomText}
				/>
				<Button onClick={getMemeImage}>{text.buttonChangeMeme}</Button>
				<Button onClick={dowloadImgPNG}>{text.buttonDownload}</Button>
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
	grid-template: 40px 40px 40px / 1fr 1fr;
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
	height: 72%;
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
	top: 1%;
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
	bottom: 1%;
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
