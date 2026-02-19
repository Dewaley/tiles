import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-medium text-3xl">
      <Image
        src="/images/logo.png"
        width={100}
        height={100}
        alt="Logo"
        className="w-10 h-10"
      />
      Gamely
    </div>
  );
};

export default Logo;
