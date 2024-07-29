

export default function Main(){
    return (
<div className="min-h-dvh w-auto place-content-center flex items-center flex-col">
  <h1 className="text-slate-700 text-5xl text-center font-semibold p-5">We've really sped up our workflow</h1>

  <p className="p-5 w-4/5 text-center"> 
    <span className="text-slate-700 text-base font-medium">We've just released a new update!</span> 
    Check out the all-new Dashboard view. Pages now load faster. You can try us for free for 30 days.
  </p>

  <p className="flex text-center sm:py-2 py-8">Join 4,000+ companies already growing</p>
  <div className="flex sm:flex-row p-5 w-4/5 flex-col-reverse text-center place-content-center">
    <button className="text-indigo-400 py-2 px-3 border border-blue-700 text-base font-medium rounded">
      &#8594; Start Learning Today
    </button> 
    <button className="text-white py-2 px-3 border bg-indigo-700 text-base font-medium rounded">
      Join Now
    </button> 
  </div>
</div>
)
}