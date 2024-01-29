import { fetchInstance } from "@/modules/shared/infra/fetchInstance";
import { IMegaverseDto } from "@/modules/megaverse/infra/dtos";
import { IMegavserseService } from "./IMegavserseService";
import { Megaverse, buildMegaverse } from "@/modules/megaverse/domain";

export const megaverseService: IMegavserseService = {
  getMegaverseById: async (id: string): Promise<Megaverse> => {
    const response: IMegaverseDto = await fetchInstance(id);
    return buildMegaverse(response);
  },
};
