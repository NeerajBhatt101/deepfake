const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type DeepfakeResponse = {
    result: "real" | "fake";
    confidence: number;
  };

export async function detectDeepfake(
  file: File
): Promise<DeepfakeResponse> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_URL}/predict/`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to analyze video");
  }

  const data: DeepfakeResponse = await res.json();
  return data;
}