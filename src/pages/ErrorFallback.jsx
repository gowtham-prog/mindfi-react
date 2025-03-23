function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-b from-white to-purple-200 dark:bg-gradient-to-b dark:from-black dark:to-purple-950 py-24 dark:bg- p-6 text-center">
            <div className="border border-red-400 shadow-md rounded-2xl p-6 max-w-md w-full">
                <h2 className="text-xl font-semibold text-red-600 mb-2">Oops! Something went wrong.</h2>
                <p className="text-black dark:text-white mb-4">{error.message}</p>
                <button
                    onClick={resetErrorBoundary}
                    className="bg-red-500 hover:bg-red-600 text-black dark:text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}

export default ErrorFallback;