import {useFormStatus} from "react-dom";

function SubmitButton() {
  const {pending} = useFormStatus();
  return (
      <button disabled={pending}>
        {pending ? 'Saving' : 'Store'} Todo
      </button>
  );
}
