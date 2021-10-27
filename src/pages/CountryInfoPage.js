import React from 'react';
import { Link, useParams} from 'react-router-dom';


function CountryInfoPage() {
    const { country } = useParams()
    
    return (
        <>  
            <h2> Information for { country } </h2>
            <table id="country-table">
                <thead>
                    <tr>
                        <th>Capital</th>
                        <th>Largest City</th>
                        <th>Language(s)</th>
                        <th>Currency</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    <td>Ottawa</td>
                    <td>Toronto</td>
                    <td>English, French</td>
                    <td>CAD</td>
                    <td>38,246,108</td>
                </tbody>
            </table>
            <h3>Wikipedia summary of Canada</h3>
            <div id="wiki-summary">
                <p>
                Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic to the Pacific
                and northward into the Arctic Ocean, covering 9.98 million square kilometres (3.85 million square miles), making it the 
                world's second-largest country by total area. Its southern and western border with the United States, stretching 8,891 
                kilometres (5,525 mi), is the world's longest bi-national land border. Canada's capital is Ottawa, and its three largest 
                metropolitan areas are Toronto, Montreal, and Vancouver. Indigenous peoples have continuously inhabited what is now Canada
                for thousands of years. Beginning in the 16th century, British and French expeditions explored and later settled along the 
                Atlantic coast. As a consequence of various armed conflicts, France ceded nearly all of its colonies in North America in 
                1763. In 1867, with the union of three British North American colonies through Confederation, Canada was formed as a federal 
                dominion of four provinces. This began an accretion of provinces and territories and a process of increasing autonomy from 
                the United Kingdom. This widening autonomy was highlighted by the Statute of Westminster 1931 and culminated in the Canada 
                Act 1982, which severed the vestiges of legal dependence on the Parliament of the United Kingdom. Canada is a parliamentary 
                democracy and a constitutional monarchy in the Westminster tradition. The country's head of government is the prime minister—
                who holds office by virtue of their ability to command the confidence of the elected House of Commons—and is appointed by the 
                governor general, representing the monarch, who serves as head of state. The country is a Commonwealth realm and is officially 
                bilingual at the federal level. It ranks among the highest in international measurements of government transparency, civil 
                liberties, quality of life, economic freedom, and education. It is one of the world's most ethnically diverse and multicultural 
                nations, the product of large-scale immigration from many other countries. Canada's long relationship with the United States has 
                had a significant impact on its economy and culture. A highly developed country, Canada has the 26th highest nominal per-capita 
                income globally and the sixteenth-highest ranking in the Human Development Index. Its advanced economy is the ninth-largest in 
                the world, relying chiefly upon its abundant natural resources and well-developed international trade networks. Canada is part 
                of several major international and intergovernmental institutions or groupings including the United Nations, NATO, the G7, the 
                Group of Ten, the G20, the Organisation for Economic Co-operation and Development (OECD), the World Trade Organization (WTO), 
                the Commonwealth of Nations, the Arctic Council, the Organisation internationale de la Francophonie, the Asia-Pacific Economic 
                Cooperation forum, and the Organization of American States.
                </p>
            </div>
            <div>
                <h3>Wikipedia Page analytics on {country}</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Most common words</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div id="Links">
                <Link to="/">Homepage</Link><br/>
            </div>
        </>
    )
}

export default CountryInfoPage