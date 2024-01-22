import { Home, Airplay, Box, FolderPlus, Command, Cloud, BarChart, Users, ShoppingBag, List, Mail, MessageCircle, GitPullRequest, Monitor, Heart, Clock, Zap, CheckSquare, Calendar, Image, HelpCircle, Radio, Map, Edit, Sunrise, Package, Sliders, Layout, Server, Database, Search, File, Layers, UserCheck, Video, DollarSign , Activity, Gift, Briefcase, User, Settings} from 'react-feather';

export const MENUITEMS = [
    // {
    //     menutitle: 'General',
    //     menucontent: 'Dashboards,Widgets',
    //     Items: [
    //         { path: `${process.env.PUBLIC_URL}/dashboard/default`, icon: Monitor, title: 'Dashboard Manager', bookmark: true, type: 'link' },
    //         {
    //             title: 'Dashboards', icon: Home, badge: 'true', type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Default', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, title: 'Ecommerce', type: 'link' },
    //             ]
    //         },
    //         {
    //             title: 'Widgets', path: `${process.env.PUBLIC_URL}/widgets/general`, icon: Airplay, bookmark: true, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/widgets/general`, title: 'General', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/widgets/chart`, title: 'Chart', type: 'link' },
    //             ]
    //         },
    //         {
    //             title: 'Page layout', icon: Layout, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/page-layout/footer-light`, title: 'Footer Light', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/page-layout/footer-dark`, title: 'Footer Dark', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/page-layout/footer-fixed`, title: 'Footer Fixed', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
    {
        menutitle: 'Applications',
        Items: [
            {
                title: 'Dashboard', icon: Monitor, bookmark: true,  path: `${process.env.PUBLIC_URL}//dashboard/default`, type: 'link',
            },
            {
                title: 'User', icon: User, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/users`, icon: User, type: 'link', title: 'User List' },
                    { path: `${process.env.PUBLIC_URL}/user/add-edit`, type: 'link', title: 'Add New' }
                ]
            },
            {
                title: 'Role', icon: Layers, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/roles`, type: 'link', title: 'Role List' },
                    { path: `${process.env.PUBLIC_URL}/role/add-edit`, type: 'link', title: 'Role New' }
                ]
            },
            {
                title: 'Event', icon: Calendar, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/events`, type: 'link', title: 'Event List' },
                    { path: `${process.env.PUBLIC_URL}/event/add-edit`, type: 'link', title: 'Add Event' }
                ]
            },
            {
                title: 'Service', icon: Server, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/services`, type: 'link', title: 'Service List' },
                    { path: `${process.env.PUBLIC_URL}/service/add-edit`, type: 'link', title: 'Add Service' }
                ]
            },
            {
                title: 'Live Consultation', icon: Video, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/live-consultations`, type: 'link', title: 'Consultation List' },
                    { path: `${process.env.PUBLIC_URL}/live-consultation/add-edit`, type: 'link', title: 'Add Consultation' }
                ]
            },
            {
                title: 'Notification', icon: MessageCircle, active: false,  path: `${process.env.PUBLIC_URL}/notifications`, type: 'link',
            },
            {
                title: 'Transaction', icon: DollarSign, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/transactions`, type: 'link', title: 'Transaction List' },
                    // { path: `${process.env.PUBLIC_URL}/transaction/add-edit`, type: 'link', title: 'Offer Transaction' }
                ]
            },
            {
                title: 'User Tracking', icon: Activity, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/user/payments`, type: 'link', title: 'User Payment List' },
                    { path: `${process.env.PUBLIC_URL}/user/settings`, type: 'link', title: 'User Setting List' }
                ]
            },
            {
                title: 'Offer', icon: Gift, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/offers`, type: 'link', title: 'Offer List' },
                    { path: `${process.env.PUBLIC_URL}/offer/add-edit`, type: 'link', title: 'Add Offer' }
                ]
            },
            {
                title: 'Plan', icon: Briefcase, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/plans`, type: 'link', title: 'Plan List' },
                    { path: `${process.env.PUBLIC_URL}/plan/add-edit`, type: 'link', title: 'Add Plan' }
                ]
            },
            {
                title: 'Support', icon: Users, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/supports`, type: 'link', title: 'Support List' },
                    { path: `${process.env.PUBLIC_URL}/support/add-edit`, type: 'link', title: 'Add Support' }
                ]
            },
            {
                title: 'Settings', icon: Settings, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/settings`, type: 'link', title: 'Web Setting' },
                    { path: `${process.env.PUBLIC_URL}/setting/email`, type: 'link', title: 'Email  Setting' },
                    { path: `${process.env.PUBLIC_URL}/setting/payment`, type: 'link', title: 'Payment Setting' },
                    { path: `${process.env.PUBLIC_URL}/setting/fcm`, type: 'link', title: 'Fcm Setting' },
                    { path: `${process.env.PUBLIC_URL}/setting/page`, type: 'link', title: 'Page Setting' },
                ]
            },
        ]
    },
    // {
    //     menutitle: 'Applications',
    //     Items: [
    //         {
    //             title: 'Project', icon: Box, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/project/project-list`, type: 'link', title: 'Project List' },
    //                 { path: `${process.env.PUBLIC_URL}/app/project/new-project`, type: 'link', title: 'Create New' }
    //             ]
    //         },
    //         { path: `${process.env.PUBLIC_URL}/app/file-manager`, icon: GitPullRequest, title: 'File Manager', bookmark: true, type: 'link' },
    //         {
    //             title: 'Ecommerce', icon: ShoppingBag, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/product`, title: 'Product', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/product-page/1`, title: 'Product Page', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/add-product`, title: 'Add Product', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/product-list`, title: 'Product List', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/payment-details`, title: 'Payment Detail', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/orderhistory`, title: 'Order History', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/invoice`, title: 'Invoice', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/cart`, title: 'Cart', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/wishlist`, title: 'Wishlist', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/checkout`, title: 'Checkout', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/pricing`, title: 'Pricing', type: 'link' },
    //             ]
    //         },
    //         {
    //             title: 'Email', icon: Mail, type: 'sub', children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/email/mailbox`, type: 'link', title: 'Mail Box' },
    //                 { path: `${process.env.PUBLIC_URL}/app/email/readmail`, type: 'link', title: 'Read Mail' },
    //                 { path: `${process.env.PUBLIC_URL}/app/email/compose`, type: 'link', title: 'Compose' },
    //             ]
    //         },
    //         {
    //             title: 'Chat', path: `${process.env.PUBLIC_URL}/app/chat-app`, bookmark: true, icon: MessageCircle, type: 'sub', children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/chat-app`, type: 'link', title: 'Chat-app' },
    //                 { path: `${process.env.PUBLIC_URL}/app/chat-video-app`, type: 'link', title: 'Chat-video-app' }
    //             ]
    //         },
    //         {
    //             title: 'Users', icon: Users, path: `${process.env.PUBLIC_URL}/app/users/userProfile`, type: 'sub', bookmark: true, active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/users/userProfile`, type: 'link', title: 'Users Profile ' },
    //                 { path: `${process.env.PUBLIC_URL}/app/users/userEdit`, type: 'link', title: 'Users Edit' },
    //                 { path: `${process.env.PUBLIC_URL}/app/users/userCards`, type: 'link', title: 'Users Cards' },
    //             ]
    //         },
    //         { path: `${process.env.PUBLIC_URL}/app/bookmark`, icon: Heart, type: 'link', title: 'Bookmarks' },
    //         { title: 'Contact', path: `${process.env.PUBLIC_URL}/app/contact`, icon: List, type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/app/task`, icon: CheckSquare, type: 'link', title: 'Tasks' },
    //         {
    //             title: 'Calender', icon: Calendar, type: 'sub', path: `${process.env.PUBLIC_URL}/app/calendar/basic-calendar`, bookmark: true, active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/calendar/basic-calendar`, icon: Calendar, type: 'link', title: 'Calender' },
    //                 { path: `${process.env.PUBLIC_URL}/app/calendar/draggable-calendar`, type: 'link', title: 'Draggable' },
    //             ]
    //         },
    //         { path: `${process.env.PUBLIC_URL}/app/social-app`, bookmark: true, icon: Zap, type: 'link', title: 'Social App' },
    //         { title: 'To-Do', icon: Clock, type: 'link', path: `${process.env.PUBLIC_URL}/app/todo`, bookmark: true },
    //         { path: `${process.env.PUBLIC_URL}/app/search-result`, icon: Search, type: 'link', title: 'Seach Result' },
    //     ]
    // },
    // {
    //     menutitle: 'Forms & Table',
    //     Items: [
    //         {
    //             title: ' Forms ', icon: Sliders, type: 'sub', children: [
    //                 {
    //                     title: ' Forms Controls', icon: Sliders, type: 'sub', children: [
    //                         { title: 'Form Validation', type: 'link', path: `${process.env.PUBLIC_URL}/forms/formValidation` },
    //                         { title: 'Basic Input', type: 'link', path: `${process.env.PUBLIC_URL}/forms/baseInput` },
    //                         { title: 'Checkbox & Radio', type: 'link', path: `${process.env.PUBLIC_URL}/forms/radio-checkbox` },
    //                         { title: 'Input Groups', type: 'link', path: `${process.env.PUBLIC_URL}/forms/inputGroup` },
    //                         { title: 'Mega Option', type: 'link', path: `${process.env.PUBLIC_URL}/forms/megaOptions` },
    //                     ]
    //                 },
    //                 {
    //                     title: 'Form Widgets', icon: Package, type: 'sub', children: [
    //                         { title: 'Datepicker', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/datepicker` },
    //                         { title: 'Typeahead', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/typeahead` },
    //                         { title: 'Date Time Picker', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/datetimepicker` },
    //                         { title: 'Date Rangepicker', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/rangepicker` },
    //                         { title: 'TouchSpin', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/touchspin` },
    //                         { title: 'Select 2', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/select2` },
    //                         { title: 'Switch', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/switch` },
    //                         { title: 'ClipBoard', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/clipBoard`, bookmark: true, },
    //                     ]
    //                 },
    //                 {
    //                     title: 'Form Layout', icon: Layout, type: 'sub', children: [
    //                         { path: `${process.env.PUBLIC_URL}/form-layout/formDefault`, title: 'Form Default', type: 'link' },
    //                         { path: `${process.env.PUBLIC_URL}/form-layout/formWizard1`, title: 'Form Wizard-1', type: 'link' },
    //                         { path: `${process.env.PUBLIC_URL}/form-layout/formWizard2`, title: 'Form Wizard-2', type: 'link' },
    //                         { path: `${process.env.PUBLIC_URL}/form-layout/formWizard3`, title: 'Form Wizard-3', type: 'link' }
    //                     ]
    //                 }
    //             ]
    //         },
    //         {
    //             title: ' Tables ', icon: Server, type: 'sub', children: [
    //                 {
    //                     title: 'Bootstrap Table ', path: `${process.env.PUBLIC_URL}/table/basic`, icon: Server, type: 'link'
    //                 },
    //                 {
    //                     title: 'Data Tables', icon: Database, type: 'link', path: `${process.env.PUBLIC_URL}/table/data-table`
    //                 },
    //             ]
    //         }

    //     ]
    // },
    // {
    //     menutitle: 'Components',
    //     Items: [
    //         {
    //             title: 'Ui Kits', icon: Box, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/typograph`, type: 'link', title: 'Typography' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/avatars`, type: 'link', title: 'Avatars' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/helper-classes`, type: 'link', title: 'Helper Classes' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/grid`, type: 'link', title: 'Grid' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/tag-pills`, type: 'link', title: 'Tag & Pills' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/progress`, type: 'link', title: 'Progress' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/modal`, type: 'link', title: 'Modal' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/alert`, type: 'link', title: 'Alert' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/popover`, type: 'link', title: 'Popover' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/tooltip`, type: 'link', title: 'Tooltip' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/spinners`, type: 'link', title: 'Spinners' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/dropdown`, type: 'link', title: 'Dropdown' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/accordion`, type: 'link', title: 'Accordion' },
    //                 {
    //                     type: 'sub', title: 'Tabs', children: [
    //                         { path: `${process.env.PUBLIC_URL}/ui-kits/tab-bootstrap`, type: 'link', title: 'Tab Bootstrap' },
    //                         { path: `${process.env.PUBLIC_URL}/ui-kits/line-tabs`, type: 'link', title: 'Line Tabs' }
    //                     ]
    //                 },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/shadow`, type: 'link', title: 'Shadow' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/lists`, type: 'link', title: 'Lists' }
    //             ]
    //         },
    //         {
    //             title: 'Bonus Ui', icon: FolderPlus, type: 'sub', badge1: true, active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/scrollable`, title: 'Scrollable ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/tree-view`, title: 'Tree View ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/bootstrap-notify`, title: 'Bootstrap Notify ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/rating`, title: 'Rating', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/dropzone`, title: 'Dropzone', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/tour`, title: 'Tour ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/sweet-alert`, title: 'SweetAlert ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/carousel`, title: 'Owl Carousel', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/ribbons`, title: 'Ribbons', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/pagination`, title: 'Pagination', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/breadcrumb`, title: 'Breadcrumb ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/rangeSlider`, title: 'Range Slider ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/imageCropper`, title: 'Image Cropper ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/stickyNotes`, title: 'Sticky ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/card/basicCards`, title: 'Basic Card ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/card/creativeCards`, title: 'Creative Card ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/card/tabCard`, title: 'Tabbed Card ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/card/draggingCards`, title: 'Draggable Card', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/timelines/timeline`, title: 'Timeline', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/dragNDropComp`, title: 'Drag and Drop ', type: 'link' }
    //             ]
    //         },
    //         {
    //             title: 'Icons', icon: Command, path: `${process.env.PUBLIC_URL}/icons/flagIcons`, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/icons/flagIcons`, title: 'Flag Icon', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/icons/fontAwsomeIcon`, title: 'Fontawesome Icon ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/icons/icoIcons`, title: 'Ico Icon ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/icons/themifyIcons`, title: 'Themify Icon ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/icons/featherIcons`, title: 'Feather Icon ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/icons/weatherIcons`, title: 'Whether Icon ', type: 'link' },
    //             ]
    //         },
    //         {

    //             title: 'Buttons', icon: Cloud, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/buttons/default-btn`, title: 'Default Style ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/buttons/groupBtn`, title: 'Button Group', type: 'link' },
    //             ]
    //         },
    //         {
    //             title: 'Charts', icon: BarChart, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/charts/apexCharts`, type: 'link', title: 'Apex Chart' },
    //                 { path: `${process.env.PUBLIC_URL}/charts/googleChart`, type: 'link', title: 'Google Chart' },
    //                 { path: `${process.env.PUBLIC_URL}/charts/chartJs`, type: 'link', title: 'Chartjs Chart' }

    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Pages',
    //     Items: [
    //         {
    //             title: 'Sample Page', icon: File, type: 'link', path: `${process.env.PUBLIC_URL}/pages/sample-page`
    //         },
    //         {
    //             title: 'Others', icon: Layers, type: 'sub', children: [
    //                 {
    //                     title: 'Error Pages', type: 'sub', children: [
    //                         { title: 'Error Page 1', type: 'link', path: `${process.env.PUBLIC_URL}/pages/error/error-page1` },
    //                         { title: 'Error Page 2', type: 'link', path: `${process.env.PUBLIC_URL}/pages/error/error-page2` },
    //                         { title: 'Error Page 3', type: 'link', path: `${process.env.PUBLIC_URL}/pages/error/error-page3` },
    //                         { title: 'Error Page 4', type: 'link', path: `${process.env.PUBLIC_URL}/pages/error/error-page4` },
    //                         { title: 'Error Page 5', type: 'link', path: `${process.env.PUBLIC_URL}/pages/error/error-page5` }
    //                     ]
    //                 },
    //                 {
    //                     title: 'Authentication', type: 'sub', children: [
    //                         { title: 'Login Simple', type: 'link', path: `${process.env.PUBLIC_URL}/pages/auth/login-simple` },
    //                         { title: 'Login with bg image', type: 'link', path: `${process.env.PUBLIC_URL}/pages/auth/login-bg-img` },
    //                         { title: 'Login with image two', type: 'link', path: `${process.env.PUBLIC_URL}/pages/auth/login-img` },
    //                         { title: 'Login with validation', type: 'link', path: `${process.env.PUBLIC_URL}/pages/auth/login-validation` },
    //                         { title: 'Login with tooltip', type: 'link', path: `${process.env.PUBLIC_URL}/pages/auth/login-tooltip` },
    //                         { title: 'Login with sweetalert', type: 'link', path: `${process.env.PUBLIC_URL}/pages/auth/login-sweetalert` },
    //                         { title: 'Register Simple', type: 'link', path: `${process.env.PUBLIC_URL}/pages/auth/register-simple` },
    //                         { title: 'Register with Bg Image', type: 'link', path: `${process.env.PUBLIC_URL}/pages/auth/register-bg-img` },
    //                         { title: 'Register with Bg Video', type: 'link', path: `${process.env.PUBLIC_URL}/pages/auth/sign-up-two` },
    //                         { title: 'Unloack User', type: 'link', path: `${process.env.PUBLIC_URL}/pages/auth/unlock-user` },
    //                         { title: 'Forget Password', type: 'link', path: `${process.env.PUBLIC_URL}/pages/auth/forget-pwd` },
    //                         { title: 'Reset Password', type: 'link', path: `${process.env.PUBLIC_URL}/pages/auth/reset-pwd` },
    //                         { title: 'Maintenance', type: 'link', path: `${process.env.PUBLIC_URL}/pages/auth/maintenance` },

    //                     ]
    //                 },
    //                 {
    //                     title: 'Coming Soon', type: 'sub', children: [
    //                         { title: 'Coming Simple', type: 'link', path: `${process.env.PUBLIC_URL}/pages/comingsimple/comingsoon` },
    //                         { title: 'Coming with Bg Video', type: 'link', path: `${process.env.PUBLIC_URL}/pages/comingsimple/coming-bg-video` },
    //                         { title: 'Coming with bg Image', type: 'link', path: `${process.env.PUBLIC_URL}/pages/comingsimple/coming-bg-img` },
    //                     ]
    //                 }
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Miscellaneous',
    //     Items: [
    //         {
    //             title: 'Gallery', icon: Image, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/gallery/imageGallery`, title: 'Gallery Grid ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/gallery/imageWithDesc`, title: 'Gallery Grid  Desc ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/gallery/mesonryGallery`, title: 'Masonry Gallery', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/gallery/mesonryDesc`, title: 'Masonry With Desc', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/gallery/imageHover`, title: 'Hover Effect', type: 'link' }
    //             ]
    //         },
    //         {
    //             title: 'Blog', icon: Edit, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/blog/blogDetail`, title: 'Blog Details', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/blog/blogSingle`, title: 'Blog Single', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/blog/blogPost`, title: 'Add Post', type: 'link' },
    //             ]
    //         },
    //         { path: `${process.env.PUBLIC_URL}/app/faq`, icon: HelpCircle, type: 'link', active: false, title: 'FAQ' },
    //         {
    //             title: 'Job Search', icon: UserCheck, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/jobSearch/cardView`, title: 'Cards View', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/jobSearch/job-list`, title: 'List View', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/jobSearch/job-detail`, title: 'Job Details', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/jobSearch/job-apply`, title: 'Apply', type: 'link' }
    //             ]
    //         },
    //         {
    //             title: 'Learning', icon: Radio, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/learning/learning-list`, title: 'Learning List', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/learning/learning-detail`, title: 'Detailed Course', type: 'link' },
    //             ]
    //         },
    //         {
    //             title: 'Maps', icon: Map, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/map/googleMap`, type: 'link', title: 'Google Maps ' },
    //                 { path: `${process.env.PUBLIC_URL}/app/map/leaflet-map`, type: 'link', title: 'Leaflet Maps' },
    //             ]
    //         },
    //         {
    //             title: 'Editor', icon: Edit, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/editor/ckEditor`, type: 'link', title: 'CK  Editor' },
    //                 { path: `${process.env.PUBLIC_URL}/editor/mdeEditor`, type: 'link', title: 'MDE Editor' },
    //                 { path: `${process.env.PUBLIC_URL}/editor/ace-code-editor`, type: 'link', title: 'ACE code Editor ' },
    //             ]
    //         },

    //         {
    //             icon: Sunrise, type: 'sub', active: false, title: 'Knowledgebase', children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/knowledgebase`, title: 'Knowledgebase', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/knowledgebase-category`, title: 'Knowledgebase Category', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/knowledgebase-detail`, title: 'Knowledgebase Detail', type: 'link' }
    //             ]
    //         },
    //         { path: `${process.env.PUBLIC_URL}/app/support-ticket`, icon: Users, type: 'link', active: false, title: 'Support Ticket' },
    //     ]
    // },
];