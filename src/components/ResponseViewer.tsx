interface Props {
  data: unknown;
}

export default function ResponseViewer({ data }: Props) {
  if (!data) return null;

  return (
    <pre className="mt-8 overflow-auto rounded bg-black p-4 text-green-400">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}
