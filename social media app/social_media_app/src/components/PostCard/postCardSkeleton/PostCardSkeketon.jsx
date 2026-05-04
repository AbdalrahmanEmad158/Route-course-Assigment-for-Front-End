import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Card } from 'flowbite-react';

export default function PostCardSkeleton() {
  return (
    <Card className="w-full my-4">
      {/* Header Section: User Info and Delete Button */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Circular Profile Image Skeleton */}
          <Skeleton circle width={40} height={40} />
          
          <div className="flex flex-col">
            {/* User Name and Date Skeletons */}
            <Skeleton width={100} height={15} />
            <Skeleton width={60} height={12} />
          </div>
        </div>
        
        {/* Delete Button Skeleton */}
        <Skeleton width={80} height={40} borderRadius={8} />
      </div>

      {/* Post Body Text Skeleton */}
      <div className="my-2">
        <Skeleton count={2} />
      </div>

      {/* Post Main Image Skeleton */}
      <Skeleton height={300} className="w-full" />

      {/* Footer Icons Section */}
      <div className="flex justify-between mt-4">
        <Skeleton circle width={40} height={40} />
        <Skeleton circle width={40} height={40} />
        <Skeleton circle width={40} height={40} />
      </div>
    </Card>
  );
}