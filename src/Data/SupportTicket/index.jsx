import React from 'react';
import user from '../../assets/images/user/5.jpg';
import user2 from '../../assets/images/user/3.png';
import user3 from '../../assets/images/user/7.jpg';
import user4 from '../../assets/images/user/6.jpg';
import user5 from '../../assets/images/user/11.png';
import user6 from '../../assets/images/user/4.jpg';
import user7 from '../../assets/images/user/1.jpg';
import user8 from '../../assets/images/user/9.jpg';
import user9 from '../../assets/images/user/8.jpg';
import user10 from '../../assets/images/user/2.png';
import user11 from '../../assets/images/user/11.png';
import user12 from '../../assets/images/user/12.png';
import user13 from '../../assets/images/user/10.jpg';
import { Media, Progress } from 'reactstrap';
import { Image } from '../../AbstractElements';

export const supportData = [

    {
        id: 1,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Airi Satou</div>
            </Media>
        </Media>,
        position: 'Accountant',
        salary: '$162,700',
        office: 'Tokyo',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={70} color='success' /></div>,
        extn: 5407,
        email: 'a.satou@datatables.net',
        experience: '1 Year'

    },

    {
        id: 2,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user3}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Ashton Cox</div>
            </Media>
        </Media>,
        position: 'Junior Technical Author',
        salary: '$86,000',
        office: 'San Francisco',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={60} color='danger' /></div>,
        extn: 1562,
        email: 'a.cox@datatables.net',
        experience: '1 Year'
    },

    {
        id: 3,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user4}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Bradley Greer</div>
            </Media>
        </Media>,
        position: 'Software Engineer',
        salary: '$132,000',
        office: 'London',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={30} color='primary' /></div>,
        extn: 2558,
        email: 'b.greer@datatables.net',
        experience: '4 Year'
    },

    {
        id: 4,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user5}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Brielle Williamson</div>
            </Media>
        </Media>,
        position: 'Integration Specialist',
        salary: '$372,000',
        office: 'New York',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={55} color='info' /></div>,
        extn: 4804,
        email: 'b.williamson@datatables.net',
        experience: '2 Months'
    },

    {
        id: 5,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user6}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Caesar Vance</div>
            </Media>
        </Media>,
        position: 'Pre-Sales Support',
        salary: '$106,450',
        office: 'New York',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={20} color='success' /></div>,
        extn: 8330,
        email: 'c.vance@datatables.net',
        experience: '5 Years'
    },

    {
        id: 6,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user7}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Cedric Kelly</div>
            </Media>
        </Media>,
        position: 'Senior Javascript Developer',
        salary: '$433,060',
        office: 'Edinburgh',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={50} color='success' /></div>,
        extn: 6224,
        email: 'c.kelly@datatables.net',
        experience: '1 Year'
    },

    {
        id: 7,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user8}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Charde Marshall</div>
            </Media>
        </Media>,
        position: 'Regional Director	',
        salary: '$470,600',
        office: 'San Francisco',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={80} color='secondary' /></div>,
        extn: 6741,
        email: 'c.marshall@datatables.net',
        experience: '3 Year'
    },

    {
        id: 8,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user9}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Colleen Hurst</div>
            </Media>
        </Media>,
        position: 'Javascript Developer',
        salary: '$205,500',
        office: 'San Francisco',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={100} color='info' /></div>,
        extn: 6224,
        email: 'c.hurst@datatables.net',
        experience: '2 Year'
    },

    {
        id: 9,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user10}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Dai Rios</div>
            </Media>
        </Media>,
        position: 'Personnel Lead',
        salary: '$217,500',
        office: 'Edinburgh',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={24} color='success' /></div>,
        extn: 2290,
        email: 'd.rios@datatables.net',
        experience: '4 Year'
    },

    {
        id: 10,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user11}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Garrett Winters</div>
            </Media>
        </Media>,
        position: 'Accountant',
        salary: '$170,750',
        office: 'Tokyo',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={40} color='warning' /></div>,
        extn: 8422,
        email: 'g.winters@datatables.net',
        experience: '1 Year'
    },

    {
        id: 11,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user4}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Gloria Little</div>
            </Media>
        </Media>,
        position: 'Systems Administrator',
        salary: '$237,500',
        office: 'New York',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={40} color='secondary' /></div>,
        extn: 1721,
        email: 'g.little@datatables.net',
        experience: '4 Year'
    },

    {
        id: 12,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user10}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Haley Kennedy</div>
            </Media>
        </Media>,
        position: 'Senior Marketing Designer',
        salary: '$313,500',
        office: 'London',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={15} color='success' /></div>,
        extn: 3597,
        email: 'h.kennedy@datatables.net',
        experience: '3 Year'
    },

    {
        id: 13,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user3}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Herrod Chandler</div>
            </Media>
        </Media>,
        position: 'Sales Assistant',
        salary: '$137,500',
        office: 'San Francisco',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={50} color='success' /></div>,
        extn: 9608,
        email: 'h.chandler@datatables.net',
        experience: '2 Year'
    },

    {
        id: 14,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user5}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Jena Gaines</div>
            </Media>
        </Media>,
        position: 'Office Manager',
        salary: '$90,560',
        office: 'London',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={80} color='warning' /></div>,
        extn: 3814,
        email: 'j.gaines@datatables.net',
        experience: '2 Year'
    },

    {
        id: 15,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user8}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Jenette Caldwell</div>
            </Media>
        </Media>,
        position: 'Development Lead',
        salary: '$345,000',
        office: 'New York',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={80} color='warning' /></div>,
        extn: 1937,
        email: 'j.caldwell@datatables.net',
        experience: '4 Year'
    },

    {
        id: 16,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user6}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Michael Silva</div>
            </Media>
        </Media>,
        position: 'Marketing Designer',
        salary: '$198,500',
        office: 'London',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={20} color='primary' /></div>,
        extn: 1581,
        email: 'm.silva@datatables.net',
        experience: '3 Year'
    },
    {
        id: 17,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Paul Byrd</div>
            </Media>
        </Media>,
        position: 'Chief Financial Officer (CFO)',
        salary: '$725,000',
        office: 'New York',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={20} color='primary' /></div>,
        extn: 3059,
        email: 'p.byrd@datatables.net',
        experience: '4 Year'
    },
    {
        id: 18,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user12}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Quinn Flynn</div>
            </Media>
        </Media>,
        position: 'Support Lead',
        salary: '$342,000',
        office: 'Edinburgh',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={10} color='success' /></div>,
        extn: 9497,
        email: 'q.flynn@datatables.net',
        experience: '3 Year'
    },
    {
        id: 19,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user9}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Rhona Davidson</div>
            </Media>
        </Media>,
        position: 'Integration Specialist',
        salary: '$327,900',
        office: 'Tokyo',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={10} color='success' /></div>,
        extn: 6200,
        email: 'r.davidson@datatables.net',
        experience: '2 Year'
    },
    {
        id: 20,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user13}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Sonya Frost</div>
            </Media>
        </Media>,
        position: 'Software Engineer',
        salary: '$103,600',
        office: 'Edinburgh',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={10} color='primary' /></div>,
        extn: 1667,
        email: 's.frost@datatables.net',
        experience: '2 Year'
    },
    {
        id: 21,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user2}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Tatyana Dens</div>
            </Media>
        </Media>,
        position: 'Regional Director',
        salary: '$385,750',
        office: 'London',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={30} color='Secondary' /></div>,
        extn: 1667,
        email: 't.fitzpatrick@datatables.net',
        experience: '3 Year'
    },
    {
        id: 22,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user7}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Tiger Nixon</div>
            </Media>
        </Media>,
        position: 'System Architect',
        salary: '$320,800',
        office: 'Edinburgh',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={30} color='primary' /></div>,
        extn: 5421,
        email: 't.nixon@datatables.net',
        experience: '1 Year'
    },
    {
        id: 23,
        image: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user13}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Yuri Berry</div>
            </Media>
        </Media>,
        position: 'Chief Marketing Officer (CMO)',
        salary: '$675,000',
        office: 'New York',
        skill: <div className="progress-showcase"><Progress className='sm-progress-bar' value={60} color='danger' /></div>,
        extn: 6154,
        email: 'y.berry@datatables.net',
        experience: '5 Year'
    },
];

export const supportColumns = [

    {
        name: 'Image',
        selector: row => row['image'],
        sortable: true,
        center: false,
    },
    {
        name: 'Position',
        selector: row => row['position'],
        sortable: true,
        center: true,
    },
    {
        name: 'Salary',
        selector: row => row['salary'],
        sortable: true,
        center: true,

    },
    {
        name: 'Office',
        selector: row => row['office'],
        sortable: true,
        center: true,
    },
    {
        name: 'Skill',
        selector: row => row['skill'],
        sortable: true,
        center: true,
        className: 'skill'
    },
    {
        name: 'Extn',
        selector: row => row['extn'],
        sortable: true,
        center: true,
    },
    {
        name: 'Email',
        selector: row => row['email'],
        sortable: true,
        center: true,
    },
    {
        name: 'Experience',
        selector: row => row['experience'],
        sortable: true,
        center: true,
    }
];



export const TicketData = [
    {
        id: 1,
        title: 'Order',
        num: '2563',
        class: 'progress-bar bg-primary'
    },
    {
        id: 2,
        title: 'Pending',
        num: '8943',
        class: 'progress-bar bg-secondary'
    },
    {
        id: 3,
        title: 'Running',
        num: '2500',
        class: 'progress-bar bg-warning'
    },
    {
        id: 4,
        title: 'Smooth',
        num: '2060',
        class: 'progress-bar bg-info'
    },
    {
        id: 5,
        title: 'Done',
        num: '5600',
        class: 'progress-bar bg-success'
    },
    {
        id: 6,
        title: 'Cancel',
        num: '2560',
        class: 'progress-bar bg-danger'
    },

];