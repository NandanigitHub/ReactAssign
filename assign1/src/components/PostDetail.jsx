import React from "react";

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

function PostList(props){
  return(
    <div>
        {props.map((val)=>{
          return(
            <ul>Post Detail
            <li>UserId: {val.userId}</li>
            <li>Id: {val.id}</li>
            <li>Title: {val.title}</li>
            <li>Body: {val.body}</li></ul>
          )
        })}
    </div>
  )
}

const PostDetail = (props) => {
  return <div>
    {PostTable(props.posts)}<hr></hr>
    {PostList(props.posts)}
  </div>;
};

export default PostDetail;
