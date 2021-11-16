import {ImBook} from 'react-icons/im'
import {AiFillHeart} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import {MdFastfood, MdOtherHouses} from 'react-icons/md'

export const categories = [
  {
    id: 1,
    title: "Education",
    icon: <ImBook />,
    color: "#A95EC2",
  },
  {
    id: 2,
    title: "Healthcare",
    icon: <AiFillHeart />,
    color: "#FF768A",
  },
  {
    id: 3,
    title: "Shopping",
    icon: <FaShoppingCart />,
    color: "#EC60AB",
  },
  {
    id: 4,
    title: "Food",
    icon: <MdFastfood />,
    color: "#FF9E6D",
  },
  {
    id: 5,
    title: "Other",
    icon: <MdOtherHouses />,
    color: "#FFCB5E",
  },
];
