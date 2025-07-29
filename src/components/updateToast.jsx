import { useState, useEffect } from "react";

export default function UpdateToast() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 60000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="absolute top-4 right-4 z-50 max-w-sm w-full bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded-lg shadow-lg flex items-start space-x-3">
      <div className="text-lg">⚠️</div>
      <div className="flex-1 text-sm">
        <p className="font-medium">Heads up:</p>
        <p>
          I&apos; m currently updating my portfolio to include recent projects
          and improvements. Some sections may be incomplete. Thanks for your
          patience!
        </p>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="text-yellow-700 hover:text-yellow-900 ml-2 text-sm"
      >
        ×
      </button>
    </div>
  );
}
