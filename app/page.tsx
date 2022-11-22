import ProfileIcon from "../components/profile-icon";
import StyledHeader from "../components/styled-header";

import PFP from '../assets/images/profileIcon.jpg'

export default function Home() {
  return (
    <div>
      <main>
        <div className="border border-red-400 flex w-full h-screen flex-row justify-center items-center">
          <div>
            <StyledHeader text="Meth" />
            <StyledHeader text="Munindradasa" />
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
