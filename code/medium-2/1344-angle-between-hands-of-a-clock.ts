function angleClock(hour: number, minutes: number): number {
    var minutesAngle = minutes * 6;
    var hoursAngle = (hour + minutes / 60) * 30;
    var diff = Math.abs(minutesAngle - hoursAngle);
    return Math.min(diff, 360 - diff);
};
