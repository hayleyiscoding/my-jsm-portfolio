import copy from "copy-to-clipboard";
import { useCallback, useEffect, useState } from "react";

export default function useCopyToClipboard(
  resetInterval: number | null = null
): [boolean, (text: string) => void] {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = useCallback((text: string) => {
    if (typeof text === "string") {
      copy(text.toString());
      setCopied(true);
    } else {
      setCopied(false);
      console.error(
        `Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
      );
    }
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setCopied(false), resetInterval);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  return [isCopied, handleCopy];
}
