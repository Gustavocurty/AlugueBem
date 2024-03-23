import styled  from "styled-components";

export const HeaderImg = styled.img`
    width: 12rem;
    height: 11rem;
    margin-left: 25%;
`;

export const HeaderStyle = styled.div`
    background-color: white;
    /* top: 0;
    left: 0;
    right: 0;
    z-index: 20; */
    display: flex;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08); /* Apliquei um sombreamento semelhante ao shadow-md */
    /* padding: 0; */
`;

export const NavbarEnd = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: right;
    align-items: center;
    margin-right: 10px;
`;

export const MenuList = styled.ul`
    display: flex;
    justify-content: right;
    align-items: center;

`;

export const LogoContainer = styled.div`

`;

export const NavbarStart = styled.div`

    display: flex;

`;