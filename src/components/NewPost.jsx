import {useRef, useState} from 'react';

import classes from './NewPost.module.css';

function NewPost() {
  const titleRef = useRef('');
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const [error, setError] = useState(null); // optional: handle errors

  console.log('Ref');

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsSendingRequest(true);

      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ title: titleRef.current.value }),
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSendingRequest(false); // 👈 always turn off loading
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div>
          <label>Title</label>
          <input type="text" ref={titleRef} />
        </div>
        <button disabled={isSendingRequest}>
          {isSendingRequest ? 'Saving...' : 'Save'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* 👈 show error if any */}
    </>
  );
}

export default NewPost;
