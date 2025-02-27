/**
 * Marquee component for creating scrolling content
 * @param {Object} props - Component props
 * @param {string} [props.className] - Optional CSS class name
 * @param {boolean} [props.reverse=false] - Whether to reverse animation direction
 * @param {boolean} [props.pauseOnHover=false] - Whether to pause on hover
 * @param {React.ReactNode} props.children - Content to display
 * @param {boolean} [props.vertical=false] - Whether to animate vertically
 * @param {number} [props.repeat=4] - Number of times to repeat content
 */
export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  // Combine class names
  const containerClasses = [
    "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
    vertical ? "flex-col" : "flex-row",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div {...props} className={containerClasses}>
      {Array(repeat)
        .fill(0)
        .map((_, i) => {
          const itemClasses = [
            "flex shrink-0 justify-around [gap:var(--gap)]",
            !vertical
              ? "animate-marquee flex-row"
              : "animate-marquee-vertical flex-col",
            pauseOnHover ? "group-hover:[animation-play-state:paused]" : "",
            reverse ? "[animation-direction:reverse]" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div key={i} className={itemClasses}>
              {children}
            </div>
          );
        })}
    </div>
  );
}
