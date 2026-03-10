import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend,
    } from "recharts"

import Reveal from "../animations/revealAnimation"

// Example monthly growth data with country details
const courierData = [
    { month: "Jan", value: 80, country: "PH" },
    { month: "Feb", value: 90, country: "PH, SG" },
    { month: "Mar", value: 100, country: "PH, SG, MY" },
    { month: "Apr", value: 110, country: "PH, SG, MY, HK" },
    { month: "May", value: 125, country: "PH, SG, MY, HK, JP" },
]

const productData = [
    { month: "Jan", value: 500, country: "PH" },
    { month: "Feb", value: 1200, country: "PH, SG" },
    { month: "Mar", value: 2000, country: "PH, SG, MY" },
    { month: "Apr", value: 2800, country: "PH, SG, MY, HK" },
    { month: "May", value: 3500, country: "PH, SG, MY, HK, JP" },
]

const countryData = [
    { month: "Jan", value: 1, country: "PH" },
    { month: "Feb", value: 2, country: "PH, SG" },
    { month: "Mar", value: 3, country: "PH, SG, MY" },
    { month: "Apr", value: 4, country: "PH, SG, MY, HK" },
    { month: "May", value: 5, country: "PH, SG, MY, HK, JP" },
]

export default function StatsGraphsWithExplanations() {
    const chartStyle = "p-6 bg-white shadow-lg rounded-2xl flex flex-col border border-gray-100"

    return (
        <section className="w-full ">
            <div className="max-w-7xl mx-auto px-6 lg:px-0">
                <Reveal>
                        <h2 className="text-3xl md:text-7xl font-bold mb-12 text-center text-orange-300">
                            Our Growth Over Time
                        </h2>
                </Reveal>
                

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                
                    <Reveal delay={0.1}>
                        <div className={chartStyle}>
                            <h3 className="text-xl font-bold text-center mb-4">Couriers</h3>
                            <div className="w-full h-60">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={courierData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis allowDecimals={false} />
                                        <Tooltip 
                                            formatter={(value, name, props) => [`${value}`, "Couriers"]}
                                            labelFormatter={(label, payload) => {
                                            return `${label} - Countries: ${payload[0]?.payload.country}`
                                            }}
                                        />
                                        <Legend />
                                        <Bar dataKey="value" fill="#f97316" radius={0} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <p className="mt-4 text-gray-600 text-center text-sm md:text-base">
                            This chart illustrates the monthly growth of our partnered couriers and the countries they operate in, showing how we gradually expanded our international delivery network.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className={chartStyle}>
                            <h3 className="text-xl font-bold text-center mb-4">Products Sold</h3>
                            <div className="w-full h-60">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={productData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis allowDecimals={false} />
                                        <Tooltip 
                                            formatter={(value, name, props) => [`${value}`, "Products"]}
                                            labelFormatter={(label, payload) => {
                                            return `${label} - Countries: ${payload[0]?.payload.country}`
                                            }}
                                        />
                                        <Legend />
                                        <Bar dataKey="value" fill="#3b82f6" radius={0} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <p className="mt-4 text-gray-600 text-center text-sm md:text-base">
                            Products sold per month show our e-commerce activity growth. You can track the increase in sales as we expand into new countries and categories.
                            </p>
                        </div>                            
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className={chartStyle}>
                            <h3 className="text-xl font-bold text-center mb-4">Countries Served</h3>
                            <div className="w-full h-60">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={countryData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis allowDecimals={false} />
                                        <Tooltip 
                                            formatter={(value, name, props) => [`${value}`, "Countries"]}
                                            labelFormatter={(label, payload) => {
                                            return `${label} - Countries: ${payload[0]?.payload.country}`
                                            }}
                                        />
                                        <Legend />
                                        <Bar dataKey="value" fill="#10b981" radius={0} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <p className="mt-4 text-gray-600 text-center text-sm md:text-base">
                            This chart shows how our global reach has grown over time, with new countries being added each month as we expand our international e-commerce operations.
                            </p>
                        </div>                                
                    </Reveal>
                        
                </div>
            </div>
        </section>
    )
}
