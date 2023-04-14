import IconsComponent from "@/components/icons/iconsComponent"
import LayoutComponent from "@/components/layout/Layout"
import useCurrent from "@/swr/current"
import { RiContactsBook2Fill } from "react-icons/ri"
import { FaClipboardList } from "react-icons/fa"
import { useRouter } from "next/navigation"



export default function Home() {

  const { data } = useCurrent()

  const route = useRouter()



  return (
    <LayoutComponent>
      <section className="grid grid-cols-3 grid-rows-4 h-full p-4 box-border">
        <header className="col-span-3 flex row-span-1 justify-between items-center p-4">
          <h2 className="text-2xl capitalize font-semibold">{data?.user?.name}</h2>
          <img src={data?.user?.photo} className="rounded-full p-12 bg-gray-50 box-border" />
        </header>
        <section className="flex col-span-3 row-span-1 items-center justify-between">
          <section>
            <h3 className="text-xl capitalize font-semibold">{data?.user?.username}</h3>
            <h3 className="text-lg capitalize font-thin">{data?.user?.email}</h3>
          </section>
          <section className="flex items-center gap-2">
            <IconsComponent classAdded={"text-lg"} handleClick={() => { route.push("/contacts") }} size={25} icon={RiContactsBook2Fill} name={data?.user?.contacts?.length} />
            <IconsComponent classAdded={"text-lg"} handleClick={() => { route.push("/post") }} size={25} icon={FaClipboardList} name={data?.user?.post?.length} />
          </section>
        </section>
        <footer className="flex gap-4 col-span-3 row-span-5 box-border ">
          {
            data?.user?.name && <>
              <section className="text-justify bg-slate-100 rounded-lg p-4 box-border">
                <h4 className="text-center font-semibold uppercase bg-green-100 p-2">hobbies</h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a repellat cupiditate voluptates reiciendis tenetur nostrum dolores fugit odio ab? Eius quam ipsam blanditiis voluptatibus ducimus ipsa atque beatae totam.
              </section>
              <section className="text-justify bg-slate-100 rounded-lg p-4 box-border">
                <h4 className="text-center font-semibold uppercase bg-green-100 p-2">about me</h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a repellat cupiditate voluptates reiciendis tenetur nostrum dolores fugit odio ab? Eius quam ipsam blanditiis voluptatibus ducimus ipsa atque beatae totam.
              </section>
              <section className="text-justify bg-slate-100 rounded-lg p-4 box-border">
                <h4 className="text-center font-semibold uppercase bg-green-100 p-2">something</h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a repellat cupiditate voluptates reiciendis tenetur nostrum dolores fugit odio ab? Eius quam ipsam blanditiis voluptatibus ducimus ipsa atque beatae totam.
              </section>
            </>
          }
        </footer>
      </section>
    </LayoutComponent>
  )
}
