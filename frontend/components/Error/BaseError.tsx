import Link from 'next/link';

interface Props {
  error: string;
  title: string;
  subtitle: string;
  isBack?: boolean;
}

export const BaseError: React.FC<Props> = props => {
  const { error, subtitle, title, isBack } = props;
  return (
    <div className="flex min-h-[69vh] items-center justify-center px-4 py-20">
      <div className="max-w-lg text-center">
        <h2 className="text-light-blue text-8xl font-bold">{error}</h2>
        <h3 className="my-4 text-2xl font-bold">{title}</h3>
        <p className="text-gray-500">{subtitle}</p>
        {isBack && (
          <Link href="/">
            <button
              type="button"
              className="bg-light-blue my-3 mb-2 mr-2 rounded-lg px-5 py-2.5  text-base font-medium text-white hover:bg-opacity-95"
            >
              <div className="flex">
                <svg
                  className="mx-2 mt-2 h-5 w-5"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M204.44 25.35c-.51-10.06-3.9-17.21-10.19-21.36-15.76-10.52-31.28 1.96-42.64 12.06L9.5 143.81c-12.67 11.46-12.67 27.77 0 39.22L148.38 307.9c11.9 10.68 28.78 26.38 45.87 14.98 6.29-4.17 9.68-11.33 10.19-21.38v-76.3h301.23c3.48 0 6.33-2.86 6.33-6.34V107.98c0-3.47-2.86-6.33-6.33-6.33H204.44v-76.3z"
                  ></path>
                </svg>
                <div>GO BACK HOME</div>
              </div>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
