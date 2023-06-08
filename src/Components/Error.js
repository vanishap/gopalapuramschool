import { useRouteError } from "react-router-dom";
// useRouteError hook helps to find the exact error cause, so we can customise the 
// error message to display to the user.

const Error = () => {
    const err = useRouteError();
//err variables holds the error response.
// err.data displays the error message whenever a wrong URL is typed.
    console.log(err);
  return (
    <div>
      <p>Oops!!! Something went wrong!</p>
      <p>{err.data}</p>
    </div>
  )
}

export default Error;
