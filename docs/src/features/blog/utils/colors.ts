export const getCategoryClass = (category: string): string => {
    switch (category.toLowerCase()) {
        case "release":
            return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
        case "feature":
            return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
        case "update":
            return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
        case "announcement":
            return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
        default:
            return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400";
    }
}