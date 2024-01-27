import { CustomTabs } from "@/modules/megaverse/components/CustomTabs";

export default function MegaverseLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { [key: string]: string };
}>) {
  return (
    <main>
      <div className="container py-10">
        <div className="mb-4">
          <CustomTabs path={params.challenge} />
        </div>
        {children}
      </div>
    </main>
  );
}
