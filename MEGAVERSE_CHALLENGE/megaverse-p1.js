const CANDIDATE_ID = "5ef37a91-4bae-43a6-abcf-3d5ed60a4df1";
const API_PATH = "https://challenge.crossmint.io/api";

const fetchMegaverseGoal = async () => {
  try {
    const response = await fetch(`${API_PATH}/map/${CANDIDATE_ID}/goal`);
    const decodedResponse = await response.json();

    if (decodedResponse.error) throw new Error(`fetchMegaverseGoal failed: ${error.message}`);
    return decodedResponse;
  } catch (error) {
    throw new Error(`fetchMegaverseGoal failed: ${error.message}`);
  }
};

const getPolyanetsMegaversePositions = (values) => {
  /* Polyanets positions structure [row, column] */
  const POLYANET_LABEL = "POLYANET";
  const polyanetsPositions = [];

  for (let i = 0; i < values.length; i++) {
    const row = values[i];
    for (let j = 0; j < row.length; j++) {
      const item = row[j];
      if (item === POLYANET_LABEL) {
        polyanetsPositions.push({ row: i, column: j });
      }
    }
  }

  return polyanetsPositions;
};

const setPolyantes = async (polyanetsPositions) => {
  try {
    for (const polyanet of polyanetsPositions) {
      const response = await fetch(`${API_PATH}/polyanets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          row: polyanet.row,
          column: polyanet.column,
          candidateId: CANDIDATE_ID,
        }),
      });
    }
    const decodedResponse = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return decodedResponse;
  } catch (error) {
    throw new Error(`setPolyantes failed: ${error.message}`);
  }
};

const init = async () => {
  const { goal } = await fetchMegaverseGoal();
  const polyanetsPositions = getPolyanetsMegaversePositions(goal);
  const test = await setPolyantes(polyanetsPositions);
  console.log(test);
};

init();
