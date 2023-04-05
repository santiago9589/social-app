import LayoutComponent from '@/components/layout/Layout'
import MyPostCard from '@/components/post/myPostCard'

import { Post } from '@/types/types'
import axios from 'axios'
import React from 'react'


interface props {
  data: Post[]
  error: string
}


export const getServerSideProps = async () => {

  try {

    const res = await axios.get("http://localhost:3000/api/post/all")

    const data = res.data

    return {
      props: {
        data,
        error: ""
      }
    }

  } catch (error: any) {

    return {
      props: {
        data: [],
        error
      }
    }


  }

}


const Posts = ({ data, error }: props) => {


  const datafaske = [{
    comments: [
      {
        createAt: new Date(),
        content: "fdfsd"
      },
      {
        createAt: new Date(),
        content: "fdfsd"
      }
    ],
    archived: false,
    createAt: new Date(),
    content: "sfsfsa"

  },
  {
    comments: [
      {
        createAt: new Date(),
        content: "fdfsd"
      },
      {
        createAt: new Date(),
        content: "fdfsd"
      }
    ],
    archived: true,
    createAt: new Date(),
    content: "sfsfsa"

  }, {
    comments: [
      {
        createAt: new Date(),
        content: "fdfsd"
      },
      {
        createAt: new Date(),
        content: "fdfsd"
      }
    ],
    archived: false,
    createAt: new Date(),
    content: "sfsfsa"

  },
  {
    comments: [
      {
        createAt: new Date(),
        content: "fdfsd"
      },
      {
        createAt: new Date(),
        content: "fdfsd"
      }
    ],
    archived: true,
    createAt: new Date(),
    content: "sfsfsa"

  }, {
    comments: [
      {
        createAt: new Date(),
        content: "fdfsd"
      },
      {
        createAt: new Date(),
        content: "fdfsd"
      }
    ],
    archived: false,
    createAt: new Date(),
    content: "sfsfsa"

  },
  {
    comments: [
      {
        createAt: new Date(),
        content: "fdfsd"
      },
      {
        createAt: new Date(),
        content: "fdfsd"
      }
    ],
    archived: true,
    createAt: new Date(),
    content: "sfsfsa"

  }, {
    comments: [
      {
        createAt: new Date(),
        content: "fdfsd"
      },
      {
        createAt: new Date(),
        content: "fdfsd"
      }
    ],
    archived: false,
    createAt: new Date(),
    content: "sfsfsa"

  },
  {
    comments: [
      {
        createAt: new Date(),
        content: "fdfsd"
      },
      {
        createAt: new Date(),
        content: "fdfsd"
      }
    ],
    archived: true,
    createAt: new Date(),
    content: "sfsfsa"

  }]

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