import Head from 'next/head'
import Link from 'next/link'
import layout from '../../styles/templates/layout.module.scss'
import utils from '../../styles/utils.module.scss'

const name = 'Crea7dosSantos'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
    return (
        <div className={layout.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={layout.header}>
                {home ? (
                    <>
                        <img
                            src="/images/profile.jpg"
                            className={`${layout.headerHomeImage} ${utils.borderCircle}`}
                            alt={name}
                        />
                        <h1 className={utils.heading2Xl}>{name}</h1>
                    </>
                ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <img
                                        src="/images/profile.jpg"
                                        className={`${layout.headerImage} ${layout.borderCircle}`}
                                        alt={name}
                                    />
                                </a>
                            </Link>
                            <h2 className={utils.headingLg}>
                                <Link href="/">
                                    <a className={utils.colorInherit}>{name}</a>
                                </Link>
                            </h2>
                        </>
                    )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={layout.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}