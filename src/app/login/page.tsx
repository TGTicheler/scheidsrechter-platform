import { login, signup } from './actions'

// 1. Maak de functie 'async'
export default async function LoginPage({
  searchParams,
}: {
  // 2. Definieer searchParams als een Promise
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  // 3. Wacht hier tot de parameters 'uitgepakt' zijn
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Inloggen op uw account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Of registreer als nieuwe gebruiker
          </p>
        </div>
        
        {/* Gebruik nu de variabele 'error' die we hierboven hebben 'awaited' */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {/* ... De rest van je formulier blijft hetzelfde ... */}
        <form className="mt-8 space-y-6">
            {/* ... inputs ... */}
             <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">Email adres</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3"
                placeholder="Email adres"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Wachtwoord</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3"
                placeholder="Wachtwoord"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              formAction={login}
              className="group relative flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Inloggen
            </button>
            <button
              formAction={signup}
              className="group relative flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Registreren
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}