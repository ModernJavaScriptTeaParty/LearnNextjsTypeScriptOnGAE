import Head from 'next/head'

type Props = {
    pageTitle: string;
}
export default function Meta( { pageTitle }: Props ) {
    return (
        <Head>
            <title>{pageTitle}</title>
            <meta property="og:title" content={pageTitle} />
        </Head>
    )

}