import type { NextPage } from "next";
import Image from "next/future/image";
import Link from "next/link";

import { Header } from "../components/Header";
import { ImageList } from "../components/ImageList";
import { Page } from "../components/Page";

import { unsplashImages } from "../data/images";

const FixedImageSizePage: NextPage = () => {
  return (
    <Page>
      <Header />
      <ImageList>
        {unsplashImages.map((image, key) => {
          return (
            <div key={key}>
              <Image
                src={image.src}
                alt="Unsplash Image"
                className="rounded-md bg-gray-100 w-full"
                width={600}
                height={600}
                priority={key === 0}
              />
              <span className="block my-2 text-gray-400 text-sm hover:text-gray-700">
                View on <Link href={image.href}>Unsplash</Link>
              </span>
            </div>
          );
        })}
      </ImageList>
    </Page>
  );
};

export default FixedImageSizePage;
