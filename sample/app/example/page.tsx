'use client';

import Link from "next/link";

export default function Example() {
    return (
      <>
      <h1>Example unauthenticated page</h1>
      <br/>
        <Link className="text-blue-500 hover:text-blue-800" href="/">Back</Link>
      </>
    );
  }