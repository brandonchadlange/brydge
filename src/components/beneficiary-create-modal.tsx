import FormField from "@/utils/useFormField";
import { useState } from "react";
import Modal from "./modal";

interface BeneficiaryCreateModalController {
  _showing: Stateful<boolean>;
  show: () => void;
  hide: () => void;
}

type Props = {
  controller: BeneficiaryCreateModalController;
};

const BeneficiaryCreateModal = ({ controller }: Props) => {
  const { _showing } = controller;

  return (
    <Modal show={_showing.get} setShow={_showing.set}>
      <button className="mt-10 w-full py-2 bg-black text-white rounded-md font-medium">
        Make pay out
      </button>
    </Modal>
  );
};

export const useBeneficiaryCreateModal =
  (): BeneficiaryCreateModalController => {
    const [_showing, _setShowing] = useState(false);

    return {
      _showing: {
        get: _showing,
        set: _setShowing,
      },
      show() {
        _setShowing(true);
      },
      hide() {
        _setShowing(false);
      },
    };
  };

export default BeneficiaryCreateModal;
