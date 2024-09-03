
export const formatDate = (value: number | string | Date) => {
    const time = new Date(value)
    const date = time.getDate();
    const month = time.getMonth() + 1;
    const year = time.getFullYear();
    return `${date}/${month}/${year}`
}