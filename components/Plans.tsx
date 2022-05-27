import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { Table, Loader } from './'
import { CheckIcon } from '@heroicons/react/outline'
import useAuth from '../hooks/useAuth'

function Plans() {
	return (
		<div>
			<Head>
		        <title>Netflix</title>
		        <link rel="icon" href="/favicon.ico" />
	      	</Head>

	      	<header className="border-b border-white/10 bg-[#141414]">
				<Link href="/">
					<img src="https://rb.gy/ulxxee" alt="Netflix" width={150} height={90} className="cursor-pointer object-contain" />
				</Link>
				<button className="text-lg font-medium hover:underline" >
					Sign Out
				</button>
			</header>

			<br />
			<br />
			<br />

			<main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
				<h1 className="mb-3 text-3xl font-medium">
		          	Choose the plan that's right for you
		        </h1>
		        <ul>
					<li className="flex items-center gap-x-2 text-lg">
						<CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
						Ad-free.
					</li>
					<li className="flex items-center gap-x-2 text-lg">
						<CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
						just for you.
					</li>
					<li className="flex items-center gap-x-2 text-lg">
						<CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
						your plan anytime.
					</li>
				</ul>

				<div className="mt-4 flex flex-col space-y-4">
					<div className="flex w-full items-center justify-end self-end md:w-3/5">
						<div className='planBox'>
							Product Name
						</div>
					</div>

					<Table />

					<button className='mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px]'>
			            Subscribe
			        </button>
				</div>
			</main>
		</div>
	)
}

export default Plans