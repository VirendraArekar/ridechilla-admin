import React from 'react';
import { Btn, H4, Image } from '../../AbstractElements';
import product1 from '../../assets/images/ecommerce/product-table-1.png';
import product2 from '../../assets/images/ecommerce/product-table-2.png';
import product3 from '../../assets/images/ecommerce/product-table-3.png';
import product4 from '../../assets/images/ecommerce/product-table-4.png';
import product5 from '../../assets/images/ecommerce/product-table-5.png';
import product6 from '../../assets/images/ecommerce/product-table-6.png';

const style2 = { width: 60, fontSize: 13, padding: 3 };
export const productData = [
  {
    image: <Image attrImage={{ src: `${product1}`, alt: '' }} />,
    Details: <div>
      <H4>Denim Jacket</H4>
      <span>Vida Loca - Blue Denim Fit Men's  Jacket.</span>
    </div>,
    amount: '$10',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2022/4/19',
    action:
      <div>
        <span>
          <Btn attrBtn={{ style: style2, className: 'me-2', color: 'danger btn-xs', type: 'button' }}>Delete</Btn>
        </span>
        <span>
          <Btn attrBtn={{ style: style2, color: 'primary btn-xs', type: 'button' }}>Edit </Btn>
        </span>
      </div >
  },
  {
    image: <Image attrImage={{ src: `${product2}`, alt: '' }} />,
    Details: <div>
      <H4>Sky Blue Shirt</H4>
      <span>Wild West - Sky blue Cotton Blend Regular Fit Men's Formal Shirt.</span>
    </div>,
    amount: '$10',
    stock: <div className='font-danger'>Out of Stock</div>,
    start_date: '2022/4/19',
    action:
      <div>
        <span>
          <Btn attrBtn={{ style: style2, className: 'me-2', color: 'danger btn-xs', type: 'button' }}>Delete</Btn>
        </span>
        <span>
          <Btn attrBtn={{ style: style2, color: 'primary btn-xs', type: 'button' }}>Edit </Btn>
        </span>
      </div >
  },
  {
    image: <Image attrImage={{ src: `${product3}`, alt: '' }} />,
    Details: <div>
      <H4>Red Lipstick</H4>
      <span>RENEE Fab 5 5-in-1 Lipstick 7.5gm, Long Lasting Matte Finish. </span>
    </div>,
    amount: '$10',
    stock: <div className='font-danger'>Out of Stock</div>,
    start_date: '2022/4/19',
    action:
      <div>
        <span>
          <Btn attrBtn={{ style: style2, className: 'me-2', color: 'danger btn-xs', type: 'button' }}>Delete</Btn>
        </span>
        <span>
          <Btn attrBtn={{ style: style2, color: 'primary btn-xs', type: 'button' }}>Edit </Btn>
        </span>
      </div >
  },
  {
    image: <Image attrImage={{ src: `${product4}`, alt: '' }} />,
    Details: <div>
      <H4>Black Tshirt</H4>
      <span>Aask - Black Polyester Blend Women's Fit & Flare Dress.</span>
    </div>,
    amount: '$20',
    stock: <div className='font-primary'>Low Stock</div>,
    start_date: '2022/4/19',
    action:
      <div>
        <span>
          <Btn attrBtn={{ style: style2, className: 'me-2', color: 'danger btn-xs', type: 'button' }}>Delete</Btn>
        </span>
        <span>
          <Btn attrBtn={{ style: style2, color: 'primary btn-xs', type: 'button' }}>Edit </Btn>
        </span>
      </div >
  },
  {
    image: <Image attrImage={{ src: `${product5}`, alt: '' }} />,
    Details: <div>
      <H4>White Tshirt</H4>
      <span>White Cotton Blend Regular Fit Men's Formal Shirt.</span>
    </div>,
    amount: '$30',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2022/4/19',
    action:
      <div>
        <span>
          <Btn attrBtn={{ style: style2, className: 'me-2', color: 'danger btn-xs', type: 'button' }}>Delete</Btn>
        </span>
        <span>
          <Btn attrBtn={{ style: style2, color: 'primary btn-xs', type: 'button' }}>Edit </Btn>
        </span>
      </div >
  },
  {
    image: <Image attrImage={{ src: `${product6}`, alt: '' }} />,
    Details: <div>
      <H4>Black Trouser</H4>
      <span>Black Cotton Blend Regular Fit Women's Formal Trouser.</span>
    </div>,
    amount: '$40',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2022/4/19',
    action:
      <div>
        <span>
          <Btn attrBtn={{ style: style2, className: 'me-2', color: 'danger btn-xs', type: 'button' }}>Delete</Btn>
        </span>
        <span>
          <Btn attrBtn={{ style: style2, color: 'primary btn-xs', type: 'button' }}>Edit </Btn>
        </span>
      </div >
  },
  {
    image: <Image attrImage={{ src: `${product2}`, alt: '' }} />,
    Details: <div>
      <H4>Sky Blue Shirt</H4>
      <span>Wild West - Sky blue Cotton Blend Regular Fit Men's Formal Shirt.</span>
    </div>,
    amount: '$10',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2022/4/19',
    action:
      <div>
        <span>
          <Btn attrBtn={{ style: style2, className: 'me-2', color: 'danger btn-xs', type: 'button' }}>Delete</Btn>
        </span>
        <span>
          <Btn attrBtn={{ style: style2, color: 'primary btn-xs', type: 'button' }}>Edit </Btn>
        </span>
      </div >
  },
  {
    image: <Image attrImage={{ src: `${product3}`, alt: '' }} />,
    Details: <div>
      <H4>White Top</H4>
      <span>Aask - White Polyester Blend Women's Fit & Flare Dress.</span>
    </div>,
    amount: '$10',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2022/4/19',
    action:
      <div>
        <span>
          <Btn attrBtn={{ style: style2, className: 'me-2', color: 'danger btn-xs', type: 'button' }}>Delete</Btn>
        </span>
        <span>
          <Btn attrBtn={{ style: style2, color: 'primary btn-xs', type: 'button' }}>Edit </Btn>
        </span>
      </div >
  }
];
export const productColumns = [
  {
    name: 'Image',
    selector: (row) => row.image,
    sortable: true,
    center: true,
  },
  {
    name: 'Details',
    selector: (row) => row.Details,
    sortable: true,
    center: true,
    wrap: true
  },
  {
    name: 'Amount',
    selector: (row) => row.amount,
    sortable: true,
    center: true,
  },
  {
    name: 'Stock',
    selector: (row) => row.stock,
    sortable: true,
    center: true,
  },
  {
    name: 'Start_date',
    selector: (row) => row.start_date,
    sortable: true,
    center: true,
  },
  {
    name: 'Action',
    selector: (row) => row.action,
    sortable: true,
    center: true,
  },
];