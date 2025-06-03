import Script from 'next/script'

const AW_ID = 'AW-17147509005'

export default function GoogleTagManager() {
  return (
    <>
      {/* Google Ads Tag */}
      <Script
        id="google-ads"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17147509005"
      />
      <Script
        id="google-ads-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${AW_ID}');
          `,
        }}
      />
    </>
  )
} 