import { ArrowUp, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-800  text-white py-12">
      <div className="container  mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between  md:items-center gap-8">
          {/* Left - Branding + Contact Info */}
          <div>
            <a href="#home" className="text-xl font-bold">
            <span className=" text-[#38bdf8] text-3xl ">&lt;</span>
            <span className="text-2xl"> Rajan.Dev </span>

            <span className=" text-[#38bdf8] text-3xl">/&gt;</span>
            </a>
            <p className="mt-2 text-slate-300 max-w-md">
              Creating beautiful, functional, and accessible web experiences.
            </p>

            {/* Contact Info */}
            <div className="mt-4 space-y-2 text-slate-300 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                <span>rajanverma0879@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-400" />
                <span>+91 9956561803</span>
              </div>
            </div>
          </div>

          {/* Right - Scroll + Copyright */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <button
              onClick={scrollToTop}
              className="bg-cyan-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-slate-300 text-sm text-center md:text-right">
              &copy; {new Date().getFullYear()} Rajan Verma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
