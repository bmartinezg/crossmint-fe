import { Skeleton } from "@nextui-org/react";

const fetchChallengeData = async () => {
  try {
  } catch (error) {
    throw new Error("Error fetching data from server");
  }
};

export default async function MegaversePage() {
  const response = await fetchChallengeData();
  return <main></main>;
}
