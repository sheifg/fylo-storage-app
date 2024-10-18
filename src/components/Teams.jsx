import { TeamsContainer, TopBorder } from "./myStyledComponents/TeamStyles";
import sideImage from "../images/illustration-2.svg";

export default function Teams() {
  return (
    <>
      <TopBorder />
      <TeamsContainer>
        <div>
          <h1>Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            {" "}
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>
        </div>
        <img src={sideImage} />
      </TeamsContainer>
    </>
  );
}
