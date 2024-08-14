function WindowHeader({children}) {
  return (
    <h2 className="bg-mainColor absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%] font-semibold container-border px-6 py-2 rounded-full">
      {children}
    </h2>
  );
}

export default WindowHeader;
