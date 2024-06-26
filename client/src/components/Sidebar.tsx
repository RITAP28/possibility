import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full font-Code">
      <div className="w-full text-white flex justify-center my-[1rem]">
        <button
          type="button"
          className="w-[80%] py-2 font-bold hover:cursor-pointer rounded-lg hover:bg-slate-500"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
      </div>
      <div className="flex justify-center">
        <hr className="border-slate-600 w-[80%]" />
      </div>
      <div className="w-full text-white flex justify-center my-[1rem]">
        <button
          type="button"
          className="w-[80%] py-2 font-bold hover:cursor-pointer rounded-lg hover:bg-slate-500"
          onClick={() => {
            navigate("/upload");
          }}
        >
          Upload
        </button>
      </div>
      <div className="flex justify-center">
        <hr className="border-slate-600 w-[80%]" />
      </div>
      <div className="w-full text-white flex justify-center my-[1rem]">
        <button
          type="button"
          className="w-[80%] py-2 font-bold hover:cursor-pointer rounded-lg hover:bg-slate-500"
          onClick={() => {
            navigate("/profile");
          }}
        >
          Profile
        </button>
      </div>
      <div className="flex justify-center">
        <hr className="border-slate-600 w-[80%]" />
      </div>
      <div className="w-full text-white flex justify-center my-[1rem]">
        <button
          type="button"
          className="w-[80%] py-2 font-bold hover:cursor-pointer rounded-lg hover:bg-slate-500"
          onClick={() => {
            navigate("/editor");
          }}
        >
          Editor
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
