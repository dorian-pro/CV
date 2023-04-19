import {GiSmartphone} from 'react-icons/gi'
import {MdOutlineMail} from 'react-icons/md'
import {FaGithub} from 'react-icons/fa'
import {IoCarSportOutline} from 'react-icons/io5'

export const CoordonneData = [
    {
        info: '07.69.71.99.83',
        icon: <GiSmartphone/>,
        class: 'phone',
        href: 'tel:07.69.71.99.83'
    },
    {
        info: 'pro.dorianm@gmail.com',
        icon: <MdOutlineMail/>,
        class: 'mail',
        href: 'mailto:pro.dorianm@gmail.com'
    },
    {
        info: 'https://github.com/dorian-pro',
        icon: <FaGithub/>,
        class: 'github',
        href: 'https://github.com/dorian-pro'
    },
    {
        info: 'permis B & C',
        icon: <IoCarSportOutline/>,
        class: 'permi'
    }
]