import LayoutComponent from "@/components/layout/Layout"
import useCurrent from "@/swr/current"


export default function Home() {

  const data = useCurrent()

  console.log(data)
  return (
    <LayoutComponent>
      
        hi
     
    </LayoutComponent>
  )
}
