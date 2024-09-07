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
            <div className="flex gap-4">
                <button onClick={closeDialog}>Cancel</button>
                <button onClick={handleConfirm}>Confirm</button>
            </div>
        </DialogPanel>
    </div>
}