import {
  BillSource,
  ChartboostSource,
  HuoaSource,
  LifeStreetSource,
  NewlyWordaSource,
  WilliamsSonomaSource,
} from '../../img/portfolio/experience/index';

class ExperienceImage {
  constructor(source, alt, url) {
    this.source = source;
    this.alt = alt;
    this.url = url;
  }
}

export const BillImg = new ExperienceImage(
  BillSource,
  'Bill.com',
  'http://www.bill.com/'
);

export const ChartboostImg = new ExperienceImage(
  ChartboostSource,
  'Chartboost',
  'https://www.chartboost.com/'
);

export const HuoaImg = new ExperienceImage(
  HuoaSource,
  'Hawaii United Okinawa Association',
  'https://huoa.org/'
);

export const LifeStreetImg = new ExperienceImage(
  LifeStreetSource,
  'LifeStreet',
  'https://lifestreet.com/'
);

export const NewlyWordsImg = new ExperienceImage(
  NewlyWordaSource,
  'NewlyWords',
  'https://newlywords.com/'
);

export const WilliamsSonomaImg = new ExperienceImage(
  WilliamsSonomaSource,
  'Williams-Sonoma',
  'https://www.williams-sonoma.com/'
);

const experienceImageData = {
  BillImg,
  ChartboostImg,
  HuoaImg,
  LifeStreetImg,
  NewlyWordsImg,
  WilliamsSonomaImg,
};

export default experienceImageData;
