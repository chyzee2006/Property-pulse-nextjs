export function convertToSerializableObject(leanDocument) {
  if (!leanDocument) return null;

  for (const key of Object.keys(leanDocument)) {
    if (
      leanDocument[key] &&
      typeof leanDocument[key] === "object" &&
      leanDocument[key].toString
    ) {
      leanDocument[key] = leanDocument[key].toString();
    }
  }

  return leanDocument;
}
