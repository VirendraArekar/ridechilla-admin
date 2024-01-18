import React from 'react';
import { Articles, Knowledgebase, AskOurCommunity, Tutorials, HelpCenter, ContactUs, VideoTutorials, VictoriaWilson } from '../../Constant';
import { Edit, Globe, BookOpen, FileText, Youtube, MessageCircle, Mail, RotateCcw, DollarSign, Check, Link, Codepen } from 'react-feather';

export const ASKQUESData = [
    {
        icon: <Edit />,
        title: Tutorials
    },
    {
        icon: <Globe />,
        title: HelpCenter
    },
    {
        icon: <BookOpen />,
        title: Knowledgebase
    },
    {
        icon: <FileText />,
        title: Articles,
        class: 'badge badge-primary rounded-pill pull-right',
        val: '42'
    },
    {
        icon: <Youtube />,
        title: VideoTutorials,
        class: 'badge badge-primary rounded-pill pull-right',
        val: '642'
    },
    {
        icon: <MessageCircle />,
        title: AskOurCommunity
    },
    {
        icon: <Mail />,
        title: ContactUs
    },
];

export const LatestData = [
    {
        Iconclass: <RotateCcw className="font-primary" />,
        val: 'David Linner',
        title: 'requested money back for a double debit card charge',
        time: '10 minutes ago'
    },
    {
        Iconclass: <DollarSign className="font-primary" />,
        title: 'All sellers have received monthly payouts',
        time: '2 hours ago'
    },
    {
        Iconclass: <Link className="font-primary" />,
        name: 'User Christopher',
        val: 'Wallace',
        title: 'is on hold and awaiting for staff reply',
        time: '45 minutes ago'
    },
    {
        Iconclass: <Check className="font-primary" />,
        val: 'Victoria Wilson',
        name: 'Ticket #43683 has been closed by',
        time: 'Dec 7, 11:48'
    },
];

export const ArticeVideoData1 = [
    {
        IconClass: <Codepen className="m-r-30" />,
        title: 'Article Base Video',
        discription: 'The web is a very big place, and if you are the typical internet user.'
    },
    {
        IconClass: <FileText className="m-r-30" />,
        title: 'Knows your sources',
        discription: 'A book giving information on many subjects or on many aspects of one subject.'
    },
    {
        IconClass: <Youtube className="m-r-30" />,
        title: 'Sources credible/reliable',
        discription: 'simple demos of frequently asked questions about using the libraries and information resources.'
    },
];

export const ArticeVideoData2 = [
    {
        IconClass: <Youtube className="m-r-30" />,
        title: 'Validate website',
        discription: 'website is the process of ensuring that the pages on the website conform.'
    },
    {
        IconClass: <Codepen className="m-r-30" />,
        title: 'Tailwind Design',
        discription: 'Tailwind is so low-level, it never encourages you to design the same site twice.'
    },
    {
        IconClass: <FileText className="m-r-30" />,
        title: 'Knows your sources',
        discription: 'A book giving information on many subjects or on many aspects of one subject.'
    }
];

export const ArticeVideoData3 = [
    {
        IconClass: <FileText className="m-r-30" />,
        title: 'Sources Demos',
        discription: 'simple demos of frequently asked questions about using the libraries and information resources.'
    },
    {
        IconClass: <Youtube className="m-r-30" />,
        title: 'Validate Html',
        discription: 'website is the process of ensuring that the pages on the website conform.'
    },
    {
        IconClass: <Codepen className="m-r-30" />,
        title: 'Web Design',
        discription: 'Web is so high-level, it never encourages you to design the same site twice.'
    },

];