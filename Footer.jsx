export default function Footer() {
  return (
    <div className="bg-zinc-900 mt-10">
      <div className="flex justify-between px-14 py-4  items-center">
        <div className="flex gap-2.5 items-center">
          <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="" />
          <div className="text-white font-semibold pt-2">List Your Show</div>
          <div className="text-white pt-2">
            Got a show,event,activity or a great experience? Partner with us &
            get listed on BookMyShow
          </div>
        </div>
        <div className="bg-rose-500 text-white rounded px-4 py-2">
          Contact Today!
        </div>
      </div>
      <div className="mt-2 flex gap-2 items-center px-8 ">
        <hr className="w-full" />
        <img className="mt-1" src="./logo.svg" alt="logo" />
        <hr className="w-full" />
      </div>
    </div>
  );
}
