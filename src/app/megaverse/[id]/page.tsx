import { megaverseService } from "@/modules/megaverse/infra/services";
import { Megaverse } from "@/modules/megaverse/ui/components/Megaverse";

type MegaversePageProps = {
  params: {
    id: string;
  };
};

export default async function MegaversePage({ params }: MegaversePageProps) {
  const { id } = params;
  const megaverse = await megaverseService.getMegaverseById(id);

  return (
    <main>
      <Megaverse values={megaverse} />
    </main>
  );
}
