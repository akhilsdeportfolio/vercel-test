import Link from "next/link";
import React from "react";

export default function Server() {
  return (
    <div>
      Server
      <Link href="/" className="text-blue">
        Home
      </Link>
    </div>
  );
}
