const SignupForm = ({ onSubmit }) => {
    return (
      <form onSubmit={onSubmit} className="w-full max-w-md space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        {/* Add additional fields for signup (e.g., username) */}
        <div className="flex flex-col">
          <label htmlFor="username" className="text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
        >
          Sign Up
        </button>
      </form>
    );
  };
  
  export default SignupForm;
  