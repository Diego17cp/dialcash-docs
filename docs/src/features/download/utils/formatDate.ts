export function formatRelativeDate(isoDate: string): string {
    const date = new Date(isoDate);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    // Menos de 1 día
    if (diffInDays === 0) {
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
        if (diffInHours === 0) {
            const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
            return diffInMinutes <= 1 ? 'Just now' : `${diffInMinutes} minutes ago`;
        }
        return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`;
    }
    
    // Menos de 7 días
    if (diffInDays < 7) {
        return diffInDays === 1 ? 'Yesterday' : `${diffInDays} days ago`;
    }
    
    // Menos de 30 días
    if (diffInDays < 30) {
        const weeks = Math.floor(diffInDays / 7);
        return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
    }
    
    // Menos de 365 días
    if (diffInDays < 365) {
        const months = Math.floor(diffInDays / 30);
        return months === 1 ? '1 month ago' : `${months} months ago`;
    }
    
    // Más de 1 año
    const years = Math.floor(diffInDays / 365);
    return years === 1 ? '1 year ago' : `${years} years ago`;
}

export function formatDate(isoDate: string, locale: string = 'en-US'): string {
    const date = new Date(isoDate);
    
    return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

export function formatDateTime(isoDate: string, locale: string = 'en-US'): string {
    const date = new Date(isoDate);
    
    return date.toLocaleString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}