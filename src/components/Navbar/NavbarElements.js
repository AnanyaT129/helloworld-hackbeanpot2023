import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background-image: linear-gradient(to right, rgb(255, 196, 86), rgb(255, 108, 133));
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
transition: all 0.3s ease; /* Add transition for hover effects */
`;

export const NavLink = styled(Link)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: white;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #white;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
whiteSpace: 'no-wrap'
`;




