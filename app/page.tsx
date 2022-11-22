import ProfileIcon from "../components/profile-icon";
import StyledHeader from "../components/styled-header";

import PFP from '../assets/images/profileIcon.jpg'

export default function Home() {
  return (
    <div>
      <main>
        {/* <div className="flex w-full h-screen flex-row justify-center items-center"> */}
        <div className="absolute left-1/2 transform translate-y-full -translate-x-1/2">
          <div className="flex flex-row items-center justify-center w-full">
            <div>
              <div className="core-color-gradient">
                <StyledHeader gradient={false} text="Meth" />
                <StyledHeader gradient={false} text="Munindradasa" />
              </div>
              <div className="text-white font-bold">Full-stack Developer</div>
              <div className="text-not-selected">Passionate about tech</div>
            </div>
            <div className="w-32"></div>
            <ProfileIcon imageIcon={PFP} />
          </div>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
