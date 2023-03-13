import { ComponentType } from "react";

function applyInput<T>(WrappedComponent: ComponentType<T>) {
  const className =
    "w-full px-5 py-2 border rounded-lg focus:outline-none focus:border-dark-300 focus:ring-1 focus:ring-dark-300";

  const AppliedInputField = (props: T) => {
    return <WrappedComponent {...props} className={className} />;
  };

  return AppliedInputField;
}

export default applyInput;
