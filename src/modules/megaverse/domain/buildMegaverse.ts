import { IMegaverseDto } from "@/modules/megaverse/infra/dtos";
import { Megaverse } from "./Megaverse";

export const buildMegaverse = (dto: IMegaverseDto): Megaverse => {
  return dto.data.goal;
};
