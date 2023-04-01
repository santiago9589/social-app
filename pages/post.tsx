import ContactCard from '@/components/contact/contactCard'
import LayoutComponent from '@/components/layout/Layout'
import MyPostCard from '@/components/post/myPostCard'
import useCurrent from '@/swr/current'
import { Post } from '@/types/types'
import React from 'react'


const Posts = () => {

  const { data } = useCurrent()

  console.log(data?.user)


  return (
    <LayoutComponent>
      {
        data?.user?.post.map((post: Post) => {
          return (
            <MyPostCard
              comments={post.comments}
              content={post.content}
              archived={post.archived}
              createAt={post.createAt}
            />
          )
        })
      }
    </LayoutComponent>
  )
}

export default Posts