import { Description, DialogPanel, DialogTitle } from "@headlessui/react"
import { FC } from "react";
import { useGlobalStateContext } from "./context/GlobalStateProvider";

type ConfirmationProps = {
    handleConfirm: () => void
};


export const Confirmation: FC<ConfirmationProps> = ({ handleConfirm }) => {
    const { closeDialog } = useGlobalStateContext()

    return <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 bg-white p-12">
            <DialogTitle className="font-bold">Delete  User</DialogTitle>
            <Description>Are you sure you want to delete this User?</Description>
            <div className="flex justify-end gap-x-4">
                <button
                    type="button"
                    onClick={() => {
                        handleConfirm()
                        closeDialog()
                    }}
                    className="rounded-md bg-red-100 px-2.5 py-1.5 text-sm font-semibold text-red-700 shadow-sm hover:bg-red-200"
                >
                    Confirm
                </button>
                <button
                    onClick={closeDialog}
                    type="button"
                    className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                >
                    Cancel
                </button>
            </div>
        </DialogPanel>
    </div>
}