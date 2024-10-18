import { Signup, SignUpContainer } from "./myStyledComponents/SignUpStyles";
import { Input } from "./myStyledComponents/Input";
import { Button } from "./myStyledComponents/Button";

export default function SignUp() {
  return (
    <>
      <Signup>
        <SignUpContainer>
          <div>
            <h1>Get early access today</h1>
            <p>
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
          <div>
            <Input />
            <Button>Get started for free</Button>
          </div>
        </SignUpContainer>
      </Signup>
    </>
  );
}
