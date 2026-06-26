"use client";
//ROOT PAGE.TSX
import { useState } from "react";
import ScriptForm from "@/components/ScriptForm";
import ResponseViewer from "@/components/ResponseViewer";

export default function Home() {
  const [response, setResponse] = useState<unknown>(null);

  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="mb-6 text-4xl font-bold">AI Video Generator</h1>

      <ScriptForm onResponse={setResponse} />

      <ResponseViewer data={response} />
    </main>
  );
}
