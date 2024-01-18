import React from 'react';
import product1 from '../../assets/images/ecommerce/product-table-1.png';
import product2 from '../../assets/images/ecommerce/product-table-2.png';
import product3 from '../../assets/images/ecommerce/product-table-3.png';
import product4 from '../../assets/images/ecommerce/product-table-4.png';
import product5 from '../../assets/images/ecommerce/product-table-5.png';
import product6 from '../../assets/images/ecommerce/product-table-6.png';
import { Image, H6, Btn } from '../../AbstractElements';

export const productData = [
  {
    image: <Image attrImage={{ src: `${product1}`, alt: '' }} />,
    Details: <div>
      <H6>Red Lipstick</H6><br />
      Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
    </div>,
    amount: '$10',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2011/4/19',
    action:
      <div>
        <span>
          <Btn attrBtn={{ color: 'danger', size: 'xs' }}>Delete</Btn>
        </span>&nbsp;&nbsp;
        <span>
          <Btn attrBtn={{ color: 'success', size: 'xs' }}>Edit</Btn>
        </span>
      </div>

  },
  {
    image: <Image attrImage={{ src: `${product2}`, alt: '' }} />,
    Details: <div>
      <H6>Brown Lipstick</H6><br />
      Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
    </div>,
    amount: '$10',
    stock: <div className='font-danger'>Out of Stock</div>,
    start_date: '2011/4/19',
    action:
      <div>
        <span>
          <Btn attrBtn={{ color: 'danger', size: 'xs' }}>Delete</Btn>
        </span>&nbsp;&nbsp;
        <span>
          <Btn attrBtn={{ color: 'success', size: 'xs' }}>Edit</Btn>
        </span>
      </div>
  },
  {
    image: <Image attrImage={{ src: `${product3}`, alt: '' }} />,
    Details: <div>
      <H6>Yellow Lipstick</H6><br />
      Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
    </div>,
    amount: '$10',
    stock: <div className='font-danger'>Out of Stock</div>,
    start_date: '2011/4/19',
    action: <div>
      <span>
        <Btn attrBtn={{ color: 'danger', size: 'xs' }}>Delete</Btn>
      </span>&nbsp;&nbsp;
      <span>
        <Btn attrBtn={{ color: 'success', size: 'xs' }}>Edit</Btn>
      </span>
    </div>
  },
  {
    image: <Image attrImage={{ src: `${product4}`, alt: '' }} />,
    Details: <div>
      <H6>Green Lipstick</H6><br />
      Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
    </div>,
    amount: '$20',
    stock: <div className='font-primary'>Low Stock</div>,
    start_date: '2011/4/19',
    action: <div>
      <span>
        <Btn attrBtn={{ color: 'danger', size: 'xs' }}>Delete</Btn>
      </span>&nbsp;&nbsp;
      <span>
        <Btn attrBtn={{ color: 'success', size: 'xs' }}>Edit</Btn>
      </span>
    </div>
  },
  {
    image: <Image attrImage={{ src: `${product5}`, alt: '' }} />,
    Details: <div>
      <H6>Pink Lipstick</H6><br />
      Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
    </div>,
    amount: '$30',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2011/4/19',
    action: <div>
      <span>
        <Btn attrBtn={{ color: 'danger', size: 'xs' }}>Delete</Btn>
      </span>&nbsp;&nbsp;
      <span>
        <Btn attrBtn={{ color: 'success', size: 'xs' }}>Edit</Btn>
      </span>
    </div>
  },
  {
    image: <Image attrImage={{ src: `${product6}`, alt: '' }} />,
    Details: <div>
      <H6>Blue Lipstick</H6><br />
      Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
    </div>,
    amount: '$40',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2011/4/19',
    action: <div>
      <span>
        <Btn attrBtn={{ color: 'danger', size: 'xs' }}>Delete</Btn>
      </span>&nbsp;&nbsp;
      <span>
        <Btn attrBtn={{ color: 'success', size: 'xs' }}>Edit</Btn>
      </span>
    </div>
  },
  {
    image: <Image attrImage={{ src: `${product1}`, alt: '' }} />,
    Details: <div>
      <H6>Grey Lipstick</H6><br />
      Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
    </div>,
    amount: '$10',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2011/4/19',
    action: <div>
      <span>
        <Btn attrBtn={{ color: 'danger', size: 'xs' }}>Delete</Btn>
      </span>&nbsp;&nbsp;
      <span>
        <Btn attrBtn={{ color: 'success', size: 'xs' }}>Edit</Btn>
      </span>
    </div>
  },
  {
    image: <Image attrImage={{ src: `${product2}`, alt: '' }} />,
    Details: <div>
      <H6>Black Lipstick</H6><br />
      Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
    </div>,
    amount: '$10',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2011/4/19',
    action: <div>
      <span>
        <Btn attrBtn={{ color: 'danger', size: 'xs' }}>Delete</Btn>
      </span>&nbsp;&nbsp;
      <span>
        <Btn attrBtn={{ color: 'success', size: 'xs' }}>Edit</Btn>
      </span>
    </div>
  }
];
export const productColumns = [
  {
    name: 'Image',
    selector: 'image',
    sortable: true,
    center: true,
  },
  {
    name: 'Details',
    selector: 'Details',
    sortable: true,
    center: true,
    wrap: true
  },
  {
    name: 'Amount',
    selector: 'amount',
    sortable: true,
    center: true,
  },
  {
    name: 'Stock',
    selector: 'stock',
    sortable: true,
    center: true,
  },
  {
    name: 'Start_date',
    selector: 'start_date',
    sortable: true,
    center: true,
  },
  {
    name: 'Action',
    selector: 'action',
    sortable: true,
    center: true,
  },
];