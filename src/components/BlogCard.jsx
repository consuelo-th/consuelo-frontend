import React, {useEffect} from 'react';
import { getOneBlog } from '../services/blog';


const BlogCard = ({id, title, body, image, onDelete}) => {
    return ( 
        <article className="flex bg-white hover:shadow-md">
            <div className="hidden sm:block sm:basis-56">
                <img
                alt="Guitar"
                src={image}
                className="aspect-square h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                        <h3 className="font-bold uppercase text-gray-900">
                            {title}
                        </h3>
                    </a>

                    <p  className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                        {body.slice(0, 400)} <a href={`/dashboard/blog/${id}`} className='text-primary-50'>Read more.....</a>
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