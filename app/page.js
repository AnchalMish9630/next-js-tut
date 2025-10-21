import Image from "next/image";
import Link from "next/link";

export default function Home() {
   console.log("JEl;o working..");
  return (
   <div>
    Welcome to next
    <Link href="/about" >  About</Link>
    <Link href="/service" >  Service</Link>
    <Link href="/blogs" >  Blogs</Link>
   </div>
  );
 
}
