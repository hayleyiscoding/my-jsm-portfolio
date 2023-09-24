"use client";

import { AiOutlineCheck, AiOutlineCopy } from "react-icons/ai";
import useCopyToClipboard from "../lib/useCopyToClipboard";

interface CopyButtonProps {
  text: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  // isCopied is reset after 3 second timeout
  const [isCopied, handleCopy] = useCopyToClipboard(3000);

  return (
    <button onClick={() => handleCopy(text)} className='ml-2 cursor-pointer'>
      {isCopied ? (
        <AiOutlineCheck size={20} color='#fff' />
      ) : (
        <AiOutlineCopy size={20} color='#fff' />
      )}
    </button>
  );
};

export default CopyButton;
