export const getDifficultyClass = (difficulty: "beginner" | "intermediate" | "advanced"): string => {
    switch (difficulty) {
        case "beginner":
            return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
        break;
        case "intermediate":
            return "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400"
        break;
        case "advanced":
            return "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
        break;
        default:
            return "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400"
    }
}