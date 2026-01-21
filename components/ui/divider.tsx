export const Divider = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="flex items-center justify-center max-w-[800px] mx-auto px-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#eeba2c]/60 to-[#eeba2c]" />
        <div className="mx-6 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-2 border-[#eeba2c] flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-[#eeba2c]" />
          </div>
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#eeba2c]/60 to-[#eeba2c]" />
      </div>
    </div>
  );
};

