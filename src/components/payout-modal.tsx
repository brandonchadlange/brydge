import mutations from "@/frontend/utility/mutations";
import queries from "@/frontend/utility/queries";
import { Beneficiary } from "@prisma/client";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Modal from "./modal";

interface PayoutModalController {
  _showing: Stateful<boolean>;
  _beneficiaryId: Stateful<string>;
  _amount: Stateful<string>;
  show: () => void;
  hide: () => void;
  beneficiaryList: Beneficiary[];
  quote?: CurrencyQuote;
}

type Props = {
  controller: PayoutModalController;
};

const PayoutModal = ({ controller }: Props) => {
  const { _showing, _beneficiaryId, _amount, beneficiaryList, quote } =
    controller;

  return (
    <Modal show={_showing.get} setShow={_showing.set}>
      <h1 className="text-lg font-semibold">Pay Out</h1>
      <p className="text-sm text-gray-500">
        Select beneficiary and input amount to pay out
      </p>
      <div className="mt-5">
        <label>Beneficiary</label>
        <div>
          <select
            value={_beneficiaryId.get}
            onChange={(e) => _beneficiaryId.set(e.target.value)}
            className="p-2 border rounded-md w-full appearance-none outline-none"
            placeholder="Select Beneficiary"
          >
            {beneficiaryList.map((beneficiary) => (
              <option key={beneficiary.id} value={beneficiary.id}>
                {beneficiary.accountHolderName}
              </option>
            ))}
          </select>
        </div>
        <p className="text-xs mt-2 text-gray-500">
          Want to pay out to a new beneficiary?{" "}
          <span className="text-secondary font-semibold cursor-pointer">
            Click here
          </span>{" "}
          to add a new beneficiary.
        </p>
      </div>
      <div className="mt-5">
        <label>Amount to send</label>
        <div>
          <div className="border rounded-md w-full flex items-center outline-none pr-4">
            <input
              value={_amount.get}
              onChange={(e) => _amount.set(e.target.value)}
              type="number"
              className="py-2 px-4 rounded-md w-full outline-none "
            />
            <p>KES</p>
          </div>
          <p className="mt-2">
            ≈ NGN{" "}
            {quote?.sourceAmount ? (quote.sourceAmount * 100).toFixed(2) : ""}
          </p>
        </div>
      </div>
      <button className="mt-10 w-full py-2 bg-black text-white rounded-md font-medium">
        Make pay out
      </button>
    </Modal>
  );
};

export const usePayoutModal = (): PayoutModalController => {
  const { getBeneficiaries } = queries;
  const { createConversionQuote } = mutations;

  const [_showing, _setShowing] = useState(false);
  const [_beneficiaryId, _setBeneficiaryId] = useState("");
  const [_beneficiary, _setBeneficiary] = useState<Beneficiary>();
  const [_amount, _setAmount] = useState("");

  const beneficiaryQuery = useQuery("beneficiaries", getBeneficiaries);

  const quoteQuery = useQuery(
    "conversion-quote",
    () => createConversionQuote(_beneficiary!.currency, _amount),
    {
      enabled: _beneficiary !== undefined && parseInt(_amount) > 0,
    }
  );

  const beneficiaryList = beneficiaryQuery.data || [];
  const quote = quoteQuery.data;

  useEffect(() => {
    if (beneficiaryList.length === 0) return;
    _setBeneficiaryId(beneficiaryList[0].id);
  }, [beneficiaryList]);

  useEffect(() => {
    const selectedBeneficiary = beneficiaryList.find(
      (e) => e.id === _beneficiaryId
    )!;

    _setBeneficiary(selectedBeneficiary);
  }, [_beneficiaryId]);

  useEffect(() => {
    if (_beneficiary && _amount) {
      quoteQuery.refetch();
    }
  }, [_beneficiary, _amount]);

  return {
    _showing: {
      get: _showing,
      set: _setShowing,
    },
    _beneficiaryId: {
      get: _beneficiaryId,
      set: _setBeneficiaryId,
    },
    _amount: {
      get: _amount,
      set: _setAmount,
    },
    show() {
      _setShowing(true);
    },
    hide() {
      _setShowing(false);
    },
    beneficiaryList,
    quote,
  };
};

export default PayoutModal;
