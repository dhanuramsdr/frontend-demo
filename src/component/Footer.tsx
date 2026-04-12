import { GitBranchIcon, Mail, Phone } from "lucide-react";
import img1 from "../assets/image.png";
const Footer = () => {
  return (
    <footer className="bg-black text-color mt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-center md:text-left">
        {/*Contact */}
        <div className="flex-1 min-w-62.5">
          <h3 className="text-color  text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-color flex items-center justify-center md:justify-start gap-2 mb-2">
            <Phone size={16} />
            +91 123456789
          </p>
          <p className="text-color flex  justify-center  md:justify-start gap-2 mb-2 ">
            <Mail size={16} />
            sdr@gmail.com
          </p>
        </div>
        {/*section-2 */}
        <div className="flex-1 min-w-62.5 items-center gap-4">
          <h3 className="text-color  text-xl font-semibold mb-2">Follow me</h3>
          <p className="flex">
            <a href="#" target="_blank">
              <GitBranchIcon size={16} />
            </a>
            <a href="#" target="_blank">
              <img src={img1} alt="you" className="w-8 bg-blue-500" />
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-400 text-center text-sm py-3">
        copy rights @2026
      </div>
    </footer>
  );
};

export default Footer;
