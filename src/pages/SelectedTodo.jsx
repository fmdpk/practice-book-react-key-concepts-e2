import { Form, useLoaderData } from 'react-router-dom';

import Modal from '../components/Modal.jsx';

function SelectedTodo() {
  const todo = useLoaderData();

  return (
      <Modal>
        <Form method="post">
          <p>
            <label htmlFor="text">Your todo</label>
            <input type="text" id="text" name="text" defaultValue={todo.text} />
          </p>
          <p className="form-actions">
            <button>Update Todo</button>
          </p>
        </Form>
        <Form method="post">
          <input type="hidden" name="_method" value="DELETE" />
          <p className="form-actions">
            <button className="btn-alt">Delete Todo</button>
          </p>
        </Form>
      </Modal>
  );
}

export const Component = SelectedTodo;


