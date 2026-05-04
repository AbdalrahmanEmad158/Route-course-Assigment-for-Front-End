import { useQueries, useQuery } from '@tanstack/react-query'
import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { headerDataObj } from './../../components/helpers/headersObj';
import usePosts from '../../CustomHooks/usePosts';
import PostCard from './../../components/PostCard/PostCard';
import PostCardSkeleton from '../../components/PostCard/postCardSkeleton/PostCardSkeketon';

export default function Posts() {

  const {data ,isLoading, isFetched,isFetching,isError} = usePosts(['allPosts'],true ,"posts?limit=500&sort=-createdAt" )


  return (
    <div>
      <div className="container mx-auto">
      
      </div>
      {isLoading && <PostCardSkeleton></PostCardSkeleton>}
     {isFetched && data?.posts?.map((post)=> <PostCard post={post}/>)}
    </div>
  )
}
