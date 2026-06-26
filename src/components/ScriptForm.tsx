"use client";

import { useState } from "react";

interface ScriptFormProps {
  onResponse: (data: unknown) => void;
}

export default function ScriptForm({ onResponse }: ScriptFormProps) {
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!script.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          script,
        }),
      });

      const data = await response.json();
      onResponse(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <textarea
        value={script}
        onChange={(e) => setScript(e.target.value)}
        placeholder="Paste your script..."
        className="w-full h-48 rounded border p-4"
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="rounded bg-black px-5 py-2 text-white"
      >
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
}
