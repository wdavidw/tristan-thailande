import Link from 'next/link'

export function Intro() {
  return (
    <>
      {/* <div>
        <Link href="/">
          <Logo className="inline-block h-8 w-auto" />
        </Link>
      </div> */}
      <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
        Tristan en Thailand{' '}
        <span className="text-[#a33ef2] text-2xl">Déroulement de mon voyage</span>
      </h1>
      <p className="mt-4 text-sm/6 text-gray-300">
        Voici le récit de mon voyage, jour par jour, accompagné de ma maman,
        mon papa et de mon petit frère, en découvrant la culture du pays, en
        visitant les temples et en profitant de la mer, le tout en un mois.
      </p>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Merci à l'école{' '}
      <Link href="https://ecolelasource.org/" className="text-slate-100">La Source</Link> de Meudon.
    </p>
  )
}
