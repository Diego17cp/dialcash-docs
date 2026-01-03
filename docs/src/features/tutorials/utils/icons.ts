export const getFeatureIcon = (feature: "transactions" | "budgets" | "reports" | "accounts" | "settings"): string => {
    switch (feature) {
        case "transactions":
            return "tabler-arrow-badge-right"
        break;
        case "budgets":
            return "tabler-pig-money"
        break;
        case "reports":
            return "tabler-chart-dots"
        break;
        case "accounts":
            return "tabler-wallet"
        break;
        case "settings":
            return "tabler-settings"
        break;
        default:
            return "tabler-help-circle"
    }
}