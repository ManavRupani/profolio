

export const Footer = () => {
  return (
    <><hr></hr><footer className="flex flex-row flex-wrap items-center justify-center w-8/12 py-6 text-center  gap-y-6 gap-x-2  md:justify-between  text-slate-800 font-semibold text-sm mx-auto">
      <p className="block text-slate-800 font-semibold text-sm">
        © <time dateTime={new Date().getFullYear().toString()}>{new Date().getFullYear()}</time> Manav Rupani
      </p>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <a href="#" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
            About Me
          </a>
        </li>
        <li>
          <a href="#" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
            Contact Me
          </a>
        </li>
      </ul>
    </footer></> 
  );
};
