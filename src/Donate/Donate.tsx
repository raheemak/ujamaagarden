export const Donate = () => {
  return (
    <div className="w-full flex flex-col items-center py-6 px-4 sm:px-6 lg:px-32">
      <h2 className="text-4xl font-bold mb-8 text-center">Donate</h2>
      <p className="text-lg text-gray-600 mb-12 text-center">
        Ujamaa Garden is{" "}
        <a
          href="www.openspaceinstitute.org/how/grassroots-efforts"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 hover:underline"
        >
          fiscally sponsored
        </a>{" "}
        by the
        <a
          href="www.openspaceinstitute.org"
          className=""
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Open Space Institute, Inc. (OSI){" "}
        </a>{" "}
        , as part of its{" "}
        <a
          href="www.openspaceinstitute.org/how/grassroots-efforts/citizen-action"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 hover:underline"
        >
          {" "}
          Citizen Action program.
        </a>{" "}
        <br />
        All
        <a
          href="www.openspaceinstitute.org/donate/donate-citizen-action-groups"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 hover:underline"
        >
          {" "}
          contributions{" "}
        </a>{" "}
        will be accepted by OSI on behalf of Ujamaa Garden.
      </p>
      <a
        href="https://www.openspaceinstitute.org/donate/donate-citizen-action-groups"
        target="_blank"
        className="text-amber-600 hover:underline text-lg font-semibold"
      >
        Donate here.
      </a>
    </div>
  );
};
