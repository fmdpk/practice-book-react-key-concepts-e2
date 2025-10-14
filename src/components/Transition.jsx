import {useState} from 'react';

export default function Transition() {
  const [error, setError] = useState(null);

  async function storeTodoAction(formData) {
    const todoTitle = formData.get('title');
    if (!todoTitle || todoTitle.trim() === '') {
      setError('Title is required.'); // state update BEFORE delay
    }
    // 3s delay to simulate a slow process
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log('Submission done!');
  }

  return (
      <>
        <form action={storeTodoAction}>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title"/>
          </p>
          {error && <p className="errors">{error}</p>}
          <p className="actions">
            <button>Store Todo</button>
          </p>
        </form>
      </>
  );
}
