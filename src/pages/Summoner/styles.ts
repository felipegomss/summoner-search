import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
	place-items: center;
	height: 100vh;
	background-color: #DCE0F2;
	@media (min-width: 760px) {
		background-color: initial;

	}
`;
export const Content = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 760px) {
		display: flex;
		background-color: #DCE0F2;
		padding: 5em;
		box-shadow: rgba(130, 120, 191, 0.25) 0px 14px 28px, rgba(130, 120, 191, 0.22) 0px 10px 10px;
		border-radius: 5px;
		position: relative;
	}
`;

export const Loading = styled.div`
	position: fixed;
	left: 0;
	bottom: 0;
	right: 0;
	top: 0;
	z-index: 99;
	background-color: #f1f2f3;
	display: grid;
	place-items: center;
`;