function minNumberOfHours(initialEnergy: number, initialExperience: number, energy: number[], experience: number[]): number {
    let count = 0
    for (let i=0; i<energy.length; i++) {
        if (energy[i]>=initialEnergy) {
            count+=energy[i]-initialEnergy+1
            initialEnergy = 1
        } else {
            initialEnergy -= energy[i]
        } 
        if (experience[i]<initialExperience) {
            initialExperience += experience[i]
        } else {
            count+=experience[i]-initialExperience+1
            initialExperience += experience[i]+experience[i]-initialExperience+1       
        }
       
    }
    return count
};
