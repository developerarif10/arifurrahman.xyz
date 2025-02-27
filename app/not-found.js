import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center items-center min-h-screen flex-col">
          <h2 className="text-[120px] ">404</h2>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
