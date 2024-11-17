import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const validationSchema = Yup.object({
    task: Yup.string()
      .min(5, () => <span>Too short</span>)
      .max(30, () => <span>Too Long</span>)
      .required(<span className="error">Required</span>),
  });

  return (
    <div>
      <h1>TODO Список</h1>
      <Formik
        initialValues={{ task: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setTodos([...todos, values.task]);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div>
              <Field
                className="input"
                type="text"
                name="task"
                placeholder="Додати завдання"
                style={{
                  padding: "5px",
                  margin: "5px 0",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <button
                style={{
                  padding: "5px",
                  margin: "5px 0",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  backgroundColor: "blue",
                  color: "white",
                }}
                type="submit"
              >
                Додати
              </button>
              <ErrorMessage
                name="task"
                component="div"
                style={{ color: "red", fontSize: "14px", marginTop: "5px" }}
                render={(error) => <span>{error}</span>}
              />
            </div>
          </Form>
        )}
      </Formik>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
