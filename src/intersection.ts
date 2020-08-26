export {}

type Picher1 = {
  throwingSpeed: number;
}

type Batter1 = {
  battingAverage: number;
}

const DaimajinSasaki: Picher1 = {
  throwingSpeed: 154,
}

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367,
}

type TwoWayPlayer = Picher1 & Batter1; // intersection

const OchiaiShohei: TwoWayPlayer = {
  throwingSpeed: 23,
  battingAverage: 0.11,
}