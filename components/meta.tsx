import Head from 'next/head'
// サイトに関する情報
import {siteMeta } from 'lib/constants'
import { useRouter } from 'next/router'
const { siteTitle, siteDesc, siteUrl, siteLocation, siteType, siteIcon } = siteMeta

// 汎用OGR画像
import siteImg from 'images/ogp.jpg'

let desc : string

type Props = {
    pageTitle: string
    pageDesc: string
    pageImg?: any
    pageImgW?: any
    pageImgH?: any
}
export default function Meta( { pageTitle , pageDesc ,
                                pageImg = siteImg.src,
                                pageImgW = siteImg.width,
                                pageImgH = siteImg.height }: Props ) {
    //ページのタイトル
    const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
    //ページの説明
    if (pageDesc == '' ) {
        desc = siteDesc
    } else {
        desc = pageDesc
    }
    // ページのURL
    const router = useRouter()
    const url = `${siteUrl}${router.asPath}`

    const img = pageImg
    const imgW = pageImgW
    const imgH = pageImgH
    const imgUrl = img.startsWith('https') ? img : `${siteUrl}${img}`

    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />

            <meta name="description" content={desc} />
            <meta property='og:description' content={desc} />

            <link rel="canonical" href={url} />
            <meta property="og:url" content={url} />
            
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:type" content={siteType} />
            <meta property="og:location" content={siteLocation} />

            <link rel="icon" href={siteIcon} />
            <link rel="apple-touch-icon" href={siteIcon} />

            <meta property="og:image" content={imgUrl} />
            <meta property="og:image:width" content={imgW} />
            <meta property="og:image:height" content={imgH} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    )
}