import image1 from "../assets/godzilla_4k_hd_godzilla_vs_kong-t2.jpg";
import { useUserDetails } from "../Globelstate/Store";
const Dashboard = () => {
  const { userDetails } = useUserDetails();
  const sample = "user";
  localStorage.setItem("sample", sample);

  console.log(localStorage.getItem("sample"));

  return (
    <div className="w-screen h-screen border-4 border-gray-700">
      <ul>
        <li>{userDetails?.role}</li>
        <li>{userDetails?.name}</li>
        <li>{userDetails?.email}</li>
      </ul>
      <img className="w-full h-full" src={image1} alt="gd" />
    </div>
  );
};

export default Dashboard;
