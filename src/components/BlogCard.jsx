import React from 'react';

const BlogCard = () => {
    return ( 
        <article class="flex bg-white hover:shadow-md">
    <div class="hidden sm:block sm:basis-56">
        <img
        alt="Guitar"
        src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        class="aspect-square h-full w-full object-cover"
        />
    </div>

    <div class="flex flex-1 flex-col justify-between">
        <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
                <h3 class="font-bold uppercase text-gray-900">
                Healing through music; the impact of music therapy on mental health
                </h3>
            </a>

            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor massa erat aliquam lectus. Duis duis id nibh sem morbi leo eget egestas eget. Purus at tristique elementum commodo odio. Velit lacus, a, eros, suspendisse sit ipsum quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor massa erat aliquam lectus. Duis duis id nibh sem morbi leo eget egestas eget. <a href="#" className='text-primary-50'>Read more.....</a>
            </p>

            <div className='flex gap-2 mt-4'>
                <a href="#" className=''>Edit</a>
                <a href="#" className='text-error'>Delete</a>
            </div>
        </div>
    </div>
        </article> 
     );
}
 
export default BlogCard;