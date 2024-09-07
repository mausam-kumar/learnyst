import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { FC } from 'react'

type ConfirmationDialogProps = {
    isOpen: boolean
    handleConfirm: () => void
    handleCancel: () => void
};

export const ConfirmationDialog: FC<ConfirmationDialogProps> = ({ isOpen, handleCancel, handleConfirm }) => {

  return (
    <>
      <Dialog open={isOpen} onClose={handleCancel} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 bg-white p-12">
            <DialogTitle className="font-bold">Delete  User</DialogTitle>
            <Description>Are you sure you want to delete this User?</Description>
            <div className="flex gap-4">
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={handleConfirm}>Confirm</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}