export const fetchInstance = async (slug: string): Promise<{ data: any }> => {
  try {
    const response = await fetch(`${process.env.BE_API_PATH}/${slug}`);
    const decodedResponse = await response.json();
    return decodedResponse;
  } catch (error) {
    console.error(error);
    throw new Error("fetchInstance error");
  }
};
