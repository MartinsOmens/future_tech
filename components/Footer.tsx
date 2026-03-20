import { footerLinks } from "@/lib/footerLinks";
import { GoArrowUpRight } from "react-icons/go";
import { FaTwitter, FaLinkedin, FaMedium } from "react-icons/fa";

const resources = ["Whitepapers", "Ebooks", "Reports", "Research Papers"];

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-gray-400 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-6">{section.title}</h3>

              <ul className="space-y-3 text-sm">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    {link.name}

                    {link.badge && (
                      <span className="text-xs border-r border-t bg-[#1A1A1A] border-[#FFD11A] px-2 py-0.5 rounded">
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>

            <div className="space-y-3">
              {resources.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center justify-between w-full bg-[#1A1A1A] px-4 py-2 rounded-md hover:border-yellow-400 transition"
                >
                  {item}

                  <GoArrowUpRight className="text-yellow-400" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">
              Terms & Conditions
            </span>
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-white text-lg">
            <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
            <FaMedium className="hover:text-yellow-400 cursor-pointer" />
            <FaLinkedin className="hover:text-yellow-400 cursor-pointer" />
          </div>

          <p className="text-gray-500">
            © 2024 FutureTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
