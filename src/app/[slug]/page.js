"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import NavbarComponent from "../components/navbarComponent";
import Link from "next/link";

const PhotoPage = ({ params }) => {
  const { slug } = params;
  const [photo, setPhoto] = useState(null);
  const [images, setImages] = useState([]);
  const [loadedImageIds, setLoadedImageIds] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const IMAGES_PER_PAGE = 2; // Number of images to load per page

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const query = `*[_type == "images" && slug.current == "${slug}"] {
          _id,
          Title,
          Description,
          "imageUrl": image.asset->url,
          slug,
          dateUploaded,
        }`;

        const result = await fetch(
          `${
            process.env.NEXT_PUBLIC_SANITY_API_URL
          }/v2022-03-07/data/query/production?query=${encodeURIComponent(
            query
          )}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,
            },
          }
        );

        if (!result.ok) throw new Error("Failed to fetch photo");

        const data = await result.json();
        setPhoto(data.result[0] || null);
      } catch (error) {
        console.error("Error fetching photo:", error);
        setPhoto(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPhoto();
  }, [slug]);

  // Fetch images based on the current page
  const fetchImages = async (page = 0) => {
    try {
      setIsLoadingMore(true);
      const start = page * IMAGES_PER_PAGE;
      const end = start + IMAGES_PER_PAGE;

      const query = `*[_type == "images"] | order(dateUploaded desc) [${start}...${end}] {
        _id,
        Title,
        Description,
        "imageUrl": image.asset->url,
        slug,
        dateUploaded,
      }`;

      const result = await fetch(
        `${
          process.env.NEXT_PUBLIC_SANITY_API_URL
        }/v2022-03-07/data/query/production?query=${encodeURIComponent(query)}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,
          },
        }
      );

      if (!result.ok) throw new Error("Failed to fetch images");

      const data = await result.json();

      // Filter out duplicates
      const newImages = data.result.filter(
        (image) => !loadedImageIds.has(image._id)
      );

      // Update the loadedImageIds set to include new images
      setLoadedImageIds((prevIds) => {
        const updatedIds = new Set(prevIds);
        newImages.forEach((image) => updatedIds.add(image._id));
        return updatedIds;
      });

      // Add new unique images to the state
      setImages((prevImages) => [...prevImages, ...newImages]);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
      setIsLoadingMore(false);
    }
  };

  // Initial image load
  useEffect(() => {
    fetchImages();
  }, []);

  // Infinite scroll - load more images when reaching the bottom
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 500 // Trigger 500px before the bottom
      ) {
        if (!isLoadingMore) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoadingMore]);

  // Load more images when the page changes
  useEffect(() => {
    if (page > 0) {
      fetchImages(page);
    }
  }, [page]);

  if (loading) {
    return (
      <div className="container">
      <NavbarComponent />
      <main className="p-6 container">
        <div className="min-w-full h-screen flex items-center justify-center">
          <p>wizmatik . . .</p>
        </div>
      </main>
    </div>
    );
  }

  return (
    <div className="container">
      <NavbarComponent />
      <main className="p-6 container">
        <section className="hero-section pt-[calc(5rem_+_1vw)] pb-2 container border-b-2 border-black">
          {photo && (
            <>
              <h1 className="text-center text-[calc(3rem_+_1vw)] leading-[calc(3rem_+_1vw)] font-medium">
                {`${photo.Title}, ${photo.Description}, `}
                <br />
                {`${new Date(photo.dateUploaded).getFullYear()} © wizmatik`}
              </h1>
              <figure className="min-w-full h-auto py-8 flex items-center justify-center">
                <Image
                  className="min-w-[50%] h-auto rounded-sm"
                  src={photo.imageUrl}
                  alt={photo.Description}
                  width={500}
                  height={300}
                />
              </figure>
            </>
          )}
        </section>
        <section className="gallery-section container">
          <div className="grid grid-cols-2 gap-4 py-6 lg:grid-cols-3">
            {images.map(({ slug, imageUrl, Title }, index) => (
              <Link
                href={`/${slug.current}`}
                key={index}
                className="min-w-full h-auto flex items-start justify-center"
              >
                <Image
                  loading="lazy"
                  className="min-w-[50%] h-full rounded-sm object-cover"
                  src={imageUrl}
                  alt={Title}
                  width={850}
                  height={500}
                />
              </Link>
            ))}
          </div>
          {isLoadingMore && (
            <div className="flex justify-center py-6">
              <p>Loading more images...</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default PhotoPage;
