import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 text-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-2xl font-bold text-custom-black-10 lg:text-6xl">
          404
        </h1>

        <p className="text-lg font-light text-custom-black-40 lg:text-xl">
          OOPS!
        </p>

        <p className="text-lg font-light text-custom-black-40 lg:text-xl">
          The page you are looking for wasn&apos;t found!
        </p>
      </div>

      <Link
        to="/"
        className="flex w-full max-w-full items-center justify-center rounded-xl bg-custom-black-10 px-6 py-4 text-sm font-bold text-white hover:bg-custom-black-10/90 lg:max-w-xs"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
