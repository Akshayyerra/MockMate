import { extractText } from "unpdf";

export async function extractPdfText(buffer: Buffer): Promise<string> {
    const result = await extractText(new Uint8Array(buffer));

    console.log("PDF Result:", result);

    if (Array.isArray(result.text)) {
        return result.text.join("\n");
    }

    return result.text;
}