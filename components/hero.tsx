import type { ReactNode } from 'react'

type Props = {
    title: ReactNode;
    subtitle: ReactNode;
  }

export default function Hero( { title, subtitle}: Props) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}