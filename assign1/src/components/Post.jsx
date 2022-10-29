import React, { useState } from "react";

function PostTable(props) {
  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <td>UserId</td>
            <td>Id</td>
            <td>Title</td>
            <td>Body</td>
          </tr>
        </thead>
        <tbody>
          {props.map((value) => {
            return (
              <tr>
                <td>{value.userId}</td>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const Post = (props) => {
  const [userId, setUserId] = useState();
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [array, setArray] = useState([...props.posts]);

  function onClick() {
    const object = { userId, id, title, body };
    setArray([...array, object]);
    setUserId("");
  }

  return (
    <div>
      <div class="inputBody m-3">
        <div class="input-group">
          <span class="input-group-text">
            <label>
              <b>USERID </b>
            </label>
          </span>
          <textarea
            onChange={(e) => setUserId(e.target.value)}
            class="form-control"
            placeholder="Enter userId"
            aria-label="With textarea"
          ></textarea>
        </div>
        <br />
        <div class="input-group">
          <span class="input-group-text">
            <label>
              <b>ID </b>
            </label>
          </span>
          <textarea
            onChange={(e) => setId(e.target.value)}
            class="form-control"
            placeholder="Enter id"
            aria-label="With textarea"
          ></textarea>
        </div>
        <br />
        <div class="input-group">
          <span class="input-group-text">
            <label>
              <b>TITLE</b>
            </label>
          </span>
          <textarea
            onChange={(e) => setTitle(e.target.value)}
            class="form-control"
            placeholder="Title"
            aria-label="With textarea"
          ></textarea>
        </div>
        <br />
        <div class="input-group">
          <span class="input-group-text">
            <label>
              <b>BODY </b>
            </label>
          </span>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            class="form-control"
            placeholder="Body"
            aria-label="With textarea"
          ></textarea>
        </div>
        <div class="successButton mt-3">
          <button onClick={onClick} type="button" class="btn btn-success">
            SUBMIT
          </button>
        </div>
      </div>
      <div class="m-3">{PostTable(array)}</div>
    </div>
  );
};

export default Post;
