import Faq, { SupportFaq } from './Faq';


const RAFFLE_SORTING_TABS = [
    {title: "Newest", sorting: "createTime", status: "active"},
    {title: "Last Activity", sorting: "", status: "active"},
    {title: "Nearing Deadline", sorting: "-deadline", status: "active"},
]
const RAFFLE_STATUS_TABS = [
    {label: 'Active', value: 'active'},
    {label: 'Successful', value: 'succeed'},
    {label: 'Failed', value: 'failed'},
    {label: 'All Raffles', value: 'all'},
];
const PRIVATE_LINK = [
    {"link": 'https://github.com/ErgoRaffle', "title": "Github"},
    {"link": 'https://github.com/ErgoRaffle/raffle-documentation', "title": "Whitepaper"},
    {"link": 'https://beta.ergoraffle.com', "title": "Raffle Beta"},
];
const PUBLIC_LINK = [
    {"link": 'https://t.me/ergoplatform', "title": "Telegram"},
    {"link": 'https://twitter.com/ergoplatformorg', "title": "Twitter"},
    {"link": 'https://discord.gg/ahktsCT9TM', "title": "Discord"},
    {"link": 'https://www.ergoplatform.org/', "title": "Ergo Platform"},
    {"link": 'https://www.ergoforum.org/', "title": "Ergo Forum"},
];


const staticText = {
    faq: Faq,
    homeTabs: ['Newest', 'Last Activity', 'Nearing Deadline'],
    navigations: [
        {title: 'Home', link: '/'},
        {title: 'All Raffles', link: '/raffle/list'},
        {title: 'FAQ', link: '/faq'},
        {title: 'About/Contact', link: '/about'}
    ],
    privateLink: [
        {"link": 'https://github.com/ErgoRaffle', "title": "Github"},
        {"link": 'https://github.com/ErgoRaffle/raffle-documentation', "title": "Whitepaper"},
        {"link": 'https://beta.ergoraffle.com', "title": "Raffle Beta"},
    ],
    publicLink: [
        {"link": 'https://t.me/ergoplatform', "title": "Telegram"},
        {"link": 'https://twitter.com/ergoplatformorg', "title": "Twitter"},
        {"link": 'https://discord.gg/ahktsCT9TM', "title": "Discord"},
        {"link": 'https://www.ergoplatform.org/', "title": "Ergo Platform"},
        {"link": 'https://www.ergoforum.org/', "title": "Ergo Forum"},
    ],
    PAGE_SIZE: 12,
    ERG_SCALE: 1000000000,
    DAY_CONVERSION_SCALE: 720,
    FILE_SIZE_LIMITATION: 150000,
    UPLOAD_API_URL: 'https://ergoutilsupload.azurewebsites.net/ipfs/',
    FILE_URL_PREVIEW: 'https://cloudflare-ipfs.com/ipfs/',
    FILE_TO_SEND_PREFIX: 'ipfs://',
    winnerStateType: 'winner',
    charityStateType: 'charity',
    ticketStateType: 'ticket',
    descriptionLimit: 250,
    deadlineLimit: 262800,
    donationTickets: [5, 10, 20, 30]
}
const SHARE_INFO = [
    {title: "Telegram", share: (url) => (`https://t.me/share/url?url=${url}&text=Ergo Raffle`)},
    {title: "WhatsApp", share: (url) => (`whatsapp://send?text=${url}`)},
    {title: "Twitter", share: (url) => (`http://twitter.com/share?text=Ergo Raffle&url=${url}`)},
]
const HOUR_BLOCKS_COUNT = 30;
const DAY_BLOCK_COUNT = 720;
const MINUTE_BLOCK_COUNT = 0.5;
const FILE_SIZE_LIMITATION = 150000;
const UPLOAD_API_URL = 'https://ergoutilsupload.azurewebsites.net/ipfs/';
const FILE_URL_PREVIEW = 'https://cloudflare-ipfs.com/ipfs/';
const FILE_TO_SEND_PREFIX = 'ipfs://';
const TICKET_PRICES = [0.25, 0.5, 1, 3, 5];
const DEADLINE_LIMIT = 365 * DAY_BLOCK_COUNT;
const ERG_FACTOR = 1000000000;
const PAGE_SIZE = 12;
const DESCRIPTION_SIZE_LIMIT = 1000;
const TITLE_LENGTH = 70;
const DONATION_TICKET_COUNT = [5, 10, 20, 30];
const DASHBOARD_TABS = ['Refund Corrupted Payments','Ask For Help', 'FAQ and Problems'];
const PIN_KEY = "pin";
const IS_BETA = false;
const DEFAULT_SUPPORT_URL = "https://discord.gg/4CPBVyDt";
export default staticText;

export {
    Faq,
    SupportFaq,
    RAFFLE_SORTING_TABS,
    RAFFLE_STATUS_TABS,
    HOUR_BLOCKS_COUNT,
    DAY_BLOCK_COUNT,
    MINUTE_BLOCK_COUNT,
    FILE_SIZE_LIMITATION,
    UPLOAD_API_URL,
    FILE_URL_PREVIEW,
    FILE_TO_SEND_PREFIX,
    TICKET_PRICES,
    DEADLINE_LIMIT,
    ERG_FACTOR,
    PAGE_SIZE,
    DESCRIPTION_SIZE_LIMIT,
    DONATION_TICKET_COUNT,
    DASHBOARD_TABS,
    PIN_KEY,
    TITLE_LENGTH,
    IS_BETA,
    DEFAULT_SUPPORT_URL,
    SHARE_INFO
}
