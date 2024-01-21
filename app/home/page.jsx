"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const data = useSelector((state) => state.todos);
  return (
    <div>
      THis is home {data.length}
      <Link href="/server">Server</Link>
    </div>
  );
}
