import React from 'react'

const login_page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
      Đăng nhập
    </h2>

    {/* Email */}
    <input
      type="email"
      placeholder="Email"
      className="w-full mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
    />

    {/* Password */}
    <input
      type="password"
      placeholder="Mật khẩu"
      className="w-full mb-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500"
    />

    <div className="text-right text-sm text-gray-500 mb-4 cursor-pointer hover:text-red-500">
      Quên mật khẩu?
    </div>

    {/* Button */}
    <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
      Đăng nhập
    </button>

    {/* Divider */}
    <div className="text-center my-4 text-gray-400">hoặc</div>

    {/* Social */}
    <button className="w-full border py-3 rounded-lg mb-2 hover:bg-gray-50">
      Đăng nhập với Google
    </button>

    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
      Facebook
    </button>

    {/* Switch */}
    <p className="text-center mt-6 text-gray-500">
      Chưa có tài khoản?
      <span className="text-red-600 ml-1 cursor-pointer hover:underline">
        Đăng ký
      </span>
    </p>

  </div>
</div>
  )
}

export default login_page