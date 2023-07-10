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
import { FaRecycle } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import { FaTree } from 'react-icons/fa';
import { FaWater } from 'react-icons/fa';
import { FaDog } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Cleaning ',
    icon: FaTrashAlt,
    description: 'This event is for cleaning!',
  },
  {
    label: 'Recycling',
    icon: FaRecycle,
    description: 'This event is for recycling events!',
  },
  {
    label: 'Street Education',
    icon: FaBookOpen,
    description: 'This event is for educating street children!'
  },
  {
    label: 'Tree Plantation',
    icon: FaTree,
    description: 'This event is for plantation of trees event!'
  },
  {
    label: 'Water Conservation',
    icon: FaWater,
    description: 'This is event is for water conservation event!'
  },
  {
    label: 'Animal Care',
    icon: FaDog,
    description: 'This event is on providing care for Animals!'
  },
  {
    label: 'Old Age Homes',
    icon: FaHome,
    description: 'This event is for taking care of Old people in old age homes!'
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