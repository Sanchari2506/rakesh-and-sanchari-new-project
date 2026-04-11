import React from "react";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function SEO({ title, description, image, url }) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="LNPR Capital" />

      {/* Twitter (helps sometimes) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
