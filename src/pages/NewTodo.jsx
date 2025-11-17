import Modal from "../components/Modal.jsx";
import {Form} from "react-router-dom";

const NewTodo = () => {
  return (
      <Modal redirectUrl={'/'}>
        <Form method={"POST"}>
          <p>
            <label htmlFor="text">Your todo</label>
            <input type="text" id="text" name="text"/>
          </p>
          <p className="form-actions">
            <button type={"submit"}>Save Todo</button>
          </p>
        </Form>
      </Modal>
  )
}

export const Component = NewTodo
