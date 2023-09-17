"use client";

import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`bg-custom-red fixed bottom-4 right-4 rounded-md px-4 py-2 text-white transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <AiOutlineArrowUp size={20} />
    </button>
  );
};

export default BackToTopButton;
