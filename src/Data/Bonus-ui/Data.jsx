import React from 'react';
import { AbsoluteStyle, BorderBottom, BorderColorState, BorderLeft, BorderRight, BorderTop, ColorState, DragBothTitleCard, DragOnlyCard, DragOnlyContent } from '../../Constant';
import { Book, Briefcase, Droplet, Heart, MapPin } from 'react-feather';

export const CarouselsData = [
    {
        id: 1,
        img: require('../../assets/images/slider/1.jpg')
    },
    {
        id: 2,
        img: require('../../assets/images/slider/2.jpg')
    },
    {
        id: 3,
        img: require('../../assets/images/slider/3.jpg')
    },
    {
        id: 4,
        img: require('../../assets/images/slider/4.jpg')
    },
    {
        id: 5,
        img: require('../../assets/images/slider/5.jpg')
    },
    {
        id: 6,
        img: require('../../assets/images/slider/7.jpg')
    },
    {
        id: 7,
        img: require('../../assets/images/slider/8.jpg')
    },
    {
        id: 8,
        img: require('../../assets/images/slider/9.jpg')
    },
    {
        id: 9,
        img: require('../../assets/images/slider/10.jpg')
    },
    {
        id: 10,
        img: require('../../assets/images/slider/11.jpg')
    },
    {
        id: 11,
        img: require('../../assets/images/slider/6.jpg')
    }
];

export const BasicSweetalrtData = [
    {
        id: 1,
        color: 'primary sweet-1',
        name: 'basic',
        title: 'Basic'
    },
    {
        id: 2,
        color: 'primary sweet-2',
        name: 'basictitlealert',
        title: 'With Title Alert'
    },
    {
        id: 3,
        color: 'success sweet-3',
        name: 'basicsuccessalert',
        title: 'Success Alert'
    },
    {
        id: 4,
        color: 'info sweet-4',
        name: 'basicinfoalert',
        title: 'Info Alert'
    },
    {
        id: 5,
        color: 'warning sweet-5',
        name: 'basicwarningalert',
        title: 'Warning Alert'
    }
];
export const AlertSweetalertData = [
    {
        id: 1,
        color: 'success sweet-8',
        name: 'alert Success',
        title: 'Success'
    },
    {
        id: 2,
        color: 'danger sweet-7',
        name: 'alert Danger',
        title: 'Danger'
    },
    {
        id: 3,
        color: 'info sweet-9',
        name: 'alert Info',
        title: 'Information'
    },
    {
        id: 4,
        color: 'warning sweet-6',
        name: 'alert Warning',
        title: 'Warning'
    },
];

export const AdvancedData = [
    {
        id: 1,
        color: 'danger sweet-11',
        name: 'advanceDanger',
        title: 'Danger'
    },
    {
        id: 2,
        color: 'info sweet-13',
        name: 'advanceInfo',
        title: 'Information'
    },
    {
        id: 3,
        color: 'warning sweet-10',
        name: 'advanceWarning',
        title: 'Warning'
    },
];

export const RibbonData = [
    {
        id: 1,
        class: 'ribbon ribbon-primary',
        wrapperClass: 'ribbon-wrapper',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 2,
        class: 'ribbon ribbon-secondary',
        wrapperClass: 'ribbon-wrapper',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 3,
        class: 'ribbon ribbon-success',
        wrapperClass: 'ribbon-wrapper',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 4,
        class: 'ribbon ribbon-info',
        wrapperClass: 'ribbon-wrapper',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 5,
        class: 'ribbon ribbon-warning',
        wrapperClass: 'ribbon-wrapper',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 6,
        class: 'ribbon ribbon-danger',
        wrapperClass: 'ribbon-wrapper',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 7,
        class: 'ribbon ribbon-primary ribbon-right',
        title: 'Ribbon',
        wrapperClass: 'ribbon-wrapper',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 8,
        class: 'ribbon ribbon-secondary ribbon-right',
        wrapperClass: 'ribbon-wrapper',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 9,
        class: 'ribbon ribbon-success ribbon-right',
        wrapperClass: 'ribbon-wrapper',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 10,
        class: 'ribbon ribbon-info ribbon-right',
        wrapperClass: 'ribbon-wrapper',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 11,
        class: 'ribbon ribbon-warning ribbon-right',
        wrapperClass: 'ribbon-wrapper',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 12,
        class: 'ribbon ribbon-danger ribbon-right',
        wrapperClass: 'ribbon-wrapper',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 13,
        class: 'ribbon ribbon-primary ribbon-vertical-left',
        wrapperClass: 'ribbon-vertical-left-wrapper',
        title: <i className='icofont icofont-love'></i>,
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 14,
        class: 'ribbon ribbon-secondary ribbon-vertical-left',
        wrapperClass: 'ribbon-vertical-left-wrapper',
        title: <i className='icon-gift'></i>,
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 15,
        class: 'ribbon ribbon-success ribbon-vertical-left',
        wrapperClass: 'ribbon-vertical-left-wrapper',
        title: <i className='icon-signal'></i>,
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 16,
        class: 'ribbon ribbon-primary ribbon-vertical-right',
        wrapperClass: 'ribbon-vertical-right-wrapper',
        title: <i className='fa fa-chain-broken'></i>,
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 17,
        wrapperClass: 'ribbon-vertical-right-wrapper',
        class: 'ribbon ribbon-secondary ribbon-vertical-right',
        title: <i className='fa fa-ticket'></i>,
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 18,
        wrapperClass: 'ribbon-vertical-right-wrapper',
        class: 'ribbon ribbon-success ribbon-vertical-right',
        title: <i className='fa fa-taxi'></i>,
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 19,
        wrapperClass: 'ribbon-wrapper',
        class: 'ribbon ribbon-bookmark ribbon-primary',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 20,
        wrapperClass: 'ribbon-wrapper',
        class: 'ribbon ribbon-bookmark ribbon-secondary',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 21,
        wrapperClass: 'ribbon-wrapper',
        class: 'ribbon ribbon-bookmark ribbon-success',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 22,
        wrapperClass: 'ribbon-wrapper-right',
        class: 'ribbon ribbon-bookmark ribbon-right ribbon-primary',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 23,
        wrapperClass: 'ribbon-wrapper-right',
        class: 'ribbon ribbon-bookmark ribbon-right ribbon-secondary',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 24,
        wrapperClass: 'ribbon-wrapper-right',
        class: 'ribbon ribbon-bookmark ribbon-right ribbon-success',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 25,
        class: 'ribbon ribbon-bookmark ribbon-primary ribbon-vertical-left',
        wrapperClass: 'ribbon-vertical-left-wrapper',
        title: <i className='icofont icofont-love'></i>,
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 26,
        class: 'ribbon ribbon-bookmark ribbon-secondary ribbon-vertical-left',
        wrapperClass: 'ribbon-vertical-left-wrapper',
        title: <i className='icon-gift'></i>,
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 27,
        class: 'ribbon ribbon-bookmark ribbon-success ribbon-vertical-left',
        wrapperClass: 'ribbon-vertical-left-wrapper',
        title: <i className='icon-signal'></i>,
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 28,
        class: 'ribbon ribbon-bookmark ribbon-primary ribbon-vertical-right',
        wrapperClass: 'ribbon-vertical-right-wrapper',
        title: <i className='icofont icofont-love'></i>,
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 29,
        wrapperClass: 'ribbon-vertical-right-wrapper',
        class: 'ribbon ribbon-bookmark ribbon-secondary ribbon-vertical-right',
        title: <i className='icon-gift'></i>,
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 30,
        wrapperClass: 'ribbon-vertical-right-wrapper',
        class: 'ribbon ribbon-bookmark ribbon-success ribbon-vertical-right',
        title: <i className='icon-signal'></i>,
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 31,
        wrapperClass: 'ribbon-wrapper',
        class: 'ribbon ribbon-clip ribbon-primary',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 32,
        wrapperClass: 'ribbon-wrapper',
        class: 'ribbon ribbon ribbon-clip ribbon-secondary',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 33,
        wrapperClass: 'ribbon-wrapper-right',
        class: 'ribbon ribbon-clip ribbon-success',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 34,
        wrapperClass: 'ribbon-wrapper-right',
        class: 'ribbon ribbon-clip-right ribbon-right ribbon-primary',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 35,
        wrapperClass: 'ribbon-wrapper-right',
        class: 'ribbon ribbon-clip-right ribbon-right ribbon-secondary',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 36,
        wrapperClass: 'ribbon-wrapper-right',
        class: 'ribbon ribbon-clip-right ribbon-right ribbon-success',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 37,
        wrapperClass: 'ribbon-wrapper-bottom',
        class: 'ribbon ribbon-clip-bottom ribbon-primary',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 38,
        wrapperClass: 'ribbon-wrapper-bottom',
        class: 'ribbon ribbon-clip-bottom ribbon-secondary',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 39,
        wrapperClass: 'ribbon-wrapper-bottom',
        class: 'ribbon ribbon-clip-bottom ribbon-success',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 40,
        wrapperClass: 'ribbon-wrapper-bottom',
        class: 'ribbon ribbon-clip-bottom-right ribbon-primary',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 41,
        wrapperClass: 'ribbon-wrapper-bottom',
        class: 'ribbon ribbon-clip-bottom-right ribbon-secondary',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    },
    {
        id: 42,
        wrapperClass: 'ribbon-wrapper-bottom',
        class: 'ribbon ribbon-clip-bottom-right ribbon-success',
        title: 'Ribbon',
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    }
];
export const BasicCardData = [
    {
        id: 1,
        title: 'Basic Card',
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        settingIcon: true
    },
    {
        id: 2,
        title: 'Flat Card',
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        settingIcon: true
    },
    {
        id: 3,
        title: 'Without Shadow Card',
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
        id: 4,
        icon: <i className="icofont icofont-truck me-2"></i>,
        title: ' Icon In Heading',
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
        id: 5,
        title: 'Card Sub Title',
        span: 'Using the card component, you can extend the default collapse behavior to create an accordion.',
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
        id: 6,
        title: 'Card With Footer',
        pare: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the the industrys standard dummy text ever.',
        footer: 'Card Footer'
    },
    {
        id: 7,
        title: 'Primary Color Card',
        colorClass: 'bg-primary',
        titleClass: true,
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
        footer: 'Card Footer',
    },
    {
        id: 8,
        title: 'Secondary Color Card',
        colorClass: 'bg-secondary',
        titleClass: true,
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
        footer: 'Card Footer',
    },
    {
        id: 9,
        title: 'Success Color Card',
        colorClass: 'bg-success',
        titleClass: true,
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
        footer: 'Card Footer',
    },
    {
        id: 10,
        title: 'Primary Color Header',
        headerClass: 'bg-primary',
        titleClass: true,
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
        footer: 'Card Footer',
        padding: true,
    },
    {
        id: 11,
        title: 'Primary Color Body',
        bodyClass: 'bg-primary',
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
        footer: 'Card Footer',
        padding: true,
        settingPrimary: true
    },
    {
        id: 12,
        title: 'Primary Color Footer',
        footerClass: 'bg-primary',
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
        footer: 'Card Footer',
        padding: true,
        settingPrimary: true
    }
];

export const CreativeCardData = [
    {
        id: '1',
        title: BorderLeft,
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        headerClass: 'border-bottom-light b-l-primary'
    },
    {
        id: '2',
        title: BorderRight,
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        headerClass: 'border-bottom-light b-r-secondary'
    },
    {
        id: '3',
        title: BorderTop,
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        headerClass: 'border-bottom-light b-t-success'
    },
    {
        id: '4',
        title: BorderBottom,
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        headerClass: 'b-b-info'
    },
    {
        id: '5',
        title: BorderColorState,
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        headerClass: 'border-bottom-light b-l-warning'
    },
    {
        id: '6',
        title: BorderColorState,
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        headerClass: 'border-bottom-light b-l-danger'
    },
    {
        id: '7',
        title: BorderColorState,
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        headerClass: 'border-bottom-light b-l-secondary'
    },
    {
        id: '8',
        title: BorderColorState,
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        headerClass: 'border-bottom-light b-l-primary'
    },
    {
        id: '9',
        title: BorderColorState,
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        headerClass: 'border-bottom-light b-l-secondary border-2'
    },
    {
        id: '10',
        title: BorderColorState,
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        headerClass: 'border-bottom-light b-l-primary border-3'
    },
    {
        id: '11',
        cardClass: 'card-absolute',
        title: AbsoluteStyle,
        titleClass: true,
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        headerClass: 'bg-primary'
    },
    {
        id: '12',
        cardClass: 'card-absolute',
        title: ColorState,
        titleClass: true,
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        headerClass: 'bg-secondary'
    }
];

export const TabCardData = [
    {
        pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        navClass: 'pull-right  nav-pills nav-primary',
        state: 'activeTab'
    },
];

export const dragData = [
    {
        title: DragBothTitleCard,
        bordType: 'initialBoard',
        board: {
            columns: [
                {
                    id: 1,
                    title: 'Backlog',
                    cards: [
                        {
                            id: 1,
                            title: 'Add card',
                            description: 'Add capability to add a card in a column'
                        },
                    ]
                },
                {
                    id: 2,
                    title: 'Doing',
                    cards: [
                        {
                            id: 2,
                            title: 'Drag-n-drop support',
                            description: 'Move a card between the columns'
                        },
                    ]
                }
            ]
        }
    },
    {
        title: DragOnlyCard,
        bordType: 'disableCardDrag',
        board: {
            columns: [
                {
                    id: 1,
                    title: 'Backlog',
                    cards: [
                        {
                            id: 1,
                            title: 'Add card',
                            description: 'Add capability to add a card in a column'
                        },
                    ]
                },
                {
                    id: 2,
                    title: 'Doing',
                    cards: [
                        {
                            id: 2,
                            title: 'Drag-n-drop support',
                            description: 'Move a card between the columns'
                        },
                    ]
                }
            ]
        }

    },
    {
        title: DragOnlyContent,
        bordType: 'DragOnlyContent',
        board: {
            columns: [
                {
                    id: 1,
                    title: 'Backlog',
                    cards: [
                        {
                            id: 1,
                            title: 'Add card',
                            description: 'Add capability to add a card in a column'
                        },
                    ]
                },
                {
                    id: 2,
                    title: 'Doing',
                    cards: [
                        {
                            id: 2,
                            title: 'Drag-n-drop support',
                            description: 'Move a card between the columns'
                        },
                    ]
                }
            ]
        }
    }
];

export const FriendsData = [
    {
        id: 1,
        img: require('../../assets/images/user/1.jpg'),
        title: 'Jason Borne'
    },
    {
        id: 2,
        img: require('../../assets/images/user/2.png'),
        title: 'Anna Mull'
    },
    {
        id: 3,
        img: require('../../assets/images/user/3.jpg'),
        title: 'Dion Cast'
    },
    {
        id: 4,
        img: require('../../assets/images/user/3.png'),
        title: 'Karlene Lex'
    },
    {
        id: 5,
        img: require('../../assets/images/user/4.jpg'),
        title: 'Vella Chism'
    },
    {
        id: 6,
        img: require('../../assets/images/user/5.jpg'),
        title: 'Wai Schalk'
    },
    {
        id: 7,
        img: require('../../assets/images/user/6.jpg'),
        title: 'Karlene Lex'
    },
    {
        id: 8,
        img: require('../../assets/images/user/7.jpg'),
        title: 'Karlene Lex'
    },
    {
        id: 9,
        img: require('../../assets/images/user/8.jpg'),
        title: 'Genelia Deo'
    },
    {
        id: 10,
        img: require('../../assets/images/user/9.jpg'),
        title: 'Loren Mark'
    },
    {
        id: 11,
        img: require('../../assets/images/user/10.jpg'),
        title: 'Kerley Park'
    },
    {
        id: 12,
        img: require('../../assets/images/user/11.png'),
        title: 'Jucker Burg'
    }
];

export const LatestPhotosData = [
    {
        id: 1,
        img: require('../../assets/images/social-app/post-1.png')
    },
    {
        id: 2,
        img: require('../../assets/images/social-app/post-2.png')
    },
    {
        id: 3,
        img: require('../../assets/images/social-app/post-3.png')
    },
    {
        id: 4,
        img: require('../../assets/images/social-app/post-4.png')
    },
    {
        id: 5,
        img: require('../../assets/images/social-app/post-5.png')
    },
    {
        id: 6,
        img: require('../../assets/images/social-app/post-6.png')
    },
    {
        id: 7,
        img: require('../../assets/images/social-app/post-7.png')
    },
    {
        id: 8,
        img: require('../../assets/images/social-app/post-8.png')
    }
];

export const AboutMeData = [
    {
        id: 1,
        icon: <Briefcase />,
        designation: 'UX desginer at Pixelstrap',
        place: 'banglore - 2023'
    },
    {
        id: 2,
        icon: <Book />,
        designation: 'studied computer science',
        place: 'at london univercity - 2018'
    },
    {
        id: 3,
        icon: <Heart />,
        designation: 'relationship status',
        place: 'single'
    },
    {
        id: 4,
        icon: <MapPin />,
        designation: 'lived in london',
        place: 'last 5 year'
    },
    {
        id: 5,
        icon: <Droplet />,
        designation: 'blood group',
        place: 'O+ positive'
    }
];
export const FollowingsData = [
    {
        id: 1,
        img: require('../../assets/images/user/3.png'),
        name: 'Sarah Loren'
    },
    {
        id: 2,
        img: require('../../assets/images/user/2.png'),
        name: 'Bucky Barnes'
    },
    {
        id: 3,
        img: require('../../assets/images/user/10.jpg'),
        name: 'Comeren Diaz'
    },
    {
        id: 4,
        img: require('../../assets/images/user/11.png'),
        name: 'Jason Borne'
    },
    {
        id: 5,
        img: require('../../assets/images/user/3.png'),
        name: 'Andew Jon'
    }
];
export const FollowersData = [
    {
        id: 1,
        img: require('../../assets/images/user/2.png'),
        name: 'Bucky Barnes'
    },
    {
        id: 2,
        img: require('../../assets/images/user/3.png'),
        name: 'Sarah Loren'
    },
    {
        id: 3,
        img: require('../../assets/images/user/4.jpg'),
        name: 'Jason Borne'
    },
    {
        id: 4,
        img: require('../../assets/images/user/10.jpg'),
        name: 'Comeren Diaz'
    },
    {
        id: 5,
        img: require('../../assets/images/user/11.png'),
        name: 'Andew Jon'
    }
];

export const Draggabledata = {
    lanes: [
        {
            id: '1',
            cards: [
                {
                    id: '1',
                    title: "Basic Card",
                    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
                    draggable: false,
                },
            ]
        },
        {
            id: '2',
            cards: [
                {
                    id: '2',
                    title: "Flat Card",
                    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
                    draggable: false,
                },
            ]
        }
    ]
}
export const Draggabledata1 = {
    lanes: [
        {
            id: '3',
            cards: [
                {
                    id: '3',
                    title: "Withot shadow Card",
                    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
                    draggable: false,
                },
            ]
        },
        {
            id: '4',
            cards: [
                {
                    id: '4',
                    title: "Icon in Heading",
                    icon: <i class="icon-move me-2"></i>,
                    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
                    draggable: false,
                },
            ]
        },
        {
            id: '5',
            cards: [
                {
                    id: '5',
                    title: "Card sub Title",
                    span: 'Using the Card component, you can extend the default collapse behavior to create an accordion.',
                    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
                    draggable: false,
                },
            ]
        }
    ]
}