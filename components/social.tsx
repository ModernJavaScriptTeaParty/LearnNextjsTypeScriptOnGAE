import { ReactNode } from 'react';
import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebookF,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'

type Props = {
    iconSize: ReactNode ;
}

export default function Social( { iconSize }: Props) {
    return ( 
        <ul className={styles.list} style={{['--icon-size' as any]: iconSize}}>
            <li>
                <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                    <span className="sr-only">Twitter</span>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <span className="sr-only">FaceBook</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="sr-only">GitHub</span>
                </a>
            </li>
        </ul>
    ) 
}