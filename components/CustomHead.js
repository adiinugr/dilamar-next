import React from "react";
import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" type="image/x-icon" href="images/icon.ico" />

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
      <meta
        property="og:image"
        content="https://www.katanikah.com/images/meta-image.jpg"
      />

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
      <meta
        property="twitter:image"
        content="https://www.katanikah.com/images/meta-image.jpg"
      />
    </Head>
  );
};

export default CustomHead;
