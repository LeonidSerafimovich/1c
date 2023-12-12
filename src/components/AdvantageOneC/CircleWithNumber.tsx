'use client'

import React from 'react'

interface CircleWithNumberProps {
	number: number
	backgroundColor?: string
	color?: string
}

const CircleWithNumber: React.FC<CircleWithNumberProps> = ({
	number,
	backgroundColor = '#b39c39', // значение по умолчанию для background-color
	color = 'white' // значение по умолчанию для color
}) => {
	return (
		<div className='circle' style={{ backgroundColor, color }}>
			{number}
			<style jsx>{`
				.circle {
					width: 50px;
					height: 50px;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 24px;
				}
			`}</style>
		</div>
	)
}

export default CircleWithNumber
