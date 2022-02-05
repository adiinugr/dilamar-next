import React from "react";
import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/images/icon.png" type="image/png"></link>

      <title>KataNikah - Online Wedding Invitation</title>
      <meta name="title" content="KataNikah - Online Wedding Invitation" />
      <meta
        name="description"
        content="Buat undangan pernikahanmu secara online agar bisa menjangkau teman-temanmu yang jauh. Mereka juga bisa berinteraksi dengan kamu melalui website."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://katanikah.com" />
      <meta
        property="og:title"
        content="KataNikah - Online Wedding Invitation"
      />
      <meta
        property="og:description"
        content="Buat undangan pernikahanmu secara online agar bisa menjangkau teman-temanmu yang jauh. Mereka juga bisa berinteraksi dengan kamu melalui website."
      />
      <meta property="og:image" content="/images/meta-image.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://katanikah.com" />
      <meta
        property="twitter:title"
        content="KataNikah - Online Wedding Invitation"
      />
      <meta
        property="twitter:description"
        content="Buat undangan pernikahanmu secara online agar bisa menjangkau teman-temanmu yang jauh. Mereka juga bisa berinteraksi dengan kamu melalui website."
      />
      <meta property="twitter:image" content="/images/meta-image.jpg"></meta>
    </Head>
  );
};

export default CustomHead;
