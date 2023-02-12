import React, { useEffect, useState } from "react";
import Link from "next/link";
import OtpInput from 'react-otp-input';

import Button from "@/components/Button";

const retryTime = 30;

export default function OTPScreen() {
  const userEmail = 'naren@gmai.com';

  const [otp, setOTP] = useState<string>();
  const [timer, setTimer] = useState(retryTime);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);

    if (timer <= 0) {
      clearTimeout(timeout)
    }

    return () => {
      clearTimeout(timeout);
    }
  }, [timer]);

  const resetOTP = () => {
    setTimer(retryTime);
  }

  return (
    <div className="flex flex-col w-10/12 p-4 text-center items-center md:justify-center h-5/6 md:w-3/5 md:h-3/4">
        <div className="text-3xl font-medium">Almost there! 👍</div>
        <div className="my-4 opacity-80">
          A verification code has been sent to <span className="text-lime-500">{userEmail}.</span>
        </div>
        <OtpInput
          value={otp}
          onChange={setOTP}
          numInputs={5}
          separator={<span className="mr-8" />}
          className="my-4"
          inputStyle={{
            border: "1.3px solid rgba(196, 196, 196, 0.5)",
            borderRadius: 8,
            height: 56,
            width: 56,
          }}
        />
        <div className="flex flex-col justify-center mt-4">
          <div className="flex items-center justify-center font-medium text-sm">Didn't receive code?
            <Button
              type="button"
              className={`!m-0 text-lime-500 cursor-pointer !bg-transparent ${timer > 0 && '!text-gray-400'}`}
              onClick={resetOTP}
              disabled={timer > 0}
              >
                Resend OTP { timer > 0 ? `in 0:${timer}` : ''}
              </Button>
          </div>
          <div className="mt-16">
            Already have an account? <Link href="/login" className="text-lime-500 text-sm">Sign in</Link>
          </div>
        </div>
      </div>
  );
};
