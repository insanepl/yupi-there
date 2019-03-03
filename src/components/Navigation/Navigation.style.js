import styled, { keyframes}  from 'styled-components';
import { rem, rgba } from 'polished';
import { Link } from 'react-router-dom';
import {  variables, colors } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';

const { globalSize, transitions, fontSize } = variables;

export const animateTopLine = keyframes`
  0% {
    transform: translateY(-3px) rotate(0);
  }
  
  40% {
    transform: translateY(1px) rotate(0);
  }
  
  100% {
    transform: translateY(1px) rotate(45deg);
  }
`;

export const animateBottomLine = keyframes`
  0% {
    transform: translateY(3px) rotate(0);
  }
  
  40% {
    transform: translateY(-1px) rotate(0);
  }
  
  100% {
    transform: translateY(-1px) rotate(-45deg);
  }
`;

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${rem(globalSize.navigationHeight)};
  background: ${colors.white};
  z-index: 20;
`;

export const NavWrapper = styled.div`
  ${containerStyles};
  
  display: flex;
  justify-content: space-between;
  height: ${rem(globalSize.buttonHeight)};
`;

export const LogoWrapper = styled.div`
  flex: 0 0 auto;
  align-self: center;
  font-size: ${fontSize.menu};
  color: ${colors.darkBlue};
`;

export const MainMenu = styled.ul`
  position: absolute;
  top: ${rem(globalSize.navigationHeight)};
  left: 0;
  width: 100%;
  margin: 0;
  padding: ${rem('32px')} 0;
  height: auto;
  background: ${colors.white};
  box-shadow: 0 40px 120px 0 ${rgba(colors.blueGrey, .2)};
  overflow: hidden;
  transform-origin: 0 0;
  transform: scaleY(0);
  transition: transform .4s ${transitions.spring};
  
  &.isActive {
    transform: scaleY(1);
  }
`;

export const MainMenuItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  
  &:last-child {
    margin: ${rem(globalSize.gutter)} 0 0;
    padding: 0 ${rem(globalSize.gutter)};
  }
`;

export const MenuLink = styled(Link)`
  flex: 0 0 100%;
  color: ${colors.blueGrey};
  font-size: ${fontSize.menu};
  text-decoration: none;
  background: ${colors.white};
  padding: ${rem('12px')} ${rem(globalSize.gutter)};
  border-bottom: 1px solid ${rgba(colors.blueGrey, .2)};
`;

export const SubMenuWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 0 0 100%;
  margin: 0;
  padding: ${rem(globalSize.gutter)} ${rem(globalSize.gutter)} ${rem('6px')};
  background: ${colors.titanWhite};
`;

export const SubMenuItem = styled.li`
  flex: 1 1 calc(55% - ${globalSize.gutter});
  margin: 0 0 ${rem('14px')};
`;

export const SubMenuLink = styled(Link)`
  color: ${colors.blueGrey};
  text-decoration: none;
`;

export const BurgerIcon = styled.span`
  position: relative;
  display: block;
  
  &:before,
  &:after {
    content: '';
    display: block;
    width: ${rem('22px')};
    height: 2px;
    background: ${colors.darkBlue};
    transition: transform .5s ${transitions.spring};
  }
  
  &:before {
    transform: translateY(-3px);
  }
  
  &:after {
    transform: translateY(3px);
  }
`;

export const BurgerWrapper = styled.button`
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  border-radius: 100%;
  align-self: center;
  width: ${rem(globalSize.buttonHeight)};
  height: ${rem(globalSize.buttonHeight)};
  cursor: pointer;
  
  &:focus {
    outline: 0;
    box-shadow: none;
  }
  
  &.isActive {
    ${BurgerIcon} {
      &:before {
        animation: ${animateTopLine} .5s ${transitions.spring} forwards;
      }
  
      &:after {
        animation: ${animateBottomLine} .5s ${transitions.spring} forwards;
      }
    }
  }
`;