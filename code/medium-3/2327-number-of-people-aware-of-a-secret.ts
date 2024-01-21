function peopleAwareOfSecret(n: number, delay: number, forget: number): number {
    const MOD = 10 ** 9 + 7;
    let peopleKnowSecret : number[] = [];

    for (let i=0;i<forget-1;i++){
        peopleKnowSecret.push(0);
    }
    peopleKnowSecret.push(1);

    let range: number = peopleKnowSecret.length - delay;

    const result: number[] = peoplesKnowSecret(n-1, peopleKnowSecret, range);

    const sumWithInitial: number = result.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0    
    );

    return sumWithInitial % MOD;
};  


function peoplesKnowSecret (n:number, peoples: number[], range): number[]{

    if(n === 0)
        return peoples;

    const MOD = 10 ** 9 + 7;

    peoples.shift();
    let newPeopleKnowSecrect: number = 0;
    for(let i = 0; i<range; i++){
        newPeopleKnowSecrect += peoples[i]
    }
    peoples.push(newPeopleKnowSecrect % MOD ); 

    return peoplesKnowSecret(n-1,peoples, range);

}
