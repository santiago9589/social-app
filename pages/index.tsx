import IconsComponent from "@/components/icons/iconsComponent"
import LayoutComponent from "@/components/layout/Layout"
import useCurrent from "@/swr/current"
import {RiContactsBook2Fill} from "react-icons/ri"
import {FaClipboardList} from "react-icons/fa"
import { useRouter } from "next/navigation"



export default function Home() {

  const { data } = useCurrent()

  const route = useRouter()

  
 
  return (
    <LayoutComponent>
      <section className="grid grid-cols-3 grid-rows-4 h-full">
        <header className="col-span-3 flex rows-span-1 justify-between items-center p-4">
          <h2 className="text-2xl capitalize font-semibold">{data?.user.name}</h2>
          <img src={data?.user.photo} className="rounded-full p-12 bg-gray-50 box-border" />
        </header>
        <section className="flex col-span-3 rows-span-4 items-center justify-between">
          <section>
            <h3 className="text-xl capitalize font-semibold">{data?.user.username}</h3>
            <h3 className="text-lg capitalize font-thin">{data?.user.email}</h3>
          </section>
          <section className="flex items-center gap-2">
            <IconsComponent classAdded={"text-lg"} handleClick={() => { route.push("/contacts") }} size={25} icon={RiContactsBook2Fill} name={data?.user?.contacts?.length} />
            <IconsComponent classAdded={"text-lg"} handleClick={() => { route.push("/post") }} size={25} icon={FaClipboardList} name={data?.user?.post?.length} />
          </section>
        </section>
        <footer className="flex gap-2 col-span-3 rows-span-5 ">
          <section className="text-justify ">
            <h4 className="text-center font-semibold uppercase">Hobbies</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a repellat cupiditate voluptates reiciendis tenetur nostrum dolores fugit odio ab? Eius quam ipsam blanditiis voluptatibus ducimus ipsa atque beatae totam.
          </section>
          <section className="text-justify">
            <h4 className="text-center font-semibold uppercase">About</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a repellat cupiditate voluptates reiciendis tenetur nostrum dolores fugit odio ab? Eius quam ipsam blanditiis voluptatibus ducimus ipsa atque beatae totam.
          </section>
          <section className="text-justify">
            <h4 className="text-center font-semibold uppercase">Something</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a repellat cupiditate voluptates reiciendis tenetur nostrum dolores fugit odio ab? Eius quam ipsam blanditiis voluptatibus ducimus ipsa atque beatae totam.
          </section>
        </footer>
      </section>
    </LayoutComponent>
  )
}
