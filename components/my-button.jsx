const Button = ({ children }) => {
  return (
    <button className="group relative flex flex-row items-center bg-[#212121] justify-center gap-2 rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
      <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]" />

      <div
        className="shrink-0 bg-border w-[1px] h-4"
        role="none"
        data-orientation="vertical"
      />
      <span className="inline animate-gradient whitespace-pre bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent [--bg-size:300%] text-center">
        {children}
      </span>
      <svg
        strokeLinecap="round"
        className="text-[#9c40ff]"
        strokeWidth="1.5"
        aria-hidden="true"
        viewBox="0 0 10 10"
        height={11}
        width={11}
        stroke="currentColor"
        fill="none"
      >
        <path
          strokeLinecap="round"
          d="M0 5h7"
          className="opacity-0 transition group-hover:opacity-100"
        />
        <path
          strokeLinecap="round"
          d="M1 1l4 4-4 4"
          className="transition group-hover:translate-x-[3px]"
        />
      </svg>
    </button>
  );
};

export default Button;
