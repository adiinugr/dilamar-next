import React from "react";
import Head from "next/head";

const InvitationHead = ({ title, description, link, imagePath }) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/images/icon.png" type="image/png"></link>

      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={link} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        itemProp="image"
        content={imagePath || "/suta-hanny/photo.jpeg"}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={link} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={imagePath || "/suta-hanny/photo.jpeg"}
      ></meta>
    </Head>
  );
};

export default InvitationHead;
