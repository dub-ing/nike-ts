import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
function Navbar() {
  return (
    <header class="padding-x py-8 absolute z-10 w-full">
      <nav class="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul class="hidden md:flex flex-1 justify-center items-center gap-16 ">
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <a
                href={navLink.href}
                class="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>
        <div class="md:hidden">
          <img src={hamburger} alt="menu-toggle" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
