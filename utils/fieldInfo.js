import { MoonLoader } from "react-spinners";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function FieldInfo({ field }) {
  const {meta} = field.state;
  return (
    <div className="ml-2 flex items-center gap-1 text-sm">
      {meta.isValidating ? (
        <MoonLoader color="#1cdebb" size={20} />
      ) : meta.isTouched && !meta.isValid ? (
        <em className="text-red-600 flex justify-end">{meta.errors.join(", ")}</em>
      ) : meta.isTouched && meta.isValid ? (
        <IoIosCheckmarkCircleOutline className="text-green-500 text-lg" />
      ) : null}
    </div>
  );
}