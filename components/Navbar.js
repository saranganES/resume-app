import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <ul className="nav tab-nav justify-content-start">
      <li className="nav-item pe-4">
        Menu
      </li>
    </ul>
  );
};

export default Navbar;
