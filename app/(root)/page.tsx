"use client";

import PodcastCard from '@/components/PodcastCard';
import { podcastData } from '@/constants';
import { title } from 'process';
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";


const Home = () => {
  //const tasks = useQuery(api.tasks.get);
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);
  return (
    
    <div className='mt-9 flex flex-col gap-9 md:overflow-hidden'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Trending Podcast</h1>
        {/* delete this div later after making it fully dynamic */}
        <div className='podcast_grid'>
          {podcastData.map(({
            id,
            title,
            description,
            imgURL,
          }) =>(

            <PodcastCard 
            key={id}
            imgUrl={imgURL}
            title={title}
            description={description}
            podcastId={id}
            />
            
          ))}
        </div>

        {/* dynamic */}
        <div className='podcast_grid'>
          {trendingPodcasts?.map(({
            _id,
            podcastTitle,
            podcastDescription,
            imageUrl,
          }) =>(

            <PodcastCard 
            key={_id}
            imgUrl={imageUrl}
            title={podcastTitle}
            description={podcastDescription}
            podcastId={id}
            />
            
          ))}
        </div>
      </section>
    </div>
    
  )
}

export default Home;