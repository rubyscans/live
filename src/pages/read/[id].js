import { NextSeo } from 'next-seo';
import MiniCard from "@/components/Card/Mini"
import { useEffect, useState } from "react";
import MangaCard from "@/components/Card/MangaCard";
import Tippy from '@tippyjs/react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import moment from 'moment/moment';
import ScrollToTopButton from '@/components/ScroolTopButton';

export default function Home() {

    return (
        <>
            <NextSeo title={"Rebirth of the Urban Immortal Cultivator"} />
            <div class="flex flex-col space-y-8">
                <img class="max-w-full h-auto" src="https://www.kissmanga.info/storage/manga_covers/rebirth-of-the-urban-immortal-cultivator.webp" alt="Image 1" />
                <img class="max-w-full h-auto" src="https://www.kissmanga.info/storage/manga_covers/rebirth-of-the-urban-immortal-cultivator.webp" alt="Image 2" />
                <img class="max-w-full h-auto" src="https://www.kissmanga.info/storage/manga_covers/rebirth-of-the-urban-immortal-cultivator.webp" alt="Image 3" />
                <img class="max-w-full h-auto" src="https://www.kissmanga.info/storage/manga_covers/rebirth-of-the-urban-immortal-cultivator.webp" alt="Image 4" />
            </div>
            <ScrollToTopButton />

        </>
    )
}