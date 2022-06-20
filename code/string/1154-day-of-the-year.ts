function dayOfYear(date: string): number {
    const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31,
                           31, 30, 31, 30, 31]
    const [year, month, day] = date.split('-').map(Number)
    
    if (isLeapYear(year))
        DAYS_IN_MONTH[2] = 29
    
    let daysBeforeMonth = 0
    
    for (let m = 1; m < month; m++)
        daysBeforeMonth += DAYS_IN_MONTH[m]
    
    return daysBeforeMonth + day
};

const isLeapYear = y => y % 400 == 0 || y % 4 == 0 && y % 100 != 0
