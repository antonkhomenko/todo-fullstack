import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center  gap-y-4 justify-center h-screen">
      <div className="px-8 py-12 flex flex-col items-center gap-4 bg-stone-900 rounded-lg w-[80%]">
        <h1 className="text-white font-bold text-4xl">
          Something gets wrong 🤧
        </h1>
        <p className='text-white'>Sorry, an unexpected error has occurred.</p>
        <p>{error.statusText || error.message}</p>
      </div>
    </div>
  );
}

export default ErrorPage