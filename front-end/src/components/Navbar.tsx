import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and mobile menu button */}
            <div className="flex items-center">
              {/* Mobile menu button - hidden on desktop */}
              <div className="md:hidden flex items-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Hamburger icon */}
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              {/* Logo - centered on mobile, normal position on desktop */}
              <a href="/">
                <span className="flex gap-2 text-lg font-semibold text-gray-900 md:mx-0 mx-auto md:ml-0">
                  <img src="../../public/Logo.png" alt="logo" className="h-8" />
                  Prompt Vault
                </span>
              </a>
            </div>

            {/* Desktop navigation - hidden on mobile */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <a
                href="/"
                className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-green-600"
              >
                Home
              </a>
              <a
                href="/prompts"
                className="text-gray-500 inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-green-600"
              >
                Prompts
              </a>
              <a
                href="/api"
                className="text-gray-500 inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-green-600"
              >
                API
              </a>
              <a
                href=""
                className="text-gray-500 hover:text-green-600 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                For Business
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-green-600 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                About
              </a>
            </div>

            {/* CTA buttons - hidden on small mobile, shown on larger screens */}
            <div className="hidden sm:flex items-center">
              <a
                href="https://github.com/AndresFritsche/Prompt-Vault"
                className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium "
              >
                <FaGithub size={24} />
              </a>
              <a
                href="#"
                className="ml-4 bg-gray-900 text-white px-4 py-2 rounded-3xl text-sm font-medium hover:bg-gray-800"
              >
                Log In
              </a>
            </div>

            {/* Mobile CTA button - shown only on small screens */}
            <div className="sm:hidden flex items-center">
              <a
                href="#"
                className="ml-4 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-800"
              >
                Log In
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu - hidden by default */}
        <div className="md:hidden hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="bg-green-50 border-green-500 text-green-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Home
            </a>
            <a
              href="/prompts"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Prompts
            </a>
            <a
              href="/api"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              API
            </a>
            <a
              href=""
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              For Business
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Start Learning for Free
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
