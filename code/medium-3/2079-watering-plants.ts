function wateringPlants(plants: number[], capacity: number): number {
    plants.unshift(capacity)
    let steps =0
    let newCapacity =0
    for(let j=0;j<plants.length;j++){
        if(j===0){
            newCapacity =capacity
            //steps++
            continue
        }
        if (plants[j] <= newCapacity) {
            newCapacity = newCapacity - plants[j]
            plants[j]=0
            steps++
        }else{
            steps += (j*2)-1   
             newCapacity = capacity - plants[j]
             steps[j]=0
        }
    }
    return steps

};
