import { signIn, SignInResponse } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen text-primary font-primary w-100">
      <div className="flex justify-center flex-col w-full p-6 text-center h-4/5 ">
        <span className="text-2xl font-bold">Welcome✋</span>
        <span className="my-5 text-xl font-medium opacity-80 md:my-3">
          Choose your preferred mode of sign up below
        </span>
        <span className="mb-5 text-sm md:text-xs">
          <span className=" opacity-60">
          By signing in, I agree to compound’s{" "}
          </span>
          <Link href="#" className="text-secondary">
            terms
          </Link>{" "}
          &{" "}
          <Link href="#" className="text-secondary">
            Privacy Policy
          </Link>
        </span>
        {
          <AuthButton
            text={`Sign in with google`}
            image={`/google.svg`}
            onClick={() => signIn("google")}
          />
        }
        <Divider />
        <Link
          href="/signup/email"
          className="flex items-center justify-center w-full py-3 mx-auto mt-4 mb-3 text-white border rounded-full sm:w-4/5 bg-dark"
        >
          Sign up with Email & Phone number
        </Link>
        <span className="font-semibold">
          <span className="opacity-60">
          Already have an account?{" "}
          </span>
          <Link href="/login" className="text-secondary">
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

const AuthButton = ({
  image,
  text,
  onClick,
}: {
  image: string;
  text: string;
  onClick: () => Promise<SignInResponse | undefined>;
}) => {
  return (
    <button
      onClick={() => onClick}
      className="flex items-center justify-center w-full py-3 mx-auto mb-3 border rounded-full sm:w-4/5 border-dark-400"
    >
      <Image src={image} alt="Social Icon" width={25} height={25} />
      <p className="ml-3">{text}</p>
    </button>
  );
};

const Divider = () => {
  return (
    <>
      <div className="w-4/5 py-4 ml-auto mr-auto overflow-hidden text-center divider text-dark before:border-b before:border-dark-100 before:inline-block before:h-2 before:relative before:align-middle before:w-1/2 before:mb-2 after:border-b after:border-dark-100 after:inline-block after:h-2 after:relative after:align-middle after:w-1/2 after:mb-2 before:right-2 before:ml-[-50%] after:left-2 after:mr-[-50%]">
        <span className="text-sm text-primary opacity-60">
          OR
        </span>
      </div>
    </>
  );
};

export default Signup;
