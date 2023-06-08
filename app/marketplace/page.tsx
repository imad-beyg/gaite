"use client";

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {useMarketplaceContext} from '@/app/context/marketplace'

const items = [
    {
        "id": 1,
        "title": "Travel Reimbursement",
        "description": "Expenses incurred during business travel, such as airfare, hotel accommodations, meals, and transportation.",
        "examples": ["Airfare", "Hotel accommodations", "Meals", "Transportation"]
    },
    {
        "id": 2,
        "title": "Expense Reimbursement",
        "description": "Reimbursement for business-related expenses personally paid for by the employee, such as office supplies, client entertainment, or mileage.",
        "examples": ["Office supplies", "Client entertainment", "Mileage"]
    },
    {
        "id": 3,
        "title": "Medical Reimbursement",
        "description": "Reimbursement for eligible medical expenses not covered by insurance, such as prescription drugs, doctor visits, or medical equipment.",
        "examples": ["Prescription drugs", "Doctor visits", "Medical equipment"]
    },
    {
        "id": 4,
        "title": "Tuition Reimbursement",
        "description": "Reimbursement for continuing education or professional development expenses.",
        "examples": ["Tuition fees", "Course materials"]
    },
    {
        "id": 5,
        "title": "Moving Expense Reimbursement",
        "description": "Reimbursement for expenses incurred during employee relocation, including transportation, packing, and storage costs.",
        "examples": ["Transportation", "Packing", "Storage"]
    },
    {
        "id": 6,
        "title": "Vendor/Supplier Reimbursement",
        "description": "Reimbursement for certain expenses incurred by vendors or suppliers on behalf of the business.",
        "examples": ["Vendor travel expenses", "Conference registration"]
    },
    {
        "id": 7,
        "title": "Insurance Reimbursement",
        "description": "Reimbursement for eligible medical services or covered losses, typically submitted as claims to the insurance provider.",
        "examples": ["Medical procedures", "Prescription medications"]
    },
    {
        "id": 8,
        "title": "Mileage Reimbursement",
        "description": "Reimbursement for employees who use their personal vehicles for business purposes, based on a predetermined rate per mile.",
        "examples": ["Business-related mileage"]
    },
    {
        "id": 9,
        "title": "Professional Membership Reimbursement",
        "description": "Coverage of the cost of professional association memberships for employees, enhancing networking and skill-building opportunities.",
        "examples": ["Annual membership fees", "Professional conference fees"]
    },
    {
        "id": 10,
        "title": "Training and Certification Reimbursement",
        "description": "Reimbursement for employees pursuing professional certifications or attending training programs, covering associated costs.",
        "examples": ["Certification exam fees", "Training course fees"]
    }
];

export default function Marketplace() {
    const router = useRouter();
    const {setMarketplacePrompt}: any = useMarketplaceContext();

    const [requests, setRequests] = useState(items);
    const onSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        const filteredItems = items.filter(({title}) => title.toLowerCase().includes(value.toLowerCase()))
        setRequests(filteredItems);
    }

    const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    }
    return (
        <>
            <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6 min-h-screen">

                <div className="grid grid-cols-3 gap-4 mb-5">
                    <div className="col-start-3">
                        <input
                            type="text"
                            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 px-4 bg-white rounded-md py-3 border-2"
                            placeholder='Search'
                            onInput={onSearch}
                        />
                    </div>

                </div>
                <div className="grid grid-cols-3 gap-4">
                    {requests.map(({id, title, description, examples}, index) => {
                        return (
                            <div className="rounded shadow px-4 p-6 bg-white" key={`request-${index}`}>
                                <h2 className="text-gray-700 text-md font-bold">{title}</h2>
                                <p className="text-gray-500 text-sm h-16 mb-2.5">{description}</p>
                                <div className="flex mb-4">
                                    {examples.map((example, index) => {
                                        return (
                                            <span
                                                className="bg-gray-400 text-white rounded text-xs px-1.5 py-1 mr-1 capitalize"
                                                key={index}>{example}</span>
                                        )
                                    })}
                                </div>
                                <button
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                                        setMarketplacePrompt({
                                            title,
                                            description,
                                        })
                                        router.push('/demo')
                                    }}
                                >
                                    Choose
                                </button>
                            </div>
                        )
                    })}
                </div>


            </section>
        </>
    )
}