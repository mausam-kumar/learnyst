import { useController } from "react-hook-form";
import { FormInputComponentErrors } from "./FormComponentError";

const TextArea = ({
    name,
    placeholder,
    title
}: {
    name: string;
    placeholder?: string;
    title?: string
}) => {
    const { field, fieldState } = useController({ name });

    return (
        <>
            <div>
                {!!title && <label className="block text-sm font-medium leading-6 text-gray-900">
                    {title}
                </label>}
                <div className="mt-2">
                    <textarea
                        rows={5}
                        placeholder={placeholder}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        {...field}
                    />
                </div>
                <div className="h-5 flex items-center">
                    {fieldState.error?.message && (
                        <FormInputComponentErrors errorMessage={fieldState.error?.message} />
                    )}
                </div>
            </div>
        </>
    );
};

export default TextArea