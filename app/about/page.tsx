import StyledHeader from "../../components/styled-header";

export default function About() {
  return (
    <div className="flex justify-center">
      <div className="w-full p-4 pt-8 md:p-0 md:w-1/2">

        <div className="mb-8">
          <StyledHeader gradient={true} text="Meth Munindradasa" />
          <div className="text-white font-bold text-sm md:text-base">Full-stack Developer</div>
        </div>

        <p className="text-white">
          Hi there! I’m a hardware and software engineer with experience in full-stack web development. I have deep experties in open source tooling, technical writing & communication, and API design. In addition, I have a broad history of working with computer graphics, embedded systems, mobile development, reverse engineering, and robotics.
        </p>
      </div>
    </div>
  );
}
