import { useState } from 'react';
import { useDebounce } from '../hooks';
import classes from './NewPost.module.css';

function NewPost() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const [error, setError] = useState(null);

  console.log(enteredTitle)

  // Use the custom debounce hook
  const debouncedSaveTitle = useDebounce((title) => {
    // This will be called 500ms after user stops typing
    console.log(title)
    // You can perform API calls, validations, or other expensive operations here
  }, 1000);

  function handleUpdateTitle(event) {
    setEnteredTitle(event.target.value);
    debouncedSaveTitle(event.target.value); // Call the debounced function
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsSendingRequest(true);
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ title: enteredTitle }),
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSendingRequest(false);
      setEnteredTitle('');
    }
  }

  return (
      <>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div>
            <label>Title</label>
            <input
                type="text"
                onChange={handleUpdateTitle}
                value={enteredTitle}
            />
          </div>
          <button disabled={isSendingRequest}>
            {isSendingRequest ? 'Saving...' : 'Save'}
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </>
  );
}

export default NewPost;
