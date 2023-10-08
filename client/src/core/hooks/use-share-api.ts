export const useShareApi = async (title: string, text: string, link: string) => {
    if (navigator.share) {
        await navigator.share({
            title: title,
            text: text,
            url: link
        })
    }
}