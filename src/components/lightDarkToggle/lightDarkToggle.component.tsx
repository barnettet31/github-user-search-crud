import { useEffect, useState } from "react";
import Image from "next/image";
export function LightDarkToggle() {
  const [isDark, setIsDark] = useState(true);
  const toggleDark = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      return setIsDark(htmlElement.classList.contains("dark"));
    }
    htmlElement.classList.add("dark");
    setIsDark(htmlElement.classList.contains("dark"));
  };
  useEffect(() => {
    const checkIsDark = () => {
      return setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkIsDark();
  }, []);

  return (
    <div className="mb-9 flex w-full justify-between">
      <h1 className="text-3xl font-bold">devfinder</h1>
      <button onClick={toggleDark}>
        {isDark ? (
          <div className="group flex items-center gap-4 ">
            <span className="text-sm font-bold text-white group-hover:opacity-50">
              LIGHT
            </span>
            <Image
              src="/icon-sun.svg"
              alt=""
              width="20"
              height="20"
              className="group-hover:opacity-50"
            />
          </div>
        ) : (
          <div className="group flex items-center gap-4">
            <p className="text-sm font-bold text-secondary group-hover:text-[#222731]">
              DARK
            </p>
            <Image
              src="/icon-moon.svg"
              alt=""
              width="20"
              height="20"
              className="group-hover:brightness-50"
            />
          </div>
        )}
      </button>
    </div>
  );
}
