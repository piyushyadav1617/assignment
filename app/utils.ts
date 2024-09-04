const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

type DateInput = number | string | Date;

export const formatDate = (value: DateInput) => {
    const time = new Date(value)
    const date = time.getDate();
    const monthVal = time.getMonth();
    const month = months[monthVal];
    const year = time.getFullYear();
    return `${date}-${month}-${year}`;
}

export const getDateRange = (value1: DateInput, value2: DateInput) => {
    return `${formatDate(value1)} to
             ${formatDate(value2)}`
}
