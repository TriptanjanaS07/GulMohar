'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Cleaning ',
    icon: TbBeach,
    description: 'This property is for cleaning!',
  },
  {
    label: 'Recycling',
    icon: GiWindmill,
    description: 'This property is for recycling events!',
  },
  {
    label: 'Street Education',
    icon: MdOutlineVilla,
    description: 'This property is for educating street children!'
  },
  {
    label: 'Tree Plantation',
    icon: TbMountain,
    description: 'This property is for plantation of trees event!'
  },
  {
    label: 'Water Conservation',
    icon: TbPool,
    description: 'This is property is for water conservation event!'
  },
  {
    label: 'Animal Care',
    icon: GiIsland,
    description: 'This property is on providing care for Animals!'
  },
  {
    label: 'Old Age Homes',
    icon: GiBoatFishing,
    description: 'This property is for taking care of Old people in old age homes!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;