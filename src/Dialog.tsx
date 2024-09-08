import { Dialog, DialogBackdrop } from '@headlessui/react'
import { useGlobalStateContext } from './context/GlobalStateProvider';

export const ConfirmationDialog = () => {
  const { globalState, closeDialog } = useGlobalStateContext()
  const { dialogContent } = globalState

  return (
    <>
      <Dialog open={!!dialogContent} onClose={closeDialog} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        {dialogContent}
      </Dialog>
    </>
  )
}