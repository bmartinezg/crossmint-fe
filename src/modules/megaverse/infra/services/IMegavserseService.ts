import { Megaverse } from "@/modules/megaverse/domain";

export interface IMegavserseService {
  getMegaverseById: (id: string) => Promise<Megaverse>;
}
