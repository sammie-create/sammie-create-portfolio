import { useState, useEffect } from "react";

export default function UpdateToast() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 60000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="absolute z-50 flex items-start w-full max-w-sm px-4 py-3 space-x-3 text-yellow-800 bg-yellow-100 border border-yellow-400 rounded-lg shadow-lg top-4 right-4">
      <div className="text-lg">⚠️</div>
      <div className="flex-1 text-sm">
        <p className="font-medium">Heads up:</p>
        <p>
          I&apos;m currently updating my portfolio to include recent projects
          and improvements. Some sections may be incomplete, but my CV contains
          all recent work. You can view or download it using the{" "}
          <span className="font-semibold">Download CV</span> button or{" "}
          <a
            href="/samuel-fullstack-resume.pdf"
            target="_blank"
            className="text-blue-600 cursor-pointer hover:text-yellow-800 hover:underline"
          >
            Click here
          </a>
          . Thanks for your patience!
        </p>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="ml-2 text-sm text-yellow-700 hover:text-yellow-900"
      >
        ×
      </button>
    </div>
  );
}
