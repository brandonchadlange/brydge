import Button from "@/components/Button";
import withAuthenticationLayout from "@/components/withAuthenticationLayout";

import Link from "next/link";
import { useRouter } from "next/router";


const EmailVerification = () => {
    const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen w-100">
      <div className=" text-center flex flex-col w-10/12 p-4  md:justify-center h-5/6 md:w-[440px] md:h-3/4">
        <div className="text-5xl font-bold mb-7">Welcome!🎉</div>
        <div className="text-xl">Your email has been successfully confirmed!</div>
        <div className="flex flex-col justify-center mt-8 md:flex-row font-semibold">
         
        <Button type="button" full>
            <Link href="/login" >
                Continue to login
            </Link>
        </Button>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticationLayout(EmailVerification)
