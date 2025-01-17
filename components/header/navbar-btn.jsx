const NavButton = ({ children }) => {
  return (
    <button className="relative px-2 py-1 inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-800/30 backdrop-blur-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
      <span className="">{children}</span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-10 bg-white/20" />
      </div>
    </button>
  );
};

export default NavButton;
