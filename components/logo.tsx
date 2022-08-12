import Link from 'next/link'
import sytles from 'styles/logo.module.css'

export default function Logo( {boxOn = false}) {
    return ( 
        <Link href="/">
          <a className={boxOn ? sytles.box : sytles.basic } >CUBE</a>
        </Link>
    )
}