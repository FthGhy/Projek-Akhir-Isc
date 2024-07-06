import WisataMenu from "../Components/WisataMenu";
import Nav from "../Components/Nav";

export default function wisata() {
  return (
    <>
        <Nav />
        <div className="wisata px-10 ">
            <WisataMenu/>
        </div>
    </>
  )
}
