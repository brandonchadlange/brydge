import queries from "@/frontend/utility/queries";
import { ReactNode } from "react";
import { useQuery } from "react-query";
import Modal from "./modal";
import { signOut } from "next-auth/react";
import Button from "./Button";

const ApprovalPending = ({ children }: { children: ReactNode }) => {
  const { getEntityVerified } = queries;
  const entityVerifiedQuery = useQuery("entity-verified", getEntityVerified);

  if (entityVerifiedQuery.isLoading) {
    return <></>;
  }

  if (entityVerifiedQuery.data === false) {
    return (
      <>
        <Modal show setShow={() => {}}>
          <h1 className="text-3xl mb-4 font-primary">Awaiting Approval</h1>
          <p className="text-md mb-2 text-gray-600">
            Our team is working behind the scenes to make sure that your
            experience is amazing!
          </p>
          <p className="text-md text-gray-600">
            Check back shortly to start using your account.
          </p>
          <Button
            className="mt-8"
            full
            type="button"
            onClick={() => signOut({ redirect: true, callbackUrl: "/login" })}
          >
            Sign out
          </Button>
        </Modal>
      </>
    );
  }

  return <>{children}</>;
};

export default ApprovalPending;
