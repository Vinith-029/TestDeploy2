import {
  mobile,
  backend,
  creator,
  web,
  email,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  user,
  tesla,
  warehouse,
  features,
  shopify,
  transport,
  carrent,
  jobit,
  tripguide,
  threejs,
  tracking,
  multipleop,
  list,
} from '../assets';

export const navLinks = [
  /*{
    id: 'Login',
    title: 'Login',
    path: '/Owner',
  },
  {
    id: 'SignUp',
    title: 'SignUp',
    path: '/Vregister',
  }*/

  {
    id: 'Admin',
    title: 'Admin',
    path: '/Owner',
  },
  {
    id: 'Warehouse',
    title: 'Warehouse',
    path: '/Warehouse',
  },
  {
    id: 'Transport',
    title: 'Transport',
    path: '/Vlogin',
  },
];

const services = [
  {
    title: 'Alert Messages',
    icon: email,
  },
  {
    title: 'Tracking',
    icon: tracking,
  },
  {
    title: "Client's Vendor Selection Menu",
    icon: multipleop,
  },
  {
    title: 'Transport Listing',
    icon: list,
  },
];

const experiences = [
  {
    title: 'User',
    //company_name: "User",
    icon: user,
    iconBg: '#383E56',
    //date: "March 2020 - April 2021",
    points: [
      "The landing page is prompted with 3 categories namely Admin, Warehouse and Transport which has separate login credentials of it's own.",
      'The business owner has various options to choose which service he/she wants to avail.',
      'Once the owner proceeds to place the order, they are redirected to a page to enter the basic details for shipment and confirm the same with their payment.',
      'They are shown with multiple options of transportation and can choose one among them.',
    ],
  },
  {
    title: 'Warehouse',
    //company_name: "Warehouse",
    icon: warehouse,
    iconBg: '#E6DEDD',
    //date: "Jan 2021 - Feb 2022",
    points: [
      'This involves tracking the movement of goods in and out of the warehouse, as well as managing products stored in the warehouse and ensuring that inventory is accurate and up-to-date.',
      'This involves processing orders and shipping them out to customers in a timely and efficient manner.',
      'This involves optimizing the use of the available space in the warehouse to ensure that goods can be stored, accessed, and moved around efficiently.',
    ],
  },
  {
    title: 'Features',
    //company_name: "Shopify",
    icon: features,
    iconBg: '#383E56',
    //date: "Jan 2022 - Jan 2023",
    points: [
      'This feature helps the business owner to get a track of status of the order from the time of processing till arrival.',
      'Once the order-Id is entered from the owner side a pop up will be shown on the page to get the status of the package that is being transported.',
      'Additionally there will also be email alerts sent to the linked email account at every stage of delivery.',
    ],
  },
  {
    title: 'Transport',
    //company_name: "Meta",
    icon: transport, //truck,
    iconBg: '#E6DEDD',
    //date: "Jan 2023 - Present",
    points: [
      'Once the order has been placed successfully, the business owner can view the details of the mode of transportation and other relevant details in this page.',
      'This acts like an acknowledgment for the owner once the order is processed which will then redirect him/her to other features.',
    ],
  },
];

export {experiences, services};
