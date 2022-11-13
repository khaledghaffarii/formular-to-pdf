import React from 'react';
import './App.css';
import ReactToPdf from 'react-to-pdf';
const ref = React.createRef();
const options = {
	orientation: 'landscape',
	unit: 'in',
	format: [14, 7],
};
function App() {
	return (
		<div className='App'>
			<div className='hidden sm:block' aria-hidden='true'>
				<div className='py-5'>
					<div className='border-t border-gray-200' />
				</div>
			</div>

			<div className='mt-10 sm:mt-0' ref={ref}>
				<div className='md:grid md:grid-cols-3 md:gap-6'>
					<div className='md:col-span-1'>
						<div className='px-4 sm:px-0'>
							<h3 className='text-lg font-medium leading-6 text-gray-900'>
								Personal Information
							</h3>
							<p className='mt-1 text-sm text-gray-600'>
								Use a permanent address where you can receive mail.
							</p>
						</div>
					</div>
					<div className='mt-5 md:col-span-2 md:mt-0'>
						<form action='#' method='POST'>
							<div className='overflow-hidden shadow sm:rounded-md'>
								<div className='bg-white px-4 py-5 sm:p-6'>
									<div className='grid grid-cols-6 gap-6'>
										<div className='col-span-6 sm:col-span-3'>
											<label
												htmlFor='first-name'
												className='block text-sm font-medium text-gray-700'>
												First name
											</label>
											<input
												type='text'
												name='first-name'
												id='first-name'
												autoComplete='given-name'
												className='mt-1 block w-full rounded-md border-gray-300 border h-7 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
											/>
										</div>

										<div className='col-span-6 sm:col-span-3'>
											<label
												htmlFor='last-name'
												className='block text-sm font-medium text-gray-700'>
												Last name
											</label>
											<input
												type='text'
												name='last-name'
												id='last-name'
												autoComplete='family-name'
												className='mt-1 block w-full rounded-md border-gray-300 border h-7 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
											/>
										</div>

										<div className='col-span-6 sm:col-span-4'>
											<label
												htmlFor='email-address'
												className='block text-sm font-medium text-gray-700'>
												Email address
											</label>
											<input
												type='text'
												name='email-address'
												id='email-address'
												autoComplete='email'
												className='mt-1 block w-full rounded-md  bg-white border h-7
                         border-gray-300  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
											/>
										</div>

										<div className='col-span-6 sm:col-span-3'>
											<label
												htmlFor='country'
												className='block text-sm font-medium text-gray-700'>
												Country
											</label>
											<select
												id='country'
												name='country'
												autoComplete='country-name'
												className='mt-1 block xl:w-full w-60 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'>
												<option>United States</option>
												<option>Canada</option>
												<option>Mexico</option>
											</select>
										</div>

										<div className='col-span-6'>
											<label
												htmlFor='street-address'
												className='block text-sm font-medium text-gray-700'>
												Street address
											</label>
											<input
												type='text'
												name='street-address'
												id='street-address'
												autoComplete='street-address'
												className='mt-1 block w-full rounded-md border-gray-300 border h-7 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
											/>
										</div>

										<div className='col-span-6 sm:col-span-6 lg:col-span-2'>
											<label
												htmlFor='city'
												className='block text-sm font-medium text-gray-700'>
												City
											</label>
											<input
												type='text'
												name='city'
												id='city'
												autoComplete='address-level2'
												className='mt-1 block w-full rounded-md border-gray-300 border h-7 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
											/>
										</div>

										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='region'
												className='block text-sm font-medium text-gray-700'>
												State / Province
											</label>
											<input
												type='text'
												name='region'
												id='region'
												autoComplete='address-level1'
												className='mt-1 block w-full rounded-md border-gray-300 border h-7 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
											/>
										</div>

										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='postal-code'
												className='block text-sm font-medium text-gray-700'>
												ZIP / Postal code
											</label>
											<input
												type='text'
												name='postal-code'
												id='postal-code'
												autoComplete='postal-code'
												className='mt-1 block w-full rounded-md border-gray-300 border h-7 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
											/>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
				<ReactToPdf
					targetRef={ref}
					filename='formulaire.pdf'
					options={options}
					x={0.5}
					y={0.5}
					scale={0.8}>
					{({ toPdf }) => (
						<button
							onClick={toPdf}
							type='submit'
							className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
							Generate PDF ->
						</button>
					)}
				</ReactToPdf>
			</div>
		</div>
	);
}

export default App;
