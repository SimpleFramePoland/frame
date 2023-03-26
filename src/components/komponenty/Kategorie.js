import React from 'react';
import { getAllCategories, categoryPathBySlug } from 'lib/categories';
import Link from 'next/link';

export async function getStaticProps() {
 
    const { categories } = await getAllCategories();
    
    return {
       
      props: {
        categories,
      },
    
    };
  }


  
export default function Categories({ categories }) {
    
  if (!categories) {
    return <div>Loading...</div>;
  }

  return (

    <ul className="">
    {categories.map((category) => {
      return (
        <li key={category.slug}>
          <Link href={categoryPathBySlug(category.slug)}>
            {category.name}
          </Link>
        </li>
      );
    })}
  </ul>
  );
}


