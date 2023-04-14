import LayoutComponent from '@/components/layout/Layout'
import MyPostCard from '@/components/post/myPostCard'
import usePost from '@/swr/post'

import { Post } from '@/types/types'

import React from 'react'




const Posts = () => {


  const { data } = usePost()

  return (
    <LayoutComponent>
      <section className='flex gap-4 w-full flex-wrap p-2'>
        {
          data?.map((post: Post) => {
            return (
              <MyPostCard
                key={post.id}
                comments={post.comments}
                content={post.content}
                archived={post.archived}
                createAt={post.createAt}
                role={post.role}
              />
            )
          })
        }
      </section>

    </LayoutComponent>
  )
}

export default Posts