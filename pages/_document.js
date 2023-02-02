import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='text-2xl text-secondary-200 font-normal -tracking-0.6 font-neufile bg-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
