"use client";

import { useRef } from "react";
import { AiFillCheckCircle, AiOutlineDown } from "react-icons/ai";
import { useHover } from "usehooks-ts";

interface DetailsOnHoverProps {
  summary: string;
  children: React.ReactNode;
  isOpen?: boolean;
}

const DetailsOnHover: React.FC<DetailsOnHoverProps> = ({
  summary,
  children,
  isOpen,
}) => {
  const hoverRef = useRef<HTMLDivElement>(null);
  const isHover = useHover(hoverRef);

  return (
    <div ref={hoverRef} className='cursor-pointer rounded-xl'>
      <details
        open={isHover || isOpen}
        className='bg-custom-red rounded-2xl pb-1'
      >
        <summary className='dark:custom-neumorphic-projects -ml-1 mb-4 flex flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 text-center shadow-xl'>
          <span className='text-custom-red'>
            <AiFillCheckCircle size={40} />
          </span>
          <h4 className='text-custom-black text-lg font-light delay-1000 ease-in dark:text-white'>
            {summary}
          </h4>
          <span
            className={`text-custom-red p-2 ${
              isOpen ? "" : "animate-bounce-slow"
            }`}
          >
            <AiOutlineDown size={20} />
          </span>
        </summary>
        {(isHover || isOpen) && <div className='px-4'>{children}</div>}
      </details>
    </div>
  );
};

export default DetailsOnHover;
