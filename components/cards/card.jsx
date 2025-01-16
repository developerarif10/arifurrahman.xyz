import Spotlight from "../spotlight";
import SpotCard from "./spot-card";
export default function Card() {
  return (
    <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-2 items-start lg:max-w-none group">
      {/* Card start */}
      <SpotCard />
      <SpotCard />
      <SpotCard />
      <SpotCard />
      <SpotCard />
      <SpotCard />
      {/* Card  End */}
    </Spotlight>
  );
}
