"use client";

import { useState } from "react";

interface ScriptFormProps {
  onResponse: (data: unknown) => void;
}

export default function ScriptForm({ onResponse }: ScriptFormProps) {
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [targetType, setTargetType] = useState<"short" | "long">("short");

  async function handleGenerate() {
    if (!script.trim() || loading) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          script: script.trim(),
          targetType,
        }),
      });

      const data: unknown = await response.json();

      if (!response.ok) {
        const message =
          typeof data === "object" &&
          data !== null &&
          "error" in data &&
          typeof data.error === "string"
            ? data.error
            : "Unable to generate the video. Please try again.";

        throw new Error(message);
      }

      onResponse(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again."
      );
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
        aria-label="Video script"
        className="h-48 w-full rounded border p-4"
      />

      <div className="flex gap-6">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="targetType"
            value="short"
            checked={targetType === "short"}
            onChange={() => setTargetType("short")}
          />
          Shorts
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="targetType"
            value="long"
            checked={targetType === "long"}
            onChange={() => setTargetType("long")}
          />
          Long Video
        </label>
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        onClick={handleGenerate}
        disabled={loading || !script.trim()}
        className="rounded bg-black px-5 py-2 text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
}
