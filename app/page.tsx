"use client"

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [code, setCode] = useState("");
  const [showIframe, setShowIframe] = useState(false);

  const handleInputChange = (e) => {
    setCode(e.target.value);
    if (e.target.value === "ADMIN") {
      setShowIframe(true);
    } else {
      setShowIframe(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
        <input
          type="text"
          value={code}
          onChange={handleInputChange}
          placeholder="Enter code"
          className="w-full p-2 text-black"
        />
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <main className="flex flex-col gap-8 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left">
            <li className="mb-2">
              Get started by editing {" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
          </div>
        </main>

        {/* Conditional Iframe */}
        {showIframe && (
          <iframe
            src="https://app.veo.co/matches/20240420-kingkong-64b68c04/"
            width="100%"
            height="600"
            className="mt-8"
          />
        )}
        <button
  onClick={() =>
    window.open(
      "https://app.veo.co/matches/20240420-kingkong-64b68c04/",
      "_blank"
    )
  }
  className="p-2 bg-blue-500 text-white rounded"
>
  Open Veo Match
</button>

      </div>
    </div>
  );
}
