import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const { status, data } = useRouteError();
  let title = "An error occurred";
  let message = "Something went wrong!";

  if (status === 500) {
    message = data.message;
  }

  if (status === 404) {
    title = "Page Not Found";
    message = "Could not find Page";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
