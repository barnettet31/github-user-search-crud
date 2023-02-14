import Link from "next/link";

export const EmptyList = () => (
  <>
    <h1 className="text-center text-3xl">
      You have not added anyone to your list just yet.
    </h1>
    <p className="text-center text-base font-light">
      Go{" "}
      <Link className="text-button underline" href="/dashboard">
        here
      </Link>{" "}
      to add someone to your watch list.
    </p>
  </>
);