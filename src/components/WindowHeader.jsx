function WindowHeader({text}) {
  return (
    <h2 className="bg-mainColor absolute top-0 translate-y-[-50%] font-semibold container-border px-6 py-2 rounded-l-full rounded-r-full">
      {text}
    </h2>
  );
}

export default WindowHeader;
