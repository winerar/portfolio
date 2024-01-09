import { IExperience, Months } from "../types"

export const experience: Array<IExperience> = [
	{
		position: "Web Engineer",
		organization: "Martspec",
		description:
			"Frontend developing using React, website support.",
		city: "Austin",
		country: "USA",
		yearFrom: 2023,
		monthFrom: Months.Dec,
	},
	{
		position: "Frontend Developer",
		organization: "Freelance",
		description:
			"Frontend developing using React+Redux+TS as well as HTML+CSS+JS for customers. Check my GitHub to see completed projects.",
		city: "Yerevan",
		country: "Armenia",
		yearFrom: 2022,
		monthFrom: Months.Dec,
	},
	{
		position: ".NET Support Developer",
		organization: "Developer Express Inc.",
		description:
			"Customer Support in English. I Provided recommendations to customers on using the company's products to solve specific tasks. Wrote bug reports and address issues. Demonstrated the product's functionality to users using personal demo projects.",
		city: "Yerevan",
		country: "Armenia",
		yearFrom: 2022,
		monthFrom: Months.Aug,
		yearTo: 2022,
		monthTo: Months.Dec,
	},
	{
		position: "Developer",
		organization: "Strizhament",
		description:
			'I supported and customized 1C:Retail 2.3 for the "Vinoteka Strizhament" store chain. During this time, I configured synchronization with the "Vinoteka Strizhament" mobile application via REST API, Set up synchronization between 1C: Retail and the Bitrix website (rewriting 40% of the integration module), Reduced the number of support requests from employees in 70 stores by 50% by resolving configuration errors in the 1C: Retail system, Configured MS SQL Server and implemented database backup procedures, Managed the transition of the store chain to 1C: Retail during a merger.',
		city: "Stavropol",
		country: "Russia",
		yearFrom: 2021,
		monthFrom: Months.Jul,
		yearTo: 2022,
		monthTo: Months.Jul,
	},
]
