export default function Loading() {
   return (
      <>
         <div className="flex-1 p-2 ring-2 ring-black bg-amber-200 flex flex-col gap-6 animate-pulse">
            <span className=" flex items-start gap-2">
               <span className="p-1 bg-amber-50 ring-2 ring-black">
                  <span className="aspect-square h-8 rounded-full block bg-amber-400 ring-2 ring-black"></span>
               </span>
               <span className="w-full p-2 bg-amber-400 ring-2 ring-black font-semibold">
                  <span className="w-full p-2 rounded-full bg-amber-200 block ring-2 ring-black"></span>
               </span>
            </span>
         </div>
         <div className="p-2 w-20 bg-amber-200 ring-2 ring-black font-semibold animate-pulse">
            <span className="p-2 rounded-full bg-amber-400 block ring-2 ring-black"></span>
         </div>
      </>
   );
}
