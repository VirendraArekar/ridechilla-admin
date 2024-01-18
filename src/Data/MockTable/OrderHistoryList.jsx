import React from 'react';
import product1 from '../../assets/images/ecommerce/01.jpg';
import product2 from '../../assets/images/ecommerce/02.jpg';
import product3 from '../../assets/images/ecommerce/03.jpg';
import product4 from '../../assets/images/ecommerce/04.jpg';
import product15 from '../../assets/images/ecommerce/05.jpg';
import product14 from '../../assets/images/ecommerce/06.jpg';
import product11 from '../../assets/images/ecommerce/07.jpg';
import product12 from '../../assets/images/ecommerce/08.jpg';
import { Image, H4 } from '../../AbstractElements';


export const OrderHistoryData = [
  {
    id: 1,
    Product: <span><Image attrImage={{ className: "img-fluid img-30 me-2", src: `${product1}`, alt: "" }} />Women's Jacket</span>,
    Productname: "Women's Jacket",
    Size: 'M',
    Color: <span className='badge bg-lavender p-1'>{'Lavander'}</span>,
    Article_number: "G-01024224",
    Units: 1,
    Price: '$25',
    status: <span className='font-primary'>{'In Proccess'}</span>,
    payment: "Credit Card"
  },
  {
    id: 2,
    Product: <span><Image attrImage={{ className: "img-fluid img-30 me-2", src: `${product2}`, alt: "" }} />Denim Jacket</span>,
    Productname: "Denim Jacket",
    Size: 'Xl',
    Color: <span className='badge bg-blue p-1'>{"Blue"}</span>,
    Article_number: "G-2024242",
    Units: 8,
    Price: '$85',
    status: <span className='font-secondary'>{'Pending'}</span>,
    payment: "Bank Transfer"
  },
  {
    id: 3,
    Product: <span><Image attrImage={{ className: "img-fluid img-30 me-2", src: `${product3}`, alt: "" }} />Wonder Woman</span>,
    Productname: "Wonder Woman",
    Size: 'XL',
    Color: <span className='badge bg-brown p-1'>{"Brown"}</span>,
    Article_number: "G-875554",
    Units: 5,
    Price: '$89',
    status: <span className='font-success'>{'Completed'}</span>,
    payment: "COD"
  },
  {
    id: 4,
    Product: <span><Image attrImage={{ className: "img-fluid img-30 me-2", src: `${product12}`, alt: "" }} />Women's TreckSuit</span>,
    Productname: "Women's TreckSuit",
    Size: 'M',
    Color: <span className='badge bg-success p-1'>Green</span>,
    Article_number: "G-45645643",
    Units: 3,
    Price: '$35',
    status: <span className='font-success'>{'Completed'}</span>,
    payment: "Google Pay"
  },
  {
    id: 5,
    Product: <span><Image attrImage={{ className: "img-fluid img-30 me-2", src: `${product4}`, alt: "" }} />Roadster</span>,
    Productname: "Roadster",
    Size: 'XXL',
    Color: <span className='badge bg-pink p-1'>{"Pink"}</span>,
    Article_number: "G-94864563",
    Units: 12,
    Price: '$50',
    status: <span className='font-secondary'>{'Pending'}</span>,
    payment: "Credit Card"
  },
  {
    id: 6,
    Product: <span><Image attrImage={{ className: "img-fluid img-30 me-2", src: `${product15}`, alt: "" }} />Women T-Shirt</span>,
    Productname: "Women T-Shirt",
    Size: 'XL',
    Color: <span className='badge bg-dark p-1'>{"Black"}</span>,
    Article_number: "G-6466645",
    Units: 10,
    Price: '$285',
    status: <span className='font-primary'>{'In Progress'}</span>,
    payment: "COD"
  },
  {
    id: 7,
    Product: <span><Image attrImage={{ className: "img-fluid img-30 me-2", src: `${product11}`, alt: "" }} /> Man's Jacket</span>,
    Productname: "Man's Jacket",
    Size: 'M',
    Color: <span className='badge bg-brown p-1'>{"Brown"}</span>,
    Article_number: "G-555758",
    Units: 6,
    Price: '$245',
    status: <span className='font-danger'>{'Canceled'}</span>,
    payment: "Bank Transfer"
  },
  {
    id: 8,
    Product: <span><Image attrImage={{ className: "img-fluid img-30 me-2", src: `${product12}`, alt: "" }} />Women's TreckSuit</span>,
    Productname: "Women's TreckSuit",
    Size: 'S',
    Color: <span className='badge bg-orange p-1'>{"Orange"}</span>,
    Article_number: "G-1245554",
    Units: 2,
    Price: '$235',
    status: <span className='font-success'>{'Completed'}</span>,
    payment: "PayPal"
  },
  {
    id: 9,
    Product: <span><Image attrImage={{ className: "img-fluid img-30 me-2", src: `${product1}`, alt: "" }} />Women's Jacket</span>,
    Productname: "Women's Jacket",
    Size: 'R',
    Color: <span className='badge bg-pista p-1'>{"Pista"}</span>,
    Article_number: "G-123456",
    Units: 4,
    Price: '$55',
    status: <span className='font-secondary'>{'pending'}</span>,
    payment: "COD"
  },
  {
    id: 10,
    Product: <span><Image attrImage={{ className: "img-fluid img-30 me-2", src: `${product14}`, alt: "" }} /> Men's Shirt</span>,
    Productname: "Men's Shirt",
    Size: 'L',
    Color: <span className='badge bg-blue p-1'>{"Blue"}</span>,
    Article_number: "G-456879",
    Units: 9,
    Price: '$35',
    status: <span className='font-primary'>{'In Progress'}</span>,
    payment: "PayPal"
  },
  {
    id: 11,
    Product: <span><Image attrImage={{ className: "img-fluid img-30 me-2", src: `${product4}`, alt: "" }} />Men's Shirt</span>,
    Productname: "Men's Shirt",
    Size: 'L',
    Color: <span className='badge bg-dark p-1'>{"Black"}</span>,
    Article_number: "G456879",
    Units: 9,
    Price: '$25',
    status: <span className='font-success'>{'Complated'}</span>,
    payment: "Credit Card"
  },
  {
    id: 12,
    Product: <span><Image attrImage={{ className: "img-fluid img-30 me-2", src: `${product2}`, alt: "" }} />Men's Shirt</span>,
    Productname: "Men's Shirt",
    Size: 'L',
    Color: <span className='badge bg-white text-dark border p-1'>{"White"}</span>,
    Article_number: "G456879",
    Units: 9,
    Price: '$15',
    status: <span className='font-danger'>{'Canceled'}</span>,
    payment: "COD"
  },
];
export const OrderHistoryColumns = [
  {
    name: <H4>Product</H4>,
    selector: row => row.Product,
    sortable: true,
    center: false,
  },
  {
    name: <H4>Size</H4>,
    selector: row => row.Size,
    sortable: true,
    center: true,
  },
  {
    name: <H4>Color</H4>,
    selector: row => row.Color,
    sortable: true,
    center: true,
  },
  {
    name: <H4>Article number</H4>,
    selector: row => row.Article_number,
    sortable: true,
    center: true,
  },
  {
    name: <H4>Units</H4>,
    selector: row => row.Units,
    sortable: true,
    center: true,
  },
  {
    name: <H4>Price</H4>,
    selector: row => row.Price,
    sortable: true,
    center: true,
  },
  {
    name: <H4>Status</H4>,
    selector: row => row.status,
    sortable: true,
    center: true,
  },
  {
    name: <H4>Payment Mode</H4>,
    selector: row => row.payment,
    sortable: true,
    center: true,
  }
];