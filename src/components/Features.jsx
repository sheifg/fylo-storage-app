import { FeaturesStyles } from "./myStyledComponents/FeaturesStyles";
import featureimg from "../images/illustration-1.svg";
import { Input } from "./myStyledComponents/Input";
import { Button } from "./myStyledComponents/Button";

export default function Features() {
  return (
    <FeaturesStyles>
      <div>
        <h1> All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <article>
          <Input />
          <Button>Get started</Button>
        </article>
      </div>
      <img src={featureimg} />
    </FeaturesStyles>
  );
}

// The texts for the h1 and p are found in the index.html from fylo folder
