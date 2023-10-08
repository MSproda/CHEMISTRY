import Head from 'next/head'

type LayoutProps = {
    children: React.ReactNode,
    title: string
    ctx: string
}

const PageLayout = ({ children, title, ctx }: LayoutProps) => {

    return <>
        <Head>
            <title>{title}</title>
            <meta name='keywords' content={ctx} />
            <link rel="shortcut icon" href="/favicon.svg" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta charSet='utf-8' />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
        </Head>

        <main>
            {children}
        </main>
    </>
}

export default PageLayout