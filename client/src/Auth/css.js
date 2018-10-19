import styled from 'styled-components';

export const Contain = styled.div`
	max-width: 500px;
	margin: 20px auto;
	border: solid black 1px;
	background-color: lightgreen;
	margin-bottom: 20px;
`

export const FlexForm = styled.form`
	display: flex;
	flex-direction: column;
	margin: 20px 10%;
	border: 1px solid blue;
`

export const MainH1 = styled.h1`
	text-align: center;
	font-size: 20px
`

export const BTN = styled.button`
	border: solid green 1px;
	&:hover {
		background-color: grey;
		color:white;
		cursor: pointer;
	}
`

export const BTNDiv = styled.div`
	display: flex;
	justify-content: center;
`

export const ErrorMsg = styled.div`
	margin-top: 10px;
	text-align: center;
	color: red;
`

