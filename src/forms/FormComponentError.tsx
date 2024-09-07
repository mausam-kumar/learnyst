const ExclamationCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-circle" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
  
export const FormInputComponentErrors = ({
    errorMessage, errorElementId,
  }: {
    errorMessage: string;
    errorElementId?: string
  
  }) => (
    <div id={errorElementId} className="mt-2 flex flex-row items-center">
      <ExclamationCircleIcon />
      <span className="pl-0.5 text-xs text-red-500 ">{errorMessage}</span>
    </div>
  );