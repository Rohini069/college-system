import React from "react";
import queryString from "query-string";

const Posts = ({ match, location }) => {
  const result = queryString.parse(location.search);
  console.log(result);

  return (
    <>
      <h1>Posts </h1>
      Year:{match.params.year} , Month:{match.params.month}
    </>
  );
};

export default Posts;
