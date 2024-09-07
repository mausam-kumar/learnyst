import { useController } from "react-hook-form";
import { FormInputComponentErrors } from "./FormComponentError";

const InputForm = ({
    name,
    title,
    placeholder
}: {
    name: string;
    title: string
    placeholder: string
}) => {
    const { field, fieldState } = useController({ name });

    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                {title}
            </label>
            <div className="mt-2">
                <input
                    {...field}
                    placeholder={placeholder}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
            </div>
            <div className="h-5 flex items-center">
                {fieldState.error?.message && (
                    <FormInputComponentErrors errorMessage={fieldState.error?.message} />
                )}
            </div>
        </div>
    );
};

export default InputForm