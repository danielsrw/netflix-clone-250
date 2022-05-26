import { CheckIcon } from '@heroicons/react/outline'

function Table() {
	return (
		<table>
			<tbody className="divide-y divide-[gray]">
				<tr className="tableRow">
					<td className="tableDataTitle">Monthly price</td>
					<td className='tableDataFeature'>AED</td>
				</tr>
				<tr className="tableRow">
					<td className="tableDataTitle">Video quality</td>
					<td className='tableDataFeature'>HD</td>
				</tr>
				<tr className="tableRow">
					<td className="tableDataTitle">Watch on your TV, computer, mobile phone and tablet</td>
					<td className='tableDataFeature'>Computer</td>
				</tr>
			</tbody>
		</table>
	)
}

export default Table