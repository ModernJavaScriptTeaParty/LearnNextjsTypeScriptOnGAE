import Head from 'next/head'
// サイトに関する情報
import {siteMeta } from 'lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocation, siteType, siteIcon } = siteMeta
let desc : string

type Props = {
    pageTitle: string
    pageDesc: string
}
export default function Meta( { pageTitle , pageDesc }: Props ) {
    //ページのタイトル
    const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
    //ページの説明
    if (pageDesc == '' ) {
        desc = siteDesc
    } else {
        desc = pageDesc
    }
    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />

            <meta name="description" content={desc} />
            <meta property='og:description' content={desc} />
        </Head>
    )
}