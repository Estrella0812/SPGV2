'use client'
import {login} from './actions'
import { useState } from 'react'

export default function LoginComp(){
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const errorMessage = await login(formData)

      if (errorMessage) {
        setError("이메일 혹은 비밀번호가 일치하지 않습니다.")
      }
    }
    return(
        <>
         {/* Error Notification */}
        {error && (
            <div className="p-4 text-sm text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
        )}

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                {/* Email Input */}
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                />
                </div>

                {/* Password Input */}
                <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password"
                    required
                />
                </div>

                {/* Login Button */}
                <button
                type = "submit"
                className="w-full py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                Log in
                </button>
            </form>
        </>
    )
}