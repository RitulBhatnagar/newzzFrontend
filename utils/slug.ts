export const slugify = (text:string) => {
    return text.toString().toLowerCase().replace(/\s+/g, '-')
}