function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const ChairTotalWood = chairQuantity * perChairWood;
    const TableTotalWood = tableQuantity * perTableWood;
    const BedTotalWood = bedQuantity * perBedWood;

    const totalWood = ChairTotalWood + TableTotalWood + BedTotalWood;
    return totalWood;
}

const wood = woodQuantity(3, 1, 2);
console.log('wood needed', wood);

