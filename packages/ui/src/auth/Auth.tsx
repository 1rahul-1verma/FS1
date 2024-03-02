import { useAuth } from "./hooks/useAuth";

import {
  AuthPageType,
  TYPE_VS_TILE_MAP,
  TYPE_VS_REDIRECT_DESC,
  TYPE_VS_REDIRECT_BUTTON_LABEL,
  TYPE_VS_BUTTON_LABEL,
} from "./constants";

export const Auth = ({
  type,
  onSubmit,
  onRedirect,
}: {
  type: AuthPageType;
  onSubmit: (p: { email: string; password: string }) => void;
  onRedirect: () => void;
}): JSX.Element => {
  const {
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onSubmit: handleSubmit,
  } = useAuth({ onSubmit });

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {TYPE_VS_TILE_MAP[type]}
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  onChange={onEmailChange}
                  value={email}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={onPasswordChange}
                  value={password}
                />
              </div>

              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                {TYPE_VS_BUTTON_LABEL[type]}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {TYPE_VS_REDIRECT_DESC[type]}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:underline dark:text-indigo-500 ml-1"
                >
                  {TYPE_VS_REDIRECT_BUTTON_LABEL[type]}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
