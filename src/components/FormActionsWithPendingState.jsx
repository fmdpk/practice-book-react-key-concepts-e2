import {useActionState} from 'react';

async function saveTodo(todo) {
  // dummy function that simulates a slow backend which manages todos
  await new Promise((resolve) => setTimeout(resolve, 3000)); // delay
  const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
  );
  const fetchedTodo = await response.json();
  console.log(fetchedTodo);
}

function FormActionsWithPendingState() {
  const [formState, formAction, pending] = useActionState(storeTodoAction, {
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
    await saveTodo({title: todoTitle});
    return {
      error: null,
    };
  }

  return (
      <form action={formAction}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title"/>
        </p>
        {formState.error && <p className='errors'>
          {formState.error}
        </p>}
        <p className="actions">
          <button disabled={pending}>
            {pending ? 'Saving' : 'Store'} Todo
          </button>
        </p>
      </form>
  );
}

export default FormActionsWithPendingState;
