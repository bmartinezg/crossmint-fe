import { Skeleton } from "@nextui-org/react";

export default function LoadingMegaversePage() {
  return (
    <main>
      <Skeleton className="rounded-lg opacity-20 bg-black">
        <div className="h-[400px] rounded-lg bg-secondary"></div>
      </Skeleton>
    </main>
  );
}
