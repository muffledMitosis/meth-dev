import ProfileIcon from "../components/profile-icon";
import StyledHeader from "../components/styled-header";

import PFP from '../assets/images/profileIcon.jpg'

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex w-full h-screen flex-row justify-center items-center">
          <div className="core-color-gradient">
            <StyledHeader gradient={false} text="Meth" />
            <StyledHeader gradient={false} text="Munindradasa" />
          </div>
          <div className="w-32"></div>
          <ProfileIcon imageIcon={PFP} />
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
