import type { NextPage } from "next";
import Image from "next/future/image";
import Link from "next/link";

import { Header } from "../components/Header";
import { ImageList } from "../components/ImageList";
import { Page } from "../components/Page";

import { unsplashImages } from "../data/images";

const FillModePage: NextPage = () => {
  return (
    <Page>
      <Header />
      <ImageList>
        {unsplashImages.map((image, key) => {
          return (
            <div key={key}>
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={image.src}
                  alt="Unsplash Image"
                  className="object-cover rounded-md bg-gray-100"
                  fill={true}
                  priority={key === 0}
                />
              </div>
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

export default FillModePage;
