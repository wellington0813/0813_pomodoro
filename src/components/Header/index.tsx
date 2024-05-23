import { HeaderContainer } from "./styles";

import LogoIgnite from '../../assets/logo-ignite.svg'
import { Scroll, Timer } from "phosphor-react";

export function Header() {
    return (
      <HeaderContainer>
        <img src={LogoIgnite} alt="" />
        
        <nav>
          <a href="">
            <Timer size={24}/>
          </a>
          <a href="">
            <Scroll size={24}/>
          </a>
        </nav>
      </HeaderContainer>
    )
  }