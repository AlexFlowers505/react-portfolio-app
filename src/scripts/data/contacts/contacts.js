import { MdOutlineEmail as EmailIcon } from 'react-icons/md'
import { BsWhatsapp as WhatsappIcon} from 'react-icons/bs'
import { BsTelegram as TelegramIcon } from 'react-icons/bs'

export default [
    {
        name: 'Telegram',
        link: 'https://t.me/AlexanderFlowers',
        icon: TelegramIcon,
    },
    {
        name: 'WhatsApp',
        link: 'https://wa.me/+79312300887',
        icon: WhatsappIcon,
    },
    {
        name: 'Email',
        contactVal: 'allnewalex@yandex.com',
        link: 'mailto:allnewalex@yandex.com',
        icon: EmailIcon,
    },
]

export const emailJSCredentials = {
    serviceID: process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
    templateID: process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
    key: process.env.REACT_APP_EMAIL_JS_KEY,
  }