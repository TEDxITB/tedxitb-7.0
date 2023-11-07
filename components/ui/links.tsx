'use client'
import { useState } from "react";

interface linkProps {
  label: string;
  isError?: boolean;
}


const Links: React.FC<linkProps> = ({ label, isError }) => {
    const [isVisited, setIsVisited] = useState(false);
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (isError) {
        event.preventDefault();
        } else {
        setIsVisited(true);
        }
    };

    return (
        <a
        href="https://www.github.com"
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
        >
        <div
            className={`flex flex-row items-center gap-x-4 ${
            isError ? "cursor-not-allowed" : "cursor-pointer"
            }`}
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={`  ${isVisited ? "text-[#3F1871]" : "text-[#0079FF]"} ${
                isError ? "text-[#FF0000]" : "group-hover:text-[#004797]"
            }`}
            >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <label
            className={`font-anderson text-[24px] ${
                isVisited ? "text-[#3F1871]" : "text-[#0079FF]"
            }  ${
                isError
                ? "text-[#FF0000] hover:cursor-not-allowed"
                : "hover:cursor-pointer group-hover:text-[#004797] group-hover:underline group-hover:underline-offset-1"
            } `}
            >
            {label}
            </label>
        </div>
        </a>
    );
};

export default Links;