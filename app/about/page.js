export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-[rgba(23,23,23,0.8)] relative border backdrop-blur box-border rounded-lg border-solid">
          <svg className="absolute pointer-events-none inset-[calc(-25px)] w-[calc(100%_+_50px)] h-[calc(100%_+_50px)] block align-middle box-border">
            <defs className="box-border">
              <linearGradient
                id="line-gradient"
                x1="20%"
                y1="0%"
                x2="-14%"
                y2="10%"
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(-45)"
                className="box-border"
              >
                <stop
                  offset="0%"
                  stopColor="#1488fc"
                  stopOpacity="0%"
                  className="box-border"
                />
                <stop
                  offset="40%"
                  stopColor="#1488fc"
                  stopOpacity="80%"
                  className="box-border"
                />
                <stop
                  offset="50%"
                  stopColor="#1488fc"
                  stopOpacity="80%"
                  className="box-border"
                />
                <stop
                  offset="100%"
                  stopColor="#1488fc"
                  stopOpacity="0%"
                  className="box-border"
                />
              </linearGradient>

              <linearGradient id="shine-gradient" className="box-border">
                <stop
                  offset="0%"
                  stopColor="white"
                  stopOpacity="0%"
                  className="box-border"
                />
                <stop
                  offset="40%"
                  stopColor="#8adaff"
                  stopOpacity="80%"
                  className="box-border"
                />
                <stop
                  offset="50%"
                  stopColor="#8adaff"
                  stopOpacity="80%"
                  className="box-border"
                />
                <stop
                  offset="100%"
                  stopColor="white"
                  stopOpacity="0%"
                  className="box-border"
                />
              </linearGradient>
            </defs>
            <rect
              width="100%"
              height="100%"
              pathLength={100}
              strokeLinecap="round"
              className="fill-transparent stroke-[url(#line-gradient)] box-border"
            />
            <rect
              x={48}
              y={24}
              width={129}
              height={1}
              className="fill-[url(#shine-gradient)] mix-blend-overlay box-border"
            />
          </svg>
          <div className="h-0 box-border">
            <div className="relative h-full overflow-hidden opacity-0 transition-opacity ease-in-out duration-[0.15s] box-border rounded-t-[0.44rem] inset-x-0">
              <div className="flex text-xs leading-4 font-medium box-border px-2.5 py-1.5">
                <div className="grow box-border" />
                <button className="bg-transparent text-[100%] cursor-pointer box-border hover:underline">
                  Update
                </button>
              </div>
            </div>
          </div>
          <div className="relative select-none box-border">
            <textarea
              //   value={value}
              //   onChange={(e) => setValue(e.target.value)}
              placeholder="How can Bolt help you today?"
              translate="no"
              className="min-h-[76px] max-h-[400px] h-[76px] overflow-y-hidden w-full resize-none bg-transparent text-sm leading-5 box-border focus:outline-offset-2 text-white placeholder-gray-400 p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
