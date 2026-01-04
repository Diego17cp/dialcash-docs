export const getCategoryIcon = (category: string): string => {
    switch (category.toLowerCase()) {
        case "release":
            return "tabler-rocket";
        case "feature":
            return "sparkles";
        case "update":
            return "tabler-refresh";
        case "announcement":
            return "tabler-speakerphone";
        default:
            return "tabler-file-code";
    }
}