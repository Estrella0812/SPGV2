import LoginComp from './loginComponent'

export default async function Login() {

  return (
    <div className="min-h-[80vh] flex items-center pb-[10vh]">
      <div className="container max-w-5xl mx-auto">
        <div className="flex items-center justify-center pt-20">
          <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl ring-1 ring-black/10">
            <h2 className="text-2xl font-semibold text-center text-gray-700">Login</h2>
            <LoginComp></LoginComp>
          </div>
        </div>
      </div>
    </div>
  )
}
