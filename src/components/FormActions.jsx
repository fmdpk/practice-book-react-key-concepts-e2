import { useActionState } from 'react';
function FormActions() {
  const [formState, formAction] = useActionState(storeTodoAction, {
    error: null,
  });
  console.log('FormActions')
  async function storeTodoAction(prevState, formData) {
    const todoTitle = formData.get('title');
    if (!todoTitle || todoTitle.trim() === '') {
      return {
        error: 'Title must not be empty.',
      };
    }
    // sending HTTP request etc...
    console.log(todoTitle)
    return {
      error: null,
    };
  }

  return (
      <form action={formAction}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        {formState.error && <p className='errors'>
          {formState.error}
        </p>}
        <p className="actions">
          <button>Store Todo</button>
        </p>
      </form>
  );
}

export default FormActions;
