import React from "react";
import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/images/icon.png" type="image/png"></link>

      <title>Dilamar - Online Wedding Invitation</title>
      <meta name="title" content="Dilamar - Online Wedding Invitation" />
      <meta
        name="description"
        content="Buat undangan pernikahanmu secara online agar bisa menjangkau teman-temanmu yang jauh. Mereka juga bisa berinteraksi dengan kamu melalui website."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dilamar.vercel.app/" />
      <meta property="og:title" content="Dilamar - Online Wedding Invitation" />
      <meta
        property="og:description"
        content="Buat undangan pernikahanmu secara online agar bisa menjangkau teman-temanmu yang jauh. Mereka juga bisa berinteraksi dengan kamu melalui website."
      />
      <meta property="og:image" content="/images/dilamar.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://dilamar.vercel.app/" />
      <meta
        property="twitter:title"
        content="Dilamar - Online Wedding Invitation"
      />
      <meta
        property="twitter:description"
        content="Buat undangan pernikahanmu secara online agar bisa menjangkau teman-temanmu yang jauh. Mereka juga bisa berinteraksi dengan kamu melalui website."
      />
      <meta property="twitter:image" content="/images/dilamar.png"></meta>
    </Head>
  );
};

export default CustomHead;
