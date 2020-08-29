export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("オーナー");
console.log(myVisaCard.owner);

myVisaCard.owner = "ベーコン"; // error!
