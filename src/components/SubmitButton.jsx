import {useFormStatus} from "react-dom";

const SubmitButton = () => {
  const {pending} = useFormStatus()

  return (
      <button disabled={pending}>{pending ? 'Sending Feedback' : 'Send Feedback'}</button>
  )
}

export default SubmitButton
