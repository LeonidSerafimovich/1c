'use client'

import React from 'react'

interface CircleWithNumberProps {
	number: number
}

const CircleWithNumber: React.FC<CircleWithNumberProps> = ({ number }) => {
	return (
		<div className='circle'>
			{number}
			<style jsx>{`
				.circle {
					width: 50px;
					height: 50px;
					border-radius: 50%;
					background-color: #ff3366;
					color: white;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 24px;
					font-weight: bold;
				}
			`}</style>
		</div>
	)
}

export default CircleWithNumber
