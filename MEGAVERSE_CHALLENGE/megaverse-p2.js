const CANDIDATE_ID = "5ef37a91-4bae-43a6-abcf-3d5ed60a4df1";
const API_PATH = "https://challenge.crossmint.io/api";

const SPACE_VALUE = "SPACE";
const POLYANET_VALUE = "POLYANET";
const SOLOON_VALUE = "SOLOON";
const COMETH = "COMETH";

const fetchMegaverseGoal = async () => {
  try {
    const response = await fetch(`${API_PATH}/map/${CANDIDATE_ID}/goal`);
    const decodedResponse = await response.json();
    if (decodedResponse.error) throw new Error(`fetchMegaverseGoal failed: ${error.message}`);
  } catch (error) {
    throw new Error(`fetchMegaverseGoal failed: ${error.message}`);
  }
};

const getMegaverseItemsPositions = (items) => {
  const itemsPositions = [];

  const buildMegaverseItem = (value) => {
    if (value === SPACE_VALUE) return null;
    if (value === POLYANET_VALUE) {
      return {
        type: POLYANET_VALUE,
      };
    }

    const [property, type] = value.split("_");

    if (type === SOLOON_VALUE) {
      return {
        type: SOLOON_VALUE,
        color: property.toLowerCase(),
      };
    }
    if (type === COMETH) {
      return {
        type: COMETH,
        direction: property.toLowerCase(),
      };
    }
  };

  for (let i = 0; i < items.length; i++) {
    const row = items[i];
    for (let j = 0; j < row.length; j++) {
      const item = row[j];
      const builtItem = buildMegaverseItem(item);
      if (builtItem) {
        itemsPositions.push({
          ...builtItem,
          row: i,
          column: j,
        });
      }
    }
  }

  return itemsPositions;
};

const setMegaverseItems = async (items) => {
  const fetchInstance = async (slug, body) => {
    const response = await fetch(`${API_PATH}/${slug}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        candidateId: CANDIDATE_ID,
        ...body,
      }),
    });

    const decodedResponse = await response.json();
    return decodedResponse;
  };

  for (const item of items) {
    if (item.type === POLYANET_VALUE) {
      await fetchInstance("polyanets", item);
    }
    if (item.type === SOLOON_VALUE) {
      await fetchInstance("soloons", item);
    }
    if (item.type === COMETH) {
      await fetchInstance("comeths", item);
    }
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
};

const init = async () => {
  const { goal } = await fetchMegaverseGoal();
  const megaverseItemsPositions = getMegaverseItemsPositions(goal);
  await setMegaverseItems(megaverseItemsPositions);
};

init();
