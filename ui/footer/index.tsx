import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="p-8 text-white">
        <div className="flex flex-row pb-3">
          <div className="w-1/4">
            <Link href="/" passHref>
              <Image
                src="/0x-code-limited-logo.png"
                width={111}
                height={32}
                alt="0x Code Limited Logo"
              />
            </Link>
          </div>
          <div className="w-1/3">
            <h3 className="font-bold">Quick Links</h3>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/better-bc-assessment/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <h3 className="font-bold">Social medias</h3>
            <ul>
              <li>
                <Link href="https://linkedin.com/company/0x-code-limited">
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <hr />
          <p className="pt-4">
            © {new Date().getFullYear()} 0x Code Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
