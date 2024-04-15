import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex-between text-white body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-1 max-md:flex-col">
      <p>Copyright @ 2023 Mastery pro | All Right Reserve</p>
      <div className="flex gap-x-9">
        <Link href="/terms-of-use">Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
