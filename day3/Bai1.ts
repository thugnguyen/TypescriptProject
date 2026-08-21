function filterAndCleanElementTexts(texts: string[]): string[] {
    const cleaned = texts.map(text => text.trim().toUpperCase()).filter(text => text.length > 0);
    return Array.from(new Set(cleaned));
}