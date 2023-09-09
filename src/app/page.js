// "use client";
// import { useState } from "react";

import NavigationHeader from "@/components/global/navigation-header";
import UserProfile from "@/components/profile";
import Footer from "@/components/global/footer";

export default function Home() {
  // const [val, setVal] = useState(0);
  // const changeVal = (newValue) => {
  //   setVal(newValue);
  // };
  return (
    <main>
      {/* {val === 0 && <SignIn changeVal={changeVal} />}
      {val === 1 && <SignUp changeVal={changeVal} />}
      <Footer /> */}

      <NavigationHeader />
      <UserProfile />
      <Footer />
    </main>
  );
}
